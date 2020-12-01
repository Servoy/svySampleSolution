/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"842D914F-B800-4AD1-8526-525E78776CEE"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var item = scopes.svyNavigation.createNavigationItem("productInfoEdit")
	scopes.svyNavigation.open(item, foundset.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
}


/**
 * @properties={typeid:24,uuid:"4086699F-28AD-4A14-A39D-0699EB63DB03"}
 * @override
 */
function gotoNew() {
	var item = new scopes.svyNavigation.NavigationItem("productInfoEdit");
	scopes.svyNavigation.open(item, foundset.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
} 