/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"068D9927-B8AF-4BE4-B104-DA9E0553A5C4"}
 */
function onShow(firstShow, event) {
	plugins.ngclientutils.setViewportMetaForMobileAwareSites(plugins.ngclientutils.VIEWPORT_MOBILE_DENY_ZOOM);
	
	tenantName = "admin";
	userName = "admin";
	password = "admin";
	
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B15FCD0E-99F2-4D74-BC99-EABD7A4160D2"}
 */
function onActionRegister(event) {
	
	forms.loginContainerMobile.navigation(forms.registerMobile);
}
