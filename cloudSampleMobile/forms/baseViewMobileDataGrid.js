/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07B84B04-ED5D-4595-89CD-EE4512321A39"}
 */
var searchText = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param text
 * @param column
 * @properties={typeid:24,uuid:"785B115C-F8EC-47B9-AC92-AAC722B9FE95"}
 */
function search(text,column){
	var simpleSearch = scopes.svySearch.createSimpleSearch(foundset);
	simpleSearch.addSearchProvider(column)
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
