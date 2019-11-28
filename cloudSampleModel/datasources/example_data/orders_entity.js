
/**
 * Record after-create trigger.
 *
 * @param {JSRecord<db:/example_data/orders>} record record that is created
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9888EA5E-16A5-4BAC-BEA4-CFEC81E7EE38"}
 */
function afterFoundSetRecordCreate(record) {
	
	record.orderdate = new Date();
	
	if (utils.hasRecords(record.orders_to_customers)) {
		var customer = record.orders_to_customers.getSelectedRecord();
		record.shipaddress = customer.address;
		record.shipcity = customer.city;
		record.shipcountry = customer.country;
		record.shipregion = customer.region;
	}
}
