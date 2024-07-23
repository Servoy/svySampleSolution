/**
 * @enum
 * @properties={typeid:35,uuid:"71C225B7-64DE-4A10-922C-1923C8F32A61",variableType:-4}
 */
var ERROR_MESSAGES = {
	TENANT_NOT_SPECIFIED: 'Please enter the Tenant',
	USER_NOT_SPECIFIED: 'Please enter the User',
	PASSWORD_NOT_SPECIFIED: 'Please enter the User\'s password',
	TENANT_NOT_FOUND: 'Tenant not found',
	USER_NOT_FOUND: 'User not found',
	PASSWORD_MISMATCH: 'The entered password is not correct',
	INSUFFICIENT_PERMISSIONS: 'The User does not have any permission; login is denied',
	LOCKED_USER: 'The User is locked',
	LOCKED_TENANT: 'The Tenant is locked'
};

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2E8AC2DC-DF77-4CC2-8468-58CF9036C084"}
 */
function onLoad(event) {
	plugins.ngclientutils.setViewportMetaForMobileAwareSites(plugins.ngclientutils.VIEWPORT_MOBILE_DENY_ZOOM);
}

/**
 * @protected
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"068D9927-B8AF-4BE4-B104-DA9E0553A5C4"}
 */
function onShow(firstShow, event) {
	tenantName = "admin";
	userName = "admin";
	password = "admin";
}

/**
 * @protected
 * @param error
 *
 * @properties={typeid:24,uuid:"45E92DBA-9531-42DC-93EC-130143F6149A"}
 * @override
 */
function onLoginError(error) {

	var errorTxt;
	switch (error) {
	case ERROR_CODES.INSUFFICIENT_PERMISSIONS:
		errorTxt = ERROR_MESSAGES.INSUFFICIENT_PERMISSIONS;
		break;
	case ERROR_CODES.LOCKED_TENANT:
		errorTxt = ERROR_MESSAGES.LOCKED_TENANT;
		break;
	case ERROR_CODES.LOCKED_USER:
		errorTxt = ERROR_MESSAGES.LOCKED_USER;
		break;
	case ERROR_CODES.PASSWORD_MISMATCH:
		errorTxt = ERROR_MESSAGES.PASSWORD_MISMATCH;
		break;
	case ERROR_CODES.PASSWORD_NOT_SPECIFIED:
		errorTxt = ERROR_MESSAGES.PASSWORD_NOT_SPECIFIED;
		break;
	case ERROR_CODES.TENANT_NOT_FOUND:
		errorTxt = ERROR_MESSAGES.TENANT_NOT_FOUND;
		break;
	case ERROR_CODES.TENANT_NOT_SPECIFIED:
		errorTxt = ERROR_MESSAGES.TENANT_NOT_SPECIFIED;
		break;
	case ERROR_CODES.USER_NOT_FOUND:
		errorTxt = ERROR_MESSAGES.USER_NOT_FOUND;
		break;
	case ERROR_CODES.USER_NOT_SPECIFIED:
		errorTxt = ERROR_MESSAGES.USER_NOT_SPECIFIED;
		break;
	default:
		errorTxt = error
		break;
	}

	elements.errorMsg.text = errorTxt;
	elements.errorMsg.visible = true;
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FB895DED-D75D-4931-9427-56F7F2A068D4"}
 * @AllowToRunInFind
 */
function onActionLogin(event) {
	login();
}

/**
 * @protected
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B15FCD0E-99F2-4D74-BC99-EABD7A4160D2"}
 */
function onActionRegister(event) {

	forms.loginContainerMobile.showForm(forms.registerMobile);
}
