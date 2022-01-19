
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

	// load only the latest 10 orders
	var query = datasources.db.example_data.orders.createSelect();
	query.result.addPk()
	query.sort.add(query.columns.orderdate.desc)
	var dataset = databaseManager.getDataSetByQuery(query,10);
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
 * @properties={typeid:24,uuid:"BC3D4245-597D-4CDE-A8C8-BDA5DBD4D54B"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	scopes.global.showForm(forms.orderEditMobile, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
}
