/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"C9A1F658-89C6-4C8F-B30C-2BAC106C3BB8"}
 */
function onDataChange(oldValue, newValue, event) {
	updateUI();
	return true
}

/**
 * @properties={typeid:24,uuid:"196156A6-7EF9-4A0A-A0EA-2C98B96DFB57"}
 * @override
 */
function updateUI() {
	var OPERATOR = scopes.svyPopupFilter.OPERATOR;
	switch (operator) {
	case OPERATOR.EQUALS:
	case OPERATOR.GREATER_THEN:
	case OPERATOR.GREATER_EQUAL:
		elements.calendarDateFrom.enabled = true;
		elements.calendarDateTo.enabled = false;
		break;
	case OPERATOR.SMALLER_THEN:
	case OPERATOR.SMALLER_EQUAL:
		elements.calendarDateFrom.enabled = false;
		elements.calendarDateTo.enabled = true;
		break;
	case OPERATOR.BETWEEN:
		elements.calendarDateFrom.enabled = true;
		elements.calendarDateTo.enabled = true;
		break;
	default:
		break;
	}
}

/**
 * @protected
 * @return {Array}
 * @properties={typeid:24,uuid:"6C2332DC-B202-41AE-959F-5D5044AF70F3"}
 * @override
 */
function getSelectedFilterValues() {

	var OPERATOR = scopes.svyPopupFilter.OPERATOR;
	switch (operator) {
	case OPERATOR.EQUALS:
	case OPERATOR.GREATER_THEN:
	case OPERATOR.GREATER_EQUAL:
		if (dateFrom) {
			return [scopes.svyDateUtils.toStartOfDay(dateFrom)];
		} else {
			return [];
		}
	case OPERATOR.SMALLER_THEN:
	case OPERATOR.SMALLER_EQUAL:
		if (dateTo) {
			return [scopes.svyDateUtils.toEndOfDay(dateTo)];
		} else {
			return [];
		}
	case OPERATOR.BETWEEN:
		if (dateFrom && dateTo) {
			return [scopes.svyDateUtils.toStartOfDay(dateFrom), scopes.svyDateUtils.toEndOfDay(dateTo)];
		} else {
			// TODO should handle scenario where not selected !?
			return [];
		}

	default:
		return [];
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param defaultOperator
 *
 * @properties={typeid:24,uuid:"2AB64A51-33B5-4263-8691-CDF49804B9E9"}
 * @override
 */
function setOperator(defaultOperator) {
	_super.setOperator(defaultOperator);
	updateUI();
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"AF3CF973-C958-41ED-A273-5DF6047366B2"}
 */
function onLoad(event) {
	_super.onLoad(event);

	//elements.faClose.imageStyleClass = scopes.svyPopupFilter.STYLING.CLOSE_ICON;

	scopes.svyPopupFilter.applyLocaleStrings(controller.getName(), 'svyDatePopupFilter');

	var valueListContent = databaseManager.createEmptyDataSet(0, 2);
	valueListContent.addRow([scopes.svyPopupFilter.LOCALE.svyDatePopupFilter.operator.EQUALS, scopes.svyPopupFilter.OPERATOR.EQUALS]);
	valueListContent.addRow([scopes.svyPopupFilter.LOCALE.svyDatePopupFilter.operator.SMALLER_EQUAL, scopes.svyPopupFilter.OPERATOR.SMALLER_EQUAL]);
	valueListContent.addRow([scopes.svyPopupFilter.LOCALE.svyDatePopupFilter.operator.GREATER_EQUAL, scopes.svyPopupFilter.OPERATOR.GREATER_EQUAL]);
	valueListContent.addRow([scopes.svyPopupFilter.LOCALE.svyDatePopupFilter.operator.BETWEEN, scopes.svyPopupFilter.OPERATOR.BETWEEN]);
	application.setValueListItems('svyDateSelectionTypes', valueListContent);
}

/**
 * @protected
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"CDFCFB87-BBC3-45C0-A74D-DEDA8F3FAEFC"}
 * @override
 */
function onShow(firstShow, event) {

	if (filter.getText()) {
		//		elements.labelTitle.text = filter.getText();
	}
	_super.onShow(firstShow, event);
}
