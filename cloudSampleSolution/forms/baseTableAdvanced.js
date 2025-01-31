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
 * @protected 
 * @properties={typeid:35,uuid:"46E8021B-4455-4D1C-A443-6E267B746577",variableType:-4}
 */
var chartParams = {
	label : "",
	value : "",
	valueFunc : "count"
}

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
	toolbarFilter.setOnSearchCommand(onSearchCommand);
	toolbarFilter.setOnFilterApplyQueryCondition(onFilterQueryCondition)
	
	// customize the free search
	var simpleSearch = toolbarFilter.getSimpleSearch();
	simpleSearch.addAlternateDateFormat("yyyy")
		.addAlternateDateFormat("MMM yyyy")
		.addAlternateDateFormat("MMMM yyyy")
		.addAlternateDateFormat("MM/yyyy").addAlternateDateFormat("MM-yyyy")
		.addAlternateDateFormat("dd/MM/yyyy").addAlternateDateFormat("dd-MM-yyyy")
		.addAlternateDateFormat("dd/MM/yyyy HH").addAlternateDateFormat("dd-MM-yyyy HH")
		.addAlternateDateFormat("dd/MM/yyyy HH:mm").addAlternateDateFormat("dd-MM-yyyy HH:mm")
		.addAlternateDateFormat("dd/MM/yyyy HH:mm:ss").addAlternateDateFormat("dd-MM-yyyy HH:mm:ss")
		.addAlternateDateFormat("DDD/yyyy").addAlternateDateFormat("DDD-yyyy");
	//chartParams.label = elements.table.columns[0].dataprovider;
}

/**
 * @param {QBSelect} query
 * @param {JSFoundSet} fs
 * @protected
 *
 * @properties={typeid:24,uuid:"A83ACE41-8AD3-4276-82DC-2E095F7CCEA8"}
 */
function onSearchCommand(query, fs) {
	fs.loadRecords(query)
}


/**
 * @protected 
 * @param {QBSelect} query
 * @param {String} dataprovider
 * @param {String} operator
 * @param {Array} values
 * @param {scopes.svyPopupFilter.AbstractPopupFilter} filter
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"83D47A95-BE7A-4797-AC2A-A8D7FD347AB0"}
 */
function onFilterQueryCondition(query, dataprovider, operator, values, filter) {
	return true;
}

/**
 * @private 
 * @properties={typeid:24,uuid:"E9C17BB8-BB62-4AE9-B9DA-34E72A10D8AA"}
 */
function onFilterRemovedEvent() {	
	saveToolbarFilterProperty();
	
	renderChart();
}


/**
 * @private 
 * 
 * @param {Array} values
 * @param {String} operator
 * @param {scopes.svyPopupFilter.AbstractPopupFilter} filter
 *
 * @properties={typeid:24,uuid:"2600A53A-0203-4DB5-9D84-D2FC9FE1B450"}
 */
