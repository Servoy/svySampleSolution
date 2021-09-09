/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"449BDF9E-2960-4B6D-BF80-4DD94207DFA7"}
 */
function onActionSearch(event) {
	search(searchText,'companyname')
}


/**
 * @properties={typeid:24,uuid:"044608F6-03AF-4723-8C16-5FAAC4ABCB2B"}
 * @override
 */
function newRecord() {
	_super.newRecord();
	showForm(forms.customerInfoAdd);
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
 * @properties={typeid:24,uuid:"F426FE09-CABF-4948-887F-4BF8288344E6"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	showForm(forms.customerView);
}
