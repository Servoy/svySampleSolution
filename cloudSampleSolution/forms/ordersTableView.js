/**
 * @private
 * @type {String}
 * @SuppressWarnings (unused)
 *
 * @properties={typeid:35,uuid:"08F5A764-2756-4813-8357-5C99E7C761D7"}
 */
var tooltipCustomer = 'Show customer at double click';

/**
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord<db:/example_data/orders>} record
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B8E6B20B-B389-4204-96D4-36BA81D25C24"}
 * @override
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {

	if (columnindex == 1) {
		// navigate to the clicked customer
		var item = new scopes.svyNavigation.NavigationItem("customerView");
		scopes.svyNavigation.open(item, foundset.orders_to_customers.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
	} else {
		// navigate to the orderEdit
		var navItem = scopes.svyNavigation.createNavigationItem("orderEdit");
		scopes.svyNavigation.open(navItem, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
	}
}