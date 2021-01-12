
/**
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"03FE6599-E2B0-4B4F-8527-E0755BB5B835"}
 */
function onCrumbClicked(event, crumb, index) {
	showForm(forms.productsTableView);
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E1E9312E-CCBA-456F-A2FF-E0C8BD9CB3A3"}
 */
function onActionReceiveUnits(event) {
	var answer = plugins.dialogs.showQuestionDialog("Confirm received order", "Confirm the received order. Units in order will be added to the units in stock", "Ok", "Cancel");
	if (answer == "Ok"){
		// move units from inorder to instock
		foundset.unitsinstock += foundset.unitsonorder;
		foundset.unitsonorder = 0;
	}
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"49BEDC63-246C-4B4E-91EA-15A404EA8247"}
 */
function onActionReorder(event) {
	var msg = "How many units of product " + foundset.productname + " would you like to add to your order ?"
	var increase = plugins.dialogs.showInputDialog("Confirm yuor order", msg, "1");
	if (!isNaN(increase)) {
		foundset.unitsonorder += utils.stringToNumber(increase);
	} else {
		plugins.webnotificationsToastr.error("Please enter a positive numeric value")
	}
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9B97B522-FA74-4A67-9EBA-91B739456102"}
 */
function onDataChangeDiscontinued(oldValue, newValue, event) {
	updateUI();
	return true
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"A10F4B45-2766-4BCF-8CB1-380A407223A3"}
 * @override
 */
function updateUI() {
	
	var isDiscontinued = foundset.discontinued ? true : false;
	elements.unitsonorder.enabled = !isDiscontinued;
	elements.unitsinstock.enabled = !isDiscontinued;
	
}


/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E06DE87F-B9FD-473C-96BE-79632DEB8F56"}
 */
function onRecordSelection(event) {
	updateUI();
}
