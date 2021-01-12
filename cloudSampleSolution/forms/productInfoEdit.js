
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
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"846F37DA-D6F5-41A0-83E1-5D0213C4238F"}
 */
function saveAndNew(event, dataTarget) {
	if (save()) {
		foundset.newRecord();
	}
}
