/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2AF80A14-E2DA-4D8B-B64C-14EFB011BCF5"}
 */
var orderText;

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"99F7E369-41CD-4919-A98E-557E48C9A100"}
 */
function onRecordSelection(event) {
	orderText = foundset.getSelectedRecord() ? foundset.orderid : "";
}


/**
 * Called whenever a breadcrumb item is clicked with the JSEvent and the item clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"0C93C59F-5402-4117-9178-4E665BF1CC94"}
 */
function onCrumbClicked(event, crumb, index) {
	switch (index) {
	case 0:
		showForm(forms.ordersViewMobileDataGrid);
		break;
	default:
		showForm(forms.orderEditMobile);
		break;
	}
}
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"09139261-A5AE-4721-A679-623D58439260"}
 */
function onActionOrderLines(event) {
	scopes.global.showForm(forms.orderdetailsTable, foundset.orders_to_order_details);
}
