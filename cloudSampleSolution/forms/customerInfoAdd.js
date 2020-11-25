/**
 * @protected 
 * @param event
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"2542B86E-6B54-4B15-861B-3B60F423CF43"}
 * @override
 */
function onHide(event) {
	clearValidationMarkers();
	return _super.onHide(event);
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"189FC06F-4C31-4E16-A087-4834DAF81A52"}
 */
function onDataChangeCustomerID(oldValue, newValue, event) {
	validateCustomerID(newValue);
	return true
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"28688DF0-A306-4FE1-B1CD-0902E91805E4"}
 */
function onDataChangeCompanyName(oldValue, newValue, event) {
	validateCompanyName(newValue);
	return true
}

/**
 * @return {Boolean}
 * @protected 
 * 
 * @properties={typeid:24,uuid:"D90C20AD-5DAD-47F3-B002-870DE8B44791"}
 * @override
 */
function save() {
	var errorMsgs = validateRecord();
	if (errorMsgs.length) {
		// show all error msgs
		plugins.webnotificationsToastr.error(errorMsgs.join("\n<br/>"));
		return false;
	} else {
		return _super.save();
	}
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"FA65AC84-2DB3-40F3-BFDF-52D4FDA80931"}
 */
function clearValidationMarkers() {
	elements.customerid.toolTipText = null;
	elements.customerid.removeStyleClass("form-invalid");
	
	elements.companyname.toolTipText = null;
	elements.companyname.removeStyleClass("form-invalid");
}

/**
 * @protected
 * @return {Array<String>} list of validation errors if any
 *
 * @properties={typeid:24,uuid:"DBAE373C-A038-4071-A0E6-A288AED5B03C"}
 */
function validateRecord() {
	var erroMsgs = [];
	erroMsgs = erroMsgs.concat(validateCustomerID(foundset.customerid));
	erroMsgs = erroMsgs.concat(validateCompanyName(foundset.companyname));
	return erroMsgs;
}

/**
 * @protected
 * @param {String} value
 * @return {Array<String>} list of validation errors if any
 *
 * @properties={typeid:24,uuid:"5F07037E-73BE-4F5C-876B-98FEC6A92C6B"}
 */
function validateCustomerID(value) {

	// check if customer id is filled
	if (!value) {
		elements.customerid.toolTipText = "Customer ID is required";
		elements.customerid.addStyleClass("form-invalid");
		return ["Customer ID is required"];
	}

	// check if id is Unique
	var query = datasources.db.example_data.customers.createSelect();
	query.result.addPk();
	query.where.add(query.columns.customerid.eq(value));

	var result = databaseManager.getDataSetByQuery(query, 1);
	var isUnique = result.getMaxRowIndex() == 0;

	if (!isUnique) {
		elements.customerid.toolTipText = "Entered Customer ID is not unique";
		elements.customerid.addStyleClass("form-invalid");
		return ["Entered Customer ID is not unique"];
	} else {
		elements.customerid.toolTipText = null;
		elements.customerid.removeStyleClass("form-invalid");
	}

	return [];
}

/**
 * @protected
 * @param {String} value
 * @return {Array<String>} list of validation errors if any
 *
 * @properties={typeid:24,uuid:"6A446229-D0B2-42AB-83DD-86A2BE5BC18F"}
 */
function validateCompanyName(value) {

	// check if customer id is filled
	if (!value) {
		elements.companyname.toolTipText = "Company Name is required";
		elements.companyname.addStyleClass("form-invalid");
		return ["Company Name is required"];
	} else {
		elements.companyname.toolTipText = null;
		elements.companyname.removeStyleClass("form-invalid");
	}

	return [];
}
