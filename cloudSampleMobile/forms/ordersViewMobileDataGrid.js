/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F88F013D-AFC3-41E6-9F22-F4E3132C0B8D"}
 */
function onActionSearch(event) {
	search(searchText,'orderid');
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
	showForm(forms.orderEdit);
}