function onFilterApplyEvent(values, operator, filter) {	
	saveToolbarFilterProperty();
	
	renderChart();
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
	renderChart();
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9C6747ED-5DA2-4932-BEC6-F77E7AEFE78E"}
 */
function tutorial(event) {
	scopes.tutorial.showTutorial(scopes.tutorial.TUTORIAL.TUTORIAL_1);
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"3E00593D-76BD-42E1-9175-AE570D271FD0"}
 */
function duplicate() {
	foundset.duplicateRecord();
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"0617C50E-1CB5-4E1F-8D42-AEA2408967DD"}
 */
function newRecord() {
	foundset.newRecord();
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
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	// restore chart settings upon onShow
	if (elements.tabChart.visible) {
		applyChartConfig(chartParams.label, chartParams.value, chartParams.valueFunc, chartParams.labelDisplay, chartParams.valueDisplay)
	}
	
	// restore grid state
	var propertyKey = controller.getName() + "-" + elements.table.getName();
	var columnState = scopes.svyProperties.getUserPropertyValue(propertyKey, 'table-state');
	if (columnState) {
		elements.table.restoreColumnState(columnState);
	}
	
	// restore toolbar filter state on first show
	if (firstShow) {
		var filterState = scopes.svyProperties.getUserPropertyValue(propertyKey, 'filter-state');
		if (filterState) {
			/** @type {Array<{
				id: String,
				dataprovider: String,
				operator: String,
				text: String,
				customProperties: Object,
				values: Array}>} */
			var toolbarState = JSON.parse(filterState);
			toolbarFilter.restoreToolbarFiltersState(toolbarState);
		}
	}
	
	// check for navigation parameters
	var navItem = scopes.svyNavigation.getCurrentItem();
	if (navItem.getFormName() == controller.getName()) {
		var customData = navItem.getCustomData();
		if (customData && customData.filters && customData.filters.length) {
			var navFilters = customData.filters;
			
			// clear prev filters
			toolbarFilter.clearFilterUI();
			
			// set new filters
			for (var i = 0; i < navFilters.length; i++) {
				var filter = navFilters[i];
				
				var filterItem = toolbarFilter.getFilter(filter.dataprovider);
				toolbarFilter.setFilterValue(filterItem, filter.values, filter.operator);
			}
		}
	}
	
	if (firstShow) {
		forms.tableChartAdvanced.configChart(foundset, "orders_to_customers.companyname");
	}

	// re-apply last search
	toolbarFilter.search();
	
	// render the chart
	renderChart();
}

/**
 * @protected 
 * @param {String} dataprovider
 * @return {CustomType<aggrid-groupingtable.column>}
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
 * @param {JSRecord|JSFoundSet} [record]
 *
 * @properties={typeid:24,uuid:"185B6063-C444-4A51-A3C7-B42B18E648D5"}
 */
function showForm(form, record){
	var dataToLoad = record ? record : foundset;
	scopes.global.showForm(form, dataToLoad, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
}

/**
 * Called when the columns data is changed.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {object} [oldvalue]
 * @param {object} [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"51762184-6F32-4021-9998-6CFBCA60B2FC"}
 */
function onColumnDataChange(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	// save data at every data change
	databaseManager.saveData();
	return true;
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"F797A8C4-CACD-4ACD-A76D-1EE4CB3EAF3A"}
 */
function toggleViewChart(event) {

	// elements.btnChartConfig.visible = elements.tabChart.visible;
	//elements.btnAdd.visible = !elements.tabChart.visible;
	
	if (!chartParams.label) {
		chartConfig(event);
	} else {
		elements.table.visible = !elements.table.visible;
		elements.tabChart.visible = !elements.tabChart.visible;		
		renderChart();
	}
}

/**
 * @private
 * @properties={typeid:24,uuid:"5F6486A3-A01E-4C6D-ABFD-A78C1770047F"}
 */
function renderChart() {
	if (elements.tabChart.visible) {
		forms.tableChartAdvanced.renderChart(foundset)
	}
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"6CA01D3F-828A-4CF7-980D-9CEAE933DA6C"}
 */
function chartConfig(event) {
	forms.chartPicker.showChartConfig(elements.table, applyChartConfig, event, chartParams);
}

/**
 * @param {String} chartLabel
 * @param {String} chartValue
 * @param {String} chartFunc
 * @param {String} chartLabelDisplay
 * @param {String} chartValueDisplay
 * 
 * @protected
 *
 * @properties={typeid:24,uuid:"0E580D43-803C-4224-839E-F8ED00D22956"}
 */
function applyChartConfig(chartLabel, chartValue, chartFunc, chartLabelDisplay, chartValueDisplay) {
	
	// update chart Values
	chartParams.label = chartLabel;
	chartParams.value = chartValue;
	chartParams.valueFunc = chartFunc;
	chartParams.labelDisplay = chartLabelDisplay;
	chartParams.valueDisplay = chartValueDisplay
	
	var labelColumn = getColumn(chartLabel);
	var chartLabelValuelist = labelColumn && labelColumn.valuelist ? labelColumn.valuelist.name : null;	
	
	/** @type {String} */
	var format = labelColumn.format ? (labelColumn.format.indexOf('displayFormat') > -1 ? JSON.parse(labelColumn.format)['displayFormat'] : labelColumn.format) : null;
	if (format && format.indexOf('|') > -1) {
		format = format.substring(0, format.indexOf('|'));
	}	
	
	forms.tableChartAdvanced.configChart(foundset, chartLabel, chartValue, chartFunc, chartLabelDisplay, chartValueDisplay, chartLabelValuelist, format);

	elements.table.visible = false;
	elements.tabChart.visible = true;
	
	renderChart();

}

/**
 * @param {String} dataprovider
 * @private 
 * 
 * @return {CustomType<aggrid-groupingtable.column>}
 * @properties={typeid:24,uuid:"15A28F1B-9C06-4209-A9F9-FCB20D653EFF"}
 */
function getTableColumn(dataprovider) {
	for (var i = 0; i < elements.table.columns.length; i++) {
		if (elements.table.columns[i].dataprovider === dataprovider) {
			return elements.table.columns[i];
		}
	}
	return null;
}
/**
 * @protected 
 * @properties={typeid:24,uuid:"E6E1CD86-3538-4B0C-9943-4762D4240707"}
 */
function excelExport() {
	try {
		var excelBuilder = scopes.svyExcelBuilder.createNgGridExcelBuilder(elements.table, false);
		var wb = excelBuilder.createWorkbook();
		wb.openFile('excel_export');
	} catch (e) {
		application.output(e, LOGGINGLEVEL.ERROR);
		plugins.dialogs.showErrorDialog('Excel export requires Setup', 'Excel utilities for export are not properly setup.\nPlease follow instructions at https://github.com/Servoy/svyUtils/wiki/ExcelUtils');
	}
}