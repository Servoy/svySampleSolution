/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F88F013D-AFC3-41E6-9F22-F4E3132C0B8D"}
 */
function onActionSearch(event) {
	search(searchText,['orderid','orderdate','customerid']);
}


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4F3D62A5-6008-4881-8AA6-AEC370D37414"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	scopes.global.showForm(forms.orderEditMobile, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5177FCA9-0F48-4661-A71A-413CC080B870"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords();
}
