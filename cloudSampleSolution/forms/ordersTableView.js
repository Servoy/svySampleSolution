/**
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
