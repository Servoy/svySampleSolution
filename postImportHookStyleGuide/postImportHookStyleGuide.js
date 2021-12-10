/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>|String>} queryParams all query parameters of the deeplink url with which the Client was started, key>string if there was one value else key>Array<String>
 *
 * @properties={typeid:24,uuid:"700AB004-F9A9-4F2E-8121-0F1948E39D11"}
 */
function onSolutionOpenImportHook(arg, queryParams) {
	
	var fs = datasources.db.example_data.customers.getFoundSet();
	fs.loadAllRecords();
	if (!fs.getSize()) {
		scopes.svyDataSeed.runDataseedFromMedia();
	}
}
