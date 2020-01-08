/**
 * @param {JSEvent} event
 *
 * @private 
 *
 * @properties={typeid:24,uuid:"F27A0ED3-62BF-4FF6-8B52-B82B6D1416F0"}
 */
function onActionSave(event) {
	if (save()) {
		back();
	}
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2A3F64AB-11F1-4DDB-81E9-571640F47307"}
 */
function onActionBack(event) {
	back();
}

/**
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1BD0CAE4-813A-443C-AFB0-0630D66C8429"}
 */
function back() {
	scopes.svyNavigation.close();
}

/**
 *
 * @protected
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"422592A6-34AF-4CF4-A9B8-D2ADED0D9CBE"}
 */
function save() {
	return databaseManager.saveData();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @protected 
 *
 * @properties={typeid:24,uuid:"AB40A13A-D652-40F9-828B-0BA49CF16376"}
 */
function onShow(firstShow, event) {
	 scopes.svyNavigation.addNavigationListener(onOpen);
	 updateUI();
}

/**
 * Handle hide window.
 * 
 * @param {JSEvent} event the event that triggered the action
 * @return {Boolean}
 * @protected 
 *
 * @properties={typeid:24,uuid:"8135AB2F-8ECE-4E48-9EEF-3DC512F4EB70"}
 */
function onHide(event) {
	return scopes.svyNavigation.removeNavigationListener(onOpen);
}

 /**
  * @protected 
 * @param event
 *
 * @properties={typeid:24,uuid:"8C730973-3860-4E82-A1C3-FE78B396E219"}
 */
function onOpen(event) {
	var type = event.getEventType();
	if (type == scopes.svyNavigation.NAVIGATION_EVENT.BEFORE_CLOSE) {
		if (databaseManager.getEditedRecords().length || databaseManager.getFailedRecords().length){
			var answer = plugins.dialogs.showQuestionDialog("Pending changes", "How would you like to proceed?", "Save changes", "Discard changes", "Cancel")
			if (answer == "Save changes") {
				return save();
			}
			else if(answer == "Discard changes"){
				return databaseManager.revertEditedRecords();
			}
			else{
				return false;
			}
		}
	}
	return true;
}

/**
 * Called whenever a breadcrumb item is clicked with the JSEvent and the item clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"06174DA0-7BA1-4EBF-833D-01833179B912"}
 */
function onCrumbClicked(event, crumb, index) {

}

/**
 * @protected
 * @properties={typeid:24,uuid:"3B6E57D0-3923-482E-8CFA-FACE80376C9B"}
 */
function updateUI(){
	// intentionally left empty
}