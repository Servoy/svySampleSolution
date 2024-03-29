/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DAC3B647-C661-47AE-B162-B2933C0B772C"}
 */
var tooltipCustomer = 'Show customer at double click';

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 * the record is not an actual JSRecord but an object having the dataprovider values of the clicked record
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"42D92E70-9F1C-42B6-999A-FFC784FDEA7A"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if (columnindex == 1) {
		// navigate to the clicked customer
		scopes.global.showForm(forms.customerView, foundset.orders_to_customers.getSelectedRecord());
	} else {
		// navigate to the orderEdit
		scopes.global.showForm(forms.orderEdit, record);
	}
}
