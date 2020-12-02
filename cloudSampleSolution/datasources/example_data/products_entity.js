/**
 * Record validation method, will be called by databaseManager.validateRecord() and when databaseManager.saveData() is called.
 * Validate changes or state of the record.
 * All errors need toe be reported in the recordMarkers that is then returned by databaseManager.validateRecord() and is also placed
 * on the record itself (record.recordMarkers)
 *
 * @param {JSRecord<db:/example_data/products>} record record that must be validated
 * @param {JSRecordMarkers} recordMarkers the object where all the problems can be reported against.
 * @param stateObject an object that a user can give to validateRecord for extra state (optional, can be null).
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5B000D34-6C19-4845-A016-90D3AD92B16E"}
 */
function onValidate(record, recordMarkers, stateObject) {
	// check if productnameid is filled
	if (!record.productname) {
		recordMarkers.report("Product Name is required", "productname", LOGGINGLEVEL.ERROR);
	}

	// check if unitprice id is positive
	if (record.unitprice < 0) {
		recordMarkers.report("Unit Price cannot be negative", "unitprice", LOGGINGLEVEL.ERROR);
	}
}
