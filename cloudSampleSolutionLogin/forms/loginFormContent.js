/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"0A80E4F6-5693-4451-9BAD-5C388A658C83"}
 */
function onLoad(event) {

	// switch the svy_security server to a db containin only sample users

	// auto fill credentials in developer
	if (application.isInDeveloper()) {
		tenantName = "admin";
		userName = "admin";
		password = "admin";
	//	login();
	}
}

/**
 * @protected
 * @properties={typeid:24,uuid:"3A541FD4-C9D5-4330-B16C-94C693E544B2"}
 * @override
 */
function onLoginSuccess() {
	elements.errorMsg.visible = false;
	
}

/**
 * @protected
 * @param error
 *
 * @properties={typeid:24,uuid:"C3758249-7032-472A-85BF-4940A34E8089"}
 * @override
 */
function onLoginError(error) {
	elements.errorMsg.text = error;
	elements.errorMsg.visible = true;
}

/**
 * @public 
 * @param {String} appName
 *
 * @properties={typeid:24,uuid:"29B7E977-546A-4BCB-A0CD-FC99D629895B"}
 */
function setAppName(appName) {
	tenantName = appName;
}
