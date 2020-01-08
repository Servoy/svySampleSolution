/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7E3ADA20-A1F5-44B5-A248-CE8FD13B9E7D"}
 */
function onShow(firstShow, event) {
	scopes.svyNavigationUX.addGlobalSearchListener(onGlobalSearch);
	_super.onShow(firstShow,event);
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
 * @properties={typeid:24,uuid:"6245651D-3035-4032-9A40-92DE16697EDE"}
 */
function onHide(event) {
	scopes.svyNavigationUX.removeGlobalSearchListener(onGlobalSearch);
	return true;
}

/**
 * @param {String} searchText
 *
 * @properties={typeid:24,uuid:"1880B0B4-5737-4BBE-AD82-FE269A0493C1"}
 */
function onGlobalSearch(searchText) {
	if (searchText) {
		var simpleSearch = scopes.svySearch.createSimpleSearch(foundset.getDataSource());

		//	add some data providers
		simpleSearch.addSearchProvider('companyname');

		//		add related data providers
		simpleSearch.addSearchProvider('contactname');
		simpleSearch.addSearchProvider('country');
		simpleSearch.addSearchProvider('city');

		//		set user input
		simpleSearch.setSearchText(searchText);

		//		execute search in existing foundset
		simpleSearch.loadRecords(foundset);
	} else {
		foundset.loadAllRecords();
	}
}

/**
 * @protected
 * @properties={typeid:24,uuid:"63C39F88-9247-446F-BFD4-061AEBDA44F7"}
 * @override
 */
function gotoDetail() {
	var item = new scopes.svyNavigation.NavigationItem("customerView");
	scopes.svyNavigation.open(item, foundset.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
}

/**
 * @protected
 * @properties={typeid:24,uuid:"EA7B38FB-78F0-41B7-B4CB-A68D6D620004"}
 * @override
 */
function gotoNew() {
	var item = new scopes.svyNavigation.NavigationItem("customerInfoAdd");
	scopes.svyNavigation.open(item, foundset.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
}
