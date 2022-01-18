/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E791442-4E0E-471C-8078-E9D16A26E2B5"}
 */
var searchText = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param text
 * @param column
 * @properties={typeid:24,uuid:"82FB8684-9A4D-4C99-B3F5-817F9E831C6C"}
 */
function search(text,column){
	var simpleSearch = scopes.svySearch.createSimpleSearch(foundset);
	simpleSearch.addSearchProvider(column)
	simpleSearch.setSearchText(text);
	simpleSearch.loadRecords(foundset);
}

/**
 * @properties={typeid:24,uuid:"629301E7-48DA-4760-AEDF-9E3755E7CBE0"}
 */
function newRecord() {
	foundset.newRecord();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param form
 *
 * @properties={typeid:24,uuid:"C028FCDC-8A4B-4EA1-B290-02C133C7B1E7"}
 */
function showForm(form){
	scopes.global.showForm(form, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
}
