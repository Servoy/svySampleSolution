/**
 * updating dates in orders table since they are very old
 *
 * @properties={typeid:24,uuid:"A7B3CFD2-4791-4CE9-8A62-8C20B1A1232B"}
 */
function updateOrderDates() {
	/**@type {Date}*/
	var newOrderDate = null;
	/**@type {Date}*/
	var newShipDate = null;
	/**@type {Date}*/
	var newRequiredDate = null;

	var comparedDate = new Date();
	comparedDate.setFullYear(2010, 1, 1);
	comparedDate.setHours(0, 0, 0);

	var orderFS = datasources.db.example_data.orders.getFoundSet();
	orderFS.loadAllRecords();

	for (var index = 1; index <= orderFS.getSize(); index++) {
		var record = orderFS.getRecord(index);
		if (record.orderdate && record.orderdate <= comparedDate) {
			newOrderDate = scopes.svyDateUtils.addYears(record.orderdate, 20);
			record.orderdate = newOrderDate;
			application.output('Update dates for record: ' + record.orderid + " and new date is:" + newOrderDate);
		}

		if (record.shippeddate && record.shippeddate <= '2010-01-01') {
			newShipDate = scopes.svyDateUtils.addYears(record.shippeddate, 20);
			record.shippeddate = newShipDate;
		}

		if (record.requireddate && record.requireddate <= '2010-01-01') {
			newRequiredDate = scopes.svyDateUtils.addYears(record.requireddate, 20);
			record.requireddate = newRequiredDate;
		}

		databaseManager.saveData(record);
	}
}
