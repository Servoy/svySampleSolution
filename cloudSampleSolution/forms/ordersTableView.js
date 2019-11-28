/**
 * TODO generated, please specify type and doc for the params
 * @param foundsetindex
 * @param columnindex
 * @param {JSRecord<db:/example_data/orders>} record
 * @param event
 *
 * @properties={typeid:24,uuid:"B8E6B20B-B389-4204-96D4-36BA81D25C24"}
 * @override
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {

	if (columnindex == 1) {
		var item = new scopes.svyNavigation.NavigationItem("customerView");
		scopes.svyNavigation.open(item, foundset.orders_to_customers.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD)
	}
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 * the record is not an actual JSRecord but an object having the dataprovider values of the clicked record
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {object} [record]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A96B9441-6458-46E7-BB54-D6234B6D7D6B"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	showForm("orders");
}
