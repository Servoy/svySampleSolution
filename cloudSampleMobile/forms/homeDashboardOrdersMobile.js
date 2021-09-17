
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DBE81749-1DDF-438E-AF46-4D5D0E4FF51A"}
 */
function onShow(firstShow, event) {

	foundset.sort('orderdate desc');
	var query = foundset.getQuery();	
	var dataset= databaseManager.getDataSetByQuery(query,10);
	foundset.loadRecords(dataset);

}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"88934DE9-9CFE-48F4-B152-3009DEA8298E"}
 */
function onActionSeeMoreOrders(event, dataTarget) {
	scopes.global.showForm(forms.ordersViewMobileDataGrid);

}
