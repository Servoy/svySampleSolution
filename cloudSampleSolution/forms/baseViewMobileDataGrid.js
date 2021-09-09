/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"929AF5F3-4D21-4C20-844F-2197EA0981FD"}
 */
var searchText = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param text
 * @param column
 * @properties={typeid:24,uuid:"76B14242-F277-4CCA-9EF6-DD21CA28B396"}
 */
function search(text,column){
	var search = scopes.svySearch.createSimpleSearch(foundset);
	search.addSearchProvider(column)
	search.setSearchText(text);
	search.loadRecords(foundset);
}

/**
 * @properties={typeid:24,uuid:"508FCD04-5FDD-4BDE-8330-540E9C07A20C"}
 */
function newRecord() {
	foundset.newRecord();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param form
 *
 * @properties={typeid:24,uuid:"0BEAAFBC-19C2-442F-926E-E9C0101B078A"}
 */
function showForm(form){
	scopes.global.showForm(form, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
}