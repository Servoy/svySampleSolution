/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"019815A8-FFF1-4B71-993E-512A6369EDAF"}
 */
var newPassword = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BA34201F-9AAB-4B6C-ABFF-987110282192"}
 */
var confirmPassword = '';

/**
 * @type {scopes.svySecurity.User}
 *
 * @properties={typeid:35,uuid:"85A5BAAB-C1E2-49EB-A216-871CCE944674",variableType:-4}
 */
var user;

/**
 * @param {scopes.svySecurity.User} userToReset
 *
 * @properties={typeid:24,uuid:"792BD969-9C34-4E67-AAC0-19FEB766C267"}
 */
function setUser(userToReset){
	user = userToReset;
}

/**

 * @private
 *
 * @properties={typeid:24,uuid:"DAF06334-CF5A-4276-A834-AADA26DD64AE"}
 */
function resetPassword() {
	
	if(newPassword && confirmPassword && (newPassword == confirmPassword)){
		user.setPassword(newPassword);
		plugins.dialogs.showInfoDialog('Success', 'Your password has been changed');
		scopes.svySecurity.login(user)
	}
}
