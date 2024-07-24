

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"68479794-F624-4906-AD41-D0EE25CC4DB4"}
 */
function onActionCustomerEdit(event, dataTarget) {
	scopes.global.showForm(forms.customerInfoEditMobile);

}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"E31C19CE-0839-48C8-8ADD-0D64157E9998"}
 */
function onActionBack(event, dataTarget) {
	scopes.svyNavigationHistory.back();

}
