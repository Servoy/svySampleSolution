/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FD3C823F-D59B-401F-92DE-04120DA2C8D2"}
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
 * @properties={typeid:24,uuid:"4D888D9A-5782-4890-B899-099B50B4130D"}
 */
function onActionBack(event) {
	back();
}

/**
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"492E317E-C585-47A1-BEFB-EA53645949D9"}
 */
function back() {
	scopes.svyNavigationHistory.back();
}

/**
 *
 * @protected
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"2EDEA877-D27E-4F32-87F8-B12C59CEE228"}
 */
function save() {
	// return false when the record had validation problems
	var markers = validate();
	if (markers && markers.length) {
		return false;
	}
	return databaseManager.saveData();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 * @protected
 *
 * @properties={typeid:24,uuid:"9E7D94DC-B03D-4C72-8EFF-0CC0D6871B9A"}
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
 * @properties={typeid:24,uuid:"3583D19C-7392-4C39-A650-453C66BE06D2"}
 */
function onHide(event) {
	clearValidationErrors();
	return scopes.svyNavigation.removeNavigationListener(onOpen);
}

/**
 * @protected
 * @param event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"F8A79340-4913-4741-B8D0-3EC2A1DB2FC6"}
 */
function onOpen(event) {
	var type = event.getEventType();
	if (type == scopes.svyNavigation.NAVIGATION_EVENT.BEFORE_CLOSE) {
		if (databaseManager.getEditedRecords().length || databaseManager.getFailedRecords().length) {
			var answer = plugins.dialogs.showQuestionDialog("Pending changes", "How would you like to proceed?", "Save changes", "Discard changes", "Cancel")
			if (answer == "Save changes") {
				return save();
			} else if (answer == "Discard changes") {
				return databaseManager.revertEditedRecords();
			} else {
				return false;
			}
		}
	}
	return true;
}

/**
 * @protected
 * @param {RuntimeForm} form
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"4DC8A1B0-B2D1-4BC4-AB39-B13B9FB8752A"}
 */
function showForm(form) {
	return scopes.global.showForm(form);
}

/**
 * @protected
 * @properties={typeid:24,uuid:"47C86375-3260-4B03-820A-3A9F2B6A6A67"}
 */
function updateUI() {
	// intentionally left empty
}

/************************************************************************************************************************
 *************************************************************************************************************************
 *
 * UI Validations
 *
 *************************************************************************************************************************
 ************************************************************************************************************************/

/**
 * Validate the record
 * @param {RuntimeTextField} [element] validate only the dataprovider linked to the given element when set
 * @protected
 * @return {Array<JSRecordMarker>} It will return an array of JSRecordMarker when the record had validation problems
 * @properties={typeid:24,uuid:"58FC70FE-C910-4754-B5C7-2783840604BA"}
 */
function validate(element) {
	var dataprovider = element ? element.getDataProviderID() : null;
	// validate the edited records
	var markers = scopes.svyValidationUtils.validateEditedRecords(null, LOGGINGLEVEL.ERROR, dataprovider);
	if (dataprovider) {
		// filter markers having element's dataprovider
		markers = scopes.svyValidationUtils.getMarkersWithDataprovider(markers, dataprovider);
	}
	// invalid if any error marker
	var isValid = markers.length ? false : true;

	if (element) {
		if (isValid) {
			// clear validation error, if any
			clearValidationError(element);
		} else {
			// show validation error
			updateValidationError(markers[0], element);
		}
	} else {

		if (isValid) {
			// clear all validation errors
			clearValidationErrors();
		} else {
			// show all validation errors
			updateValidationErrors(markers);
		}
	}

	return markers;
}

/**
 * Show validation errors in UI, if any
 * @protected
 * @param {Array<JSRecordMarker>} errorMarkers
 *
 * @properties={typeid:24,uuid:"EC968854-4486-4507-8BCB-37F2DEACA4C1"}
 */
function updateValidationErrors(errorMarkers) {
	// clear all validation errors
	clearValidationErrors();

	if (errorMarkers) {

		// get the error markers
		for (var i = 0; i < errorMarkers.length; i++) {

			// update the UI showing validation error
			var errorMarker = errorMarkers[i];

			// get the element linked to the error marker
			var element = scopes.svyValidationUtils.getMarkerElement(controller.getName(), errorMarker);
			updateValidationError(errorMarker, element);
		}

		// show the error message
		var errorMsg = scopes.svyValidationUtils.getErrorMessages(foundset.getSelectedRecord());
		plugins.webnotificationsToastr.error(errorMsg);
	}
}

/**
 * Update the UI showing validation error in element
 * @protected
 * @param {JSRecordMarker} marker
 * @param {RuntimeTextField} element
 *
 * @properties={typeid:24,uuid:"1257A063-6BC2-46ED-B93B-5464224FE37E"}
 */
function updateValidationError(marker, element) {
	if (element) {

		// show error as tooltip
		element.toolTipText = marker.message;
		// style the element as invalid input
		element.addStyleClass("form-invalid");
	}
}

/**
 * Clear validation error from all UI elements
 * @protected
 * @properties={typeid:24,uuid:"7DC6537B-9D12-426B-B578-7AC584E2849E"}
 */
function clearValidationErrors() {

	// clear error from all elements.
	for (var i = 0; i < elements.allnames.length; i++) {
		var element = elements[elements.allnames[i]];
		clearValidationError(element);
	}
}

/**
 * Clear validation error for the given UI element
 * @param element
 * @protected
 *
 * @properties={typeid:24,uuid:"87E92F1B-D013-47C3-A7FF-D1FAB6A2E1FA"}
 */
function clearValidationError(element) {
	// clear error in element if any
	if (element.hasStyleClass("form-invalid")) {
		element.toolTipText = null;
		element.removeStyleClass("form-invalid");
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5A4AB2CE-D003-409E-84CD-7F3AD063C2EA"}
 */
function onElementDataChange(oldValue, newValue, event) {
	var markers = validate(event.getSource());
	if (markers && markers.length) {
		// show error message
		plugins.webnotificationsToastr.error(markers[0].message);
	}
	return true
}
