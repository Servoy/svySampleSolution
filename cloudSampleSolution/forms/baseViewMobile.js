/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26D97AF1-A220-459D-9F13-0316EDA13B06"}
 */
var searchText = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param text
 * @param column
 * @properties={typeid:24,uuid:"BDA39187-D0BE-4F3F-B96B-32592BD3395C"}
 */
function search(text,column){
	var search = scopes.svySearch.createSimpleSearch(foundset);
	search.addSearchProvider(column)
	search.setSearchText(text);
	search.loadRecords(foundset);
}

/**
 * @properties={typeid:24,uuid:"FC5AD931-1626-4AC4-8E5E-50DE47C5A799"}
 */
function newRecord() {
	foundset.newRecord();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param form
 *
 * @properties={typeid:24,uuid:"8B36C0A4-ACB6-4520-BDE5-47969B434C5B"}
 */
function showForm(form){
	scopes.global.showForm(form, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
}