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
	
	if(!newUserName || !newPassword){
		plugins.dialogs.showErrorDialog('','User name or passord cannot be empty');
		
	}else{
		
		var user = scopes.svySecurity.getTenant(tenantName).createUser(newUserName);
		user.addRole('admin');
		user.setPassword(newPassword);
		
		plugins.dialogs.showInfoDialog('','The user has been created');
		forms.loginContainerMobile.navigation(forms.loginMobile);
	}
	

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3C45AC0A-0968-4254-83E1-EBA2A8AB251F"}
 */
function onActionBackToLogIn(event) {
	forms.loginContainerMobile.navigation(forms.loginMobile);

}
