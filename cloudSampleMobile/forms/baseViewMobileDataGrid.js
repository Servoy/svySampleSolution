/**
 * @type {Number}
 * @private 
 * @properties={typeid:35,uuid:"E97352DA-AD75-492A-80A7-0BFD3513FAC2",variableType:8}
 */
var counter = 0;

/**
 * @type {String|Number}
 *
 * @properties={typeid:35,uuid:"07B84B04-ED5D-4595-89CD-EE4512321A39",variableType:-4}
 */
var searchText = null;

/** 
 * @type {scopes.svyToolbarFilter.ListComponentFilterRenderer}
 *
 * @properties={typeid:35,uuid:"BFFD2A08-6088-42CE-A78D-C7DF1A75FDBD",variableType:-4}
 */
var toolbarFilter;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5C652274-EA6A-4083-B89D-73259F519EB1"}
 */
function onLoad(event) {
	toolbarFilter = scopes.svyToolbarFilter.createSimpleFilterToolbar(elements.filterList);
	toolbarFilter.setOnFilterApplyCallback(onFilterApplyEvent);
	toolbarFilter.setOnFilterRemovedCallback(onFilterRemovedEvent);
	
	elements.filterList.entryRendererFunction = "(function renderFilterEntry(entry) {  \n\
		var template = '';\n\
		var strDivider = ' : ';\n\
		var entryValue = entry.value ? entry.value.toString() : ''; \n\
		var valuesArr = entryValue.split(',');\n\
		for ( var i = 0; i < valuesArr.length ; i++ ) {\n\
			if (valuesArr[i].indexOf('!=') === 0) { \n\
				valuesArr[i] = '-' + valuesArr[i].substring(2, valuesArr[i].length); \n\
			} else if (valuesArr[i].indexOf('!') === 0) { \n\
				valuesArr[i] = '-' + valuesArr[i].substring(1, valuesArr[i].length); \n\
			} else if (valuesArr[i].indexOf('%!=') === 0) { \n\
				valuesArr[i] = '-' + valuesArr[i].substring(3, valuesArr[i].length); \n\
			} \n\
		}\n\
		template += '<div class=\"btn-group push-right margin-left-10 toolbar-filter-tag\">' + \n\
		'<button class=\"btn-mobile-filter\" data-target=\"open\" svy-tooltip=\"entry.text + entry.operator + \\' \\' + entry.value\">' + \n\
			'<span class=\"toolbar-filter-tag-text-mobile\">' + entry.text + '</span>' + \n\
			'<span class=\"toolbar-filter-tag-operator\">' + entry.operator + '</span>' + \n\
			'<span class=\"toolbar-filter-tag-value\"> ' + (valuesArr.length == 1 && valuesArr[0] == '' ? '' : 'On') + ' </span>' + \n\
			'<span class=\"toolbar-filter-tag-icon-mobile " + scopes.svyPopupFilter.STYLING.OPEN_FILTER_ICON +"\">' + '</span>' + \n\
		'</button>' + \n\
		'</div>'; \n\
		return template; \n\
	})";
	updateCounter();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param entry
 * @param index
 * @param dataTarget
 * @param event
 *
 * @properties={typeid:24,uuid:"81BCE90D-A8BF-44E3-BC42-BF7F05DFB1E5"}
 */
function onListComponentClick(entry, index, dataTarget, event) {
    toolbarFilter.onClick(entry, index, dataTarget, event);
    updateCounter();
}

/**
 * @private 
 * @properties={typeid:24,uuid:"459A49BF-7769-4939-B7AA-6853CBE4D950"}
 */
function onFilterRemovedEvent() {
	saveToolbarFilterProperty();
	updateCounter();
}

/**
 * @private 
 * 
 * @param {Array} values
 * @param {String} operator
 * @param {scopes.svyPopupFilter.AbstractPopupFilter} filter
 *
 * @properties={typeid:24,uuid:"0D9357DB-85D3-4B29-AC7F-1A6D39056A25"}
 */
function onFilterApplyEvent(values, operator, filter) {
	saveToolbarFilterProperty();
	updateCounter();
}

/**
 * @private  
 * @properties={typeid:24,uuid:"5CA04E21-8420-48B8-901F-78944AA30EB0"}
 */
function saveToolbarFilterProperty() {
	var filtersState = toolbarFilter.getToolbarFiltersState();
	var propertyNameSpace = controller.getName() + "-" + elements.containerTable.getName();	
	scopes.svyProperties.setUserProperty(propertyNameSpace,'filter-state',JSON.stringify(filtersState));
}

/**
 * @public
 * @properties={typeid:24,uuid:"19834F57-99D7-43CA-A0C4-40179D1EDB18"}
 */
function updateCounter(){
	counter = toolbarFilter.getActiveFilters().length;	
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4B05B229-5CAD-49E1-B507-A95CA3BA6CAD"}
 */
function onActionSeeFilters(event) {
	updateCounter();
	elements.filterList.visible = !elements.filterList.visible;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param text
 * @param column
 * @properties={typeid:24,uuid:"785B115C-F8EC-47B9-AC92-AAC722B9FE95"}
 */
function search(text,column){
	var simpleSearch = scopes.svySearch.createSimpleSearch(foundset);
	for(var i =0; i<column.length; i++){
		simpleSearch.addSearchProvider(column[i]);
	}	
	simpleSearch.setSearchText(text);
	simpleSearch.loadRecords(foundset);
	
}

/**
 * @properties={typeid:24,uuid:"DF6D7132-A835-44A9-B68A-D4CCBCB28260"}
 */
function newRecord() {
	foundset.newRecord();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param form
 *
 * @properties={typeid:24,uuid:"BB4D777A-5C3F-45DB-BFEF-6822D66B811F"}
 */
function showForm(form){
	scopes.global.showForm(form, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
}