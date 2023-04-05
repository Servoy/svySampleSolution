/**
 * @public 
 * @properties={typeid:24,uuid:"4B7480F5-2A71-4CD6-97DE-AE998965E60C"}
 */
function showColorPicker() {
	var popup = plugins.window.createFormPopup(forms.colorPickerMobile);
	popup.showBackdrop(true);
	popup.x(1);
	popup.y(application.getWindow().getHeight()-360);
	popup.width(application.getWindow().getWidth()-1);
	popup.height(360);
	popup.show();
}

/**
 * Dismisses the popup
 *
 * @protected
 * @properties={typeid:24,uuid:"AFDE6BE0-6468-4503-B58D-781F9D834235"}
 */
function dismiss() {
	plugins.window.closeFormPopup(null);
}

/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0C376894-186F-4B08-AEC5-5FF1B2DD41BF"}
 * @override
 */
function onActionApplyColors(event) {
	_super.onActionApplyColors(event);
	dismiss();
}

/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ECC24140-6434-45FD-8276-7B09FEF61303"}
 * @override
 */
function onActionReset(event) {
	_super.onActionReset(event);
	dismiss();
}
