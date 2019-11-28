/**
 * @public 
 * @param {String} tenantName
 * @return {JSRecord<db:/svy_cloud/subscription_requests>}
 *
 * @properties={typeid:24,uuid:"8CDEC12D-9D82-4A51-9133-86571809FECF"}
 */
function getSubscriptionRequest(tenantName) {
	/** @type {JSFoundSet<db:/svy_cloud/subscription_requests>} */
	var fs = scopes.svyDataUtils.getFoundSetWithExactValues(datasources.db.svy_cloud.subscription_requests.getDataSource(),["tenant_name"],[tenantName]);
	return fs.getSelectedRecord()
}

/**
 * @public 
 * @param tenantName
 * 
 * @return {JSRecord<db:/svy_cloud/wizard_styles>}
 *
 * @properties={typeid:24,uuid:"C0A4084F-D638-4CF7-BDE8-8DC289DD4099"}
 */
function getWizardStyles(tenantName) {
	var recRequest = getSubscriptionRequest(tenantName);
	if (recRequest && recRequest.subscription_requests_to_wizard_styles) {
		return recRequest.subscription_requests_to_wizard_styles.getSelectedRecord();
	} else {
		return null;
	}
}

/**
 * @public
 * @param tenantName
 * 
 * @return {JSFoundset<db:/svy_cloud/wizard_menu_items>}
 *
 * @properties={typeid:24,uuid:"C8C13146-8909-4420-A5EC-552D08ADEF95"}
 */
function getWizardMenuItems(tenantName) {
	var recRequest = getSubscriptionRequest(tenantName);
	if (recRequest && recRequest.subscription_requests_to_wizard_menu_items) {
		return recRequest.subscription_requests_to_wizard_menu_items;
	} else {
		return null;
	}
}