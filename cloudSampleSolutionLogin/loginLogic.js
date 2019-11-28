
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"5BA5BC57-8D49-4A4E-A76C-DB1391E00272"}
 */
function onSolutionOpen(arg, queryParams) {
	
	databaseManager.switchServer("svy_security","svy_security_cloudsample");	
	
	//utils.stringFormat(utils.stringFormat('%1$ssolutions/cloudSampleSolution/index.html', [application.getServerURL()]) + '?f=resetPassword&a=reset-password&token=%2$s',[application.getServerURL(), encodeURI('test123')])
	application.output(queryParams);
	
	if(queryParams['argument'] == 'set-password'){
		/** @type {String} */
		var accessToken = queryParams['token'];

		scopes.svySecurity.logout();
	    
	    // This will consume the token and if everything is OK will return the user for which the token applies
	    /** @type {scopes.svySecurity.User} */
	    var user = scopes.svySecurity.consumeAccessToken(accessToken);
	    if (!user){
	    	plugins.dialogs.showErrorDialog(user,'Could not verify user. Redirecting to login page.\n\n'+accessToken);	    	
	    	application.closeSolution('cloudSampleSolution')
	    }
	    else {
			forms.setPasswordFormContent.setUser(user);
	        application.showForm(forms.setPasswordFormCenteredContainer);	
		}
	}

}