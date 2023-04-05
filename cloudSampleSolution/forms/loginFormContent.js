/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9F00BBBC-562C-406D-845B-83A381C63D95"}
 */
function onLoad(event) {
	
	tenantName = 'admin'
	userName = "admin";
	password = "admin";

	// switch the svy_security server to a db containin only sample users
}

/**
 * @protected
 * @properties={typeid:24,uuid:"1AB30B46-D4A2-4822-9E80-D75E62381211"}
 * @override
 */
function onLoginSuccess() {
	elements.errorMsg.visible = false;

}

/**
 * @protected
 * @param error
 *
 * @properties={typeid:24,uuid:"B24C7D9E-5713-4D64-935D-2B2DDF3D466E"}
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
 * @properties={typeid:24,uuid:"846D3793-872E-489E-8F86-FBB82D31BDB8"}
 */
function setAppName(appName) {
	tenantName = appName;
}
