/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"8E9EDFD2-D95E-4823-BF57-51219851F567"}
 */
function onLoad(event) {

	// switch the svy_security server to a db containin only sample users

	// auto fill credentials in developer
	if (application.isInDeveloper()) {
		tenantName = "admin";
		userName = "admin";
		password = "admin";
		//	login();
	}
}

/**
 * @protected
 * @properties={typeid:24,uuid:"993F61F1-58DA-48D1-9EEF-BC3D80134A4F"}
 * @override
 */
function onLoginSuccess() {
	elements.errorMsg.visible = false;

}

/**
 * @protected
 * @param error
 *
 * @properties={typeid:24,uuid:"A7CBD1BD-A242-4553-837A-BB1F584C51D6"}
 * @override
 */
function onLoginError(error) {

	var errorTxt;
	switch (error) {
	case ERROR_CODES.INSUFFICIENT_PERMISSIONS:
		errorTxt = "The User does not have any permission; login is denied";
		break;
	case ERROR_CODES.LOCKED_TENANT:
		errorTxt = "The Tenant is locked";
		break;
	case ERROR_CODES.LOCKED_USER:
		errorTxt = "The User is locked";
		break;
	case ERROR_CODES.PASSWORD_MISMATCH:
		errorTxt = "The entered password is not correct";
		break;
	case ERROR_CODES.PASSWORD_NOT_SPECIFIED:
		errorTxt = "Please enter the User's password";
		break;
	case ERROR_CODES.TENANT_NOT_FOUND:
		errorTxt = "Tenant not found";
		break;
	case ERROR_CODES.TENANT_NOT_SPECIFIED:
		errorTxt = "Please enter the Tenant";
		break;
	case ERROR_CODES.USER_NOT_FOUND:
		errorTxt = "User not found";
		break;
	case ERROR_CODES.USER_NOT_SPECIFIED:
		errorTxt = "Please enter the User";
		break;
	default:
		errorTxt = error
		break;
	}

	elements.errorMsg.text = errorTxt;
	elements.errorMsg.visible = true;
}

/**
 * @public
 * @param {String} appName
 *
 * @properties={typeid:24,uuid:"32CA31AC-FBB6-448B-8BFF-BCD77C8DCE4A"}
 */
function setAppName(appName) {
	tenantName = appName;
}
