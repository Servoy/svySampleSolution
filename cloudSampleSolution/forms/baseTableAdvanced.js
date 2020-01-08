/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"494230C2-7CCA-4528-8088-4E055AB5E781"}
 */
var searchText;

/**
 * @type {scopes.svyToolbarFilter.ListComponentFilterRenderer}
 *
 * @properties={typeid:35,uuid:"36DBC6FF-7710-4094-8778-E14F7CBBFC59",variableType:-4}
 */
var toolbarFilter;
/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private 
 *
 * @properties={typeid:24,uuid:"18402340-95F4-4FEC-BAAE-DB7533D2C3E1"}
 */
function onActionShowFilter(event) {
	toolbarFilter.showPopupFilterPicker(elements[event.getElementName()])
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2ADE1345-EC76-4D90-A228-58AA5363C8EE"}
 */
function onLoad(event) {
	toolbarFilter = scopes.svyToolbarFilter.createFilterToolbar(elements.filterToolbar, elements.table);
	toolbarFilter.setOnFilterApplyCallback(onFilterApplyEvent);
	toolbarFilter.setOnFilterRemovedCallback(onFilterRemovedEvent);
}


/**
 * @private 
 * @properties={typeid:24,uuid:"E9C17BB8-BB62-4AE9-B9DA-34E72A10D8AA"}
 */
function onFilterRemovedEvent() {
	//plugins.webnotificationsToastr.info('filter removed');
	
	saveToolbarFilterProperty();
}


/**
 * @private 
 * 
 * @param {Array} values
 * @param {String} operator
 * @param {scopes.svyToolbarFilter.ListComponentFilterRenderer} filter
 *
 * @properties={typeid:24,uuid:"2600A53A-0203-4DB5-9D84-D2FC9FE1B450"}
 */
function onFilterApplyEvent(values, operator, filter) {
	//plugins.webnotificationsToastr.info(values.join(','));
	
	saveToolbarFilterProperty();
}

/**
 * @private  
 * @properties={typeid:24,uuid:"12E20715-5A64-45B2-A79A-335A1BFCFD5C"}
 */
function saveToolbarFilterProperty() {
	
	var filtersState = toolbarFilter.getToolbarFiltersState();
	var propertyNameSpace = controller.getName() + "-" + elements.table.getName();	
	scopes.svyProperties.setUserProperty(propertyNameSpace,'filter-state',JSON.stringify(filtersState));
}

/**
 * Called when the mouse is clicked on a list entry.
 *
 * @param {object} entry
 * @param {Number} index
 * @param {string} dataTarget
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4DA82988-EE93-4BFC-A5DE-11AE27EE1310"}
 */
function onClick(entry, index, dataTarget, event) {
	toolbarFilter.onClick(entry,index,dataTarget,event);
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FA66816E-DE30-43F3-AF63-E26D2F6A2379"}
 * @AllowToRunInFind
 */
function onActionSearch(event) {
	search(searchText);
}

/**
 * @AllowToRunInFind
 * @protected 
 * 
 * @param text
 *
 * @properties={typeid:24,uuid:"36350B90-1303-4537-AE70-840A025A3FA4"}
 */
function search(text) {
	toolbarFilter.setSearchText(text);
	toolbarFilter.search();
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"3E00593D-76BD-42E1-9175-AE570D271FD0"}
 */
function duplicate() {
	foundset.duplicateRecord();
	gotoNew();
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"0617C50E-1CB5-4E1F-8D42-AEA2408967DD"}
 */
function newRecord() {
	foundset.newRecord();
	gotoNew();
}

/**
 * Go to the edit screen for the selected record
 * 
 * @protected
 *
 * @properties={typeid:24,uuid:"0B0DCE39-793C-4171-9520-0C14BA8E023B"}
 */
function gotoNew() {
	throw "to be implemented";
}

/**
 * Go to the detail view screen for the selected record
 *
 * @protected
 * 
 * @properties={typeid:24,uuid:"E1CB51F6-AE0B-4F7A-9513-92ADF234EEE9"}
 */
function gotoDetail() {
	throw "to be implemented";
}


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 * the record is not an actual JSRecord but an object having the dataprovider values of the clicked record
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {object} [record]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FCD18DA8-42F4-41FC-B974-F482AC22A966"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	gotoDetail();
}

/**
 * Called when the columns state is changed.
 *
 * @param {string} columnState
 *
 * @private
 *
 * @properties={typeid:24,uuid:"913541E9-3BB0-4377-8C06-F6E22C3B6948"}
 */
function onColumnStateChanged(columnState) {
	var propertyNameSpace = controller.getName() + "-" + elements.table.getName();	
	scopes.svyProperties.setUserProperty(propertyNameSpace, 'table-state', columnState);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C9EC8A6B-DABC-41C0-BA9E-E1C7C415EA33"}
 */
function onShow(firstShow, event) {
	
	// listen for global search
	scopes.svyNavigationUX.addGlobalSearchListener(globalSearchListener);
	
	// restore grid state
	var propertyKey = controller.getName() + "-" + elements.table.getName();
	var columnState = scopes.svyProperties.getUserPropertyValue(propertyKey, 'table-state');
	if (columnState) {
		elements.table.restoreColumnState(columnState);
	}
	
	// check for navigation parameters
	var navItem = scopes.svyNavigation.getCurrentItem();
	if (navItem.getFormName() == controller.getName()) {
		var customData = navItem.getCustomData();
		if (customData && customData.filters && customData.filters.length) {
			var navFilters = customData.filters;
			
			// clear prev filters
			toolbarFilter.clearGridFilters();
			
			// set new filters
			for (var i = 0; i < navFilters.length; i++) {
				var filter = navFilters[i];
				
				var column = getColumn(filter.dataprovider)
				toolbarFilter.setFilterValue(column, filter.values, filter.operator);
			}
		}
	}
	
	if (firstShow) {
		// restore toolbar filter state on first show
		var filterState = scopes.svyProperties.getUserPropertyValue(propertyKey, 'filter-state');
		if (filterState) {
			/** @type {Array<{
				id: String,
				dataprovider: String,
				operator: String,
				params: Object,
				text: String,
				values: Array}>} */
			var toolbarState = JSON.parse(filterState);
			toolbarFilter.restoreToolbarFiltersState(toolbarState);
		}
	}
}

/**
 * @param {String} text
 * @protected 
 * 
 * @properties={typeid:24,uuid:"DFA73633-E335-4021-B293-D21DC2758C16"}
 */
function globalSearchListener(text) {
	search(text);
}


/**
 * @protected 
 * @param {String} dataprovider
 *
 * @properties={typeid:24,uuid:"633DA4C8-8E72-4243-ABFE-E7D092DDA47A"}
 */
function getColumn(dataprovider) {
	// TODO shall i move this method within svyPopupFilter !?
	var columns = elements.table.columns;
	for (var i = 0; i < columns.length; i++) {
		var col = columns[i];
		if (col.dataprovider == dataprovider) {
			return col;
		} 
	}
	return null;
}


/**
 * @protected 
 * @param form
 *
 * @properties={typeid:24,uuid:"185B6063-C444-4A51-A3C7-B42B18E648D5"}
 */
function showForm(form){
	var item = new scopes.svyNavigation.NavigationItem(form.controller.getName());
	scopes.svyNavigation.open(item,foundset.getSelectedRecord(),scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD)
}
/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"8B5718C5-FE11-48B5-8571-442EFEF79EAC"}
 */
function onHide(event) {
	scopes.svyNavigationUX.removeGlobalSearchListener(globalSearchListener)
	return true
}
