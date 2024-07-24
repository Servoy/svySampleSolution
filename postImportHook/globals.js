
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"8FDBDB3B-5DFF-415D-BB01-95973BB00B5E"}
 */
function onSolutionOpenPostImportHook(arg, queryParams) {
	
	// increase user_pwd size
	plugins.rawSQL.executeSQL('svy_security','ALTER TABLE users ALTER COLUMN user_password TYPE character varying(250)')
	
	// sync security permissions at every deployment
	scopes.svySecurity.syncPermissions();
	
	// clean users at every deployment
	scopes.svySecurity.deleteTenant('admin')
	
	scopes.svySecurity.createSampleData()
	
	//Add sample data at every deployment
	var tenant = scopes.svySecurity.getTenant('admin')
	var role = tenant.createRole('guest')
	role.addPermission('Guest')
	
	var user = tenant.createUser('guest')
	user.addRole('guest')
	user.setPassword('guest')
}
