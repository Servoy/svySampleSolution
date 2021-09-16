
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"3395F868-D90A-4E61-A127-04176B5F26C4"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	scopes.global.showForm(forms.orderEdit);

}

/**
 * @properties={typeid:24,uuid:"98BA5FAD-6068-44E2-94B9-152BFEA8DFBF"}
 */
function onActionSearch() {
	search(searchText,'orderid');
}
