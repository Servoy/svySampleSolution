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
 * @properties={typeid:35,uuid:"57E8AA5C-DAC5-4271-B66E-3A564B4A5EE8",variableType:-4}
 */
var ERROR_CODES = {
	
	USER_NOT_SPECIFIED : 'Please enter the User',
	USER_EXISTS : 'User already exists',
	PASSWORD_NOT_SPECIFIED : 'Please enter the User\'s password',
	PASSWORD_MISMATCH : 'The entered password is not correct',
	PASSWORD_CONFIRMATION : 'Please confirm the password'
};


/**
 * TODO generated, please specify type and doc for the params
 * @param error
 *
 * @properties={typeid:24,uuid:"EB4F6397-23C2-43EA-9B23-FAA19C66BD04"}
 * @override
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
 * @properties={typeid:24,uuid:"C37671C0-87F9-4956-85D3-396DBD86CDB8"}
 */
function userRegister(){
	if(!newUserName){
		onLoginError(ERROR_CODES.USER_NOT_SPECIFIED);
		return false;
	}
	if(scopes.svySecurity.getTenant(tenantName).getUser(newUserName) && newUserName){
		onLoginError(ERROR_CODES.USER_EXISTS);
		return false;
	}
	if(!newPassword){
		onLoginError(ERROR_CODES.PASSWORD_NOT_SPECIFIED);
		return false;
	}
	if(!confirmPassword){
		onLoginError(ERROR_CODES.PASSWORD_CONFIRMATION);
		return false;
	}
	if(newPassword!==confirmPassword){
		onLoginError(ERROR_CODES.PASSWORD_MISMATCH);
		return false;
	}
	
	var user = scopes.svySecurity.getTenant(tenantName).createUser(newUserName);
	
	user.addRole('admin');
	user.setPassword(newPassword);
	
	plugins.webnotificationsToastr.success('The user has been created');
	
	forms.loginContainerMobile.navigation(forms.loginMobile);
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DF8B19E2-1B91-4F8B-97CF-CE0BE451550C"}
 */
function onActionRegister(event) {
	
	userRegister();
	
	
//	if(!newUserName || !newPassword || !confirmPassword){
//		plugins.dialogs.showErrorDialog('','User name or passord cannot be empty');
//		
//	}else if(newPassword!==confirmPassword){
//		plugins.dialogs.showErrorDialog('','Please make sure that you set the right password');
//	}else{
//		
//		if(scopes.svySecurity.getTenant(tenantName).getUser(newUserName)){
//			plugins.dialogs.showErrorDialog('','User already exists');
//		}else{
//			var user = scopes.svySecurity.getTenant(tenantName).createUser(newUserName);
//			application.output(user)
//			user.addRole('admin');
//			user.setPassword(newPassword);
//			
//			plugins.dialogs.showInfoDialog('','The user has been created');
//			forms.loginContainerMobile.navigation(forms.loginMobile);
//		}
//		
//	}
	

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3C45AC0A-0968-4254-83E1-EBA2A8AB251F"}
 */
function onActionBackToLogIn(event) {
	forms.loginContainerMobile.navigation(forms.loginMobile);

}
