/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C902FDF-A294-444C-A29B-99FE45494FBE"}
 */
var password = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76F3D266-25A5-4649-AF8A-5274F08B6719"}
 */
var tenant = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"728E812F-5F31-47D4-AC6B-37923B03BE1D"}
 */
var user = null;

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
	
	tenant = "admin";
	user = "admin";
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
	security.login(user,[security.getUserUID(user)],[security.getUserGroups(security.getUserUID(user))])
}
