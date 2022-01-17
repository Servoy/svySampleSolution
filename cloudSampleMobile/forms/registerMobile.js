/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88CE4945-580C-4154-964B-3D4DE389B298"}
 */
var confirmPassword = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"94E6CAF8-D894-4263-ADCE-9B1BBD1C7099"}
 */
var newPassword = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6FE74931-239E-4E93-9698-6E7F9D5CD70A"}
 */
var newUserName = null;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"127812A0-98DD-4FBE-988F-FEADF789FB91"}
 */
var tenantName = null;

/**
 * @properties={typeid:35,uuid:"57E8AA5C-DAC5-4271-B66E-3A564B4A5EE8",variableType:-4}
 * @override
 */
var ERROR_CODES = {

	USER_NOT_SPECIFIED: 'Please enter the User',
	USER_EXISTS: 'User already exists',
	PASSWORD_NOT_SPECIFIED: 'Please enter the User\'s password',
	PASSWORD_MISMATCH: 'The entered password is not correct',
	PASSWORD_CONFIRMATION: 'Please confirm the password'
};

/**
 * @protected 
 * @param error
 *
 * @properties={typeid:24,uuid:"EB4F6397-23C2-43EA-9B23-FAA19C66BD04"}
 */
function onLoginError(error) {

	var errorTxt;
	switch (error) {

	case ERROR_CODES.PASSWORD_MISMATCH:
		errorTxt = error;
		break;
	case ERROR_CODES.PASSWORD_NOT_SPECIFIED:
		errorTxt = error;
		break;
	case ERROR_CODES.PASSWORD_CONFIRMATION:
		errorTxt = error;
		break;
	case ERROR_CODES.USER_NOT_SPECIFIED:
		errorTxt = error;
		break;
	case ERROR_CODES.USER_EXISTS:
		errorTxt = error;
		break;
	default:
		errorTxt = error
		break;
	}

	elements.errorMsg.text = errorTxt;
	elements.errorMsg.visible = true;
}

/**
 * @protected 
 * @return {boolean}
 * @properties={typeid:24,uuid:"C37671C0-87F9-4956-85D3-396DBD86CDB8"}
 */
function userRegister() {
	if (!newUserName) {
		onLoginError(ERROR_CODES.USER_NOT_SPECIFIED);
		return false;
	}
	if (scopes.svySecurity.getTenant(tenantName).getUser(newUserName) && newUserName) {
		onLoginError(ERROR_CODES.USER_EXISTS);
		return false;
	}
	if (!newPassword) {
		onLoginError(ERROR_CODES.PASSWORD_NOT_SPECIFIED);
		return false;
	}
	if (!confirmPassword) {
		onLoginError(ERROR_CODES.PASSWORD_CONFIRMATION);
		return false;
	}
	if (newPassword !== confirmPassword) {
		onLoginError(ERROR_CODES.PASSWORD_MISMATCH);
		return false;
	}
	/*the password should be checked before creating the user otherwise the user will be created without password*/
	try {
		scopes.svySecurity.verifyPasswordStrength(newPassword)
	} catch (e) {
		elements.errorMsg.text = e;
		elements.errorMsg.visible = true;
		return false;
	}

	var user = scopes.svySecurity.getTenant(tenantName).createUser(newUserName);

	user.addRole('admin');

	try {
		user.setPassword(newPassword);
	} catch (e) {
		elements.errorMsg.text = e;
		elements.errorMsg.visible = true;
		return false;
	}

	plugins.webnotificationsToastr.success('The user has been created');

	forms.loginContainerMobile.navigation(forms.loginMobile);

	return false;
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9EF63D56-88A7-4FDD-8039-7968DC79EE3C"}
 */
function onShow(firstShow, event) {
	plugins.ngclientutils.setViewportMetaForMobileAwareSites(plugins.ngclientutils.VIEWPORT_MOBILE_DENY_ZOOM);

	tenantName = "admin";
}

/**
 * @protected
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DF8B19E2-1B91-4F8B-97CF-CE0BE451550C"}
 */
function onActionRegister(event) {
	userRegister();
}

/**
 * @protected
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3C45AC0A-0968-4254-83E1-EBA2A8AB251F"}
 */
function onActionBackToLogIn(event) {
	forms.loginContainerMobile.navigation(forms.loginMobile);
}
