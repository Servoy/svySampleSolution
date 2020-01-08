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
