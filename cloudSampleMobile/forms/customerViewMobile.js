
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4AD30008-B2D0-4C12-AE4B-4BC75B60B985"}
 */
function onActionOrders(event) {
	forms.customerOrdersMobile.setCID(foundset.customerid);
	scopes.global.showForm(forms.customerOrdersMobile, foundset.customers_to_orders, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
}
