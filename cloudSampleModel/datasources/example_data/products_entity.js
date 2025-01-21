
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
 * @properties={typeid:24,uuid:"709F21A7-44A7-4B4B-9F86-B1B78584ED38"}
 */
function onValidate(record, recordMarkers, stateObject) {	
	// check if companyname id is filled
	if (!record.productname) recordMarkers.report("Product Name is required", "productname", LOGGINGLEVEL.ERROR);
}
