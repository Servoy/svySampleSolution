/**
 * @enum
 * @protected
 * @properties={typeid:35,uuid:"87462D20-3369-4DA8-9D74-89E9AEDA1C5A",variableType:-4}
 */
var CHART_VALUE_FUNC = {
	COUNT: "count",
	SUM: "sum",
	MAX: "max",
	MIN: "min"
}

/**
 * @private
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E738290B-FE37-4A3E-B62E-D77EBA3AB12B"}
 */
var valueColumn = null;

/**
 * @private
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D39DF24-01CC-4392-8132-FC19DF1AEFF4"}
 */
var labelColumn = null;

/**
 * @private
 * @type {String}
 *
 * @properties={typeid:35,uuid:"539BA6EB-4A97-4AE3-BB4B-F377C3385DCA"}
 */
var valueFunc = "sum";

/**
 * @type {function}
 *
 * @properties={typeid:35,uuid:"19406802-7CE7-4218-B703-839CB97C47FA",variableType:-4}
 */
var callback;

/**
 *
 * @public
 * @param {RuntimeWebComponent<aggrid-groupingtable>} table
 * @param {function} onApply
 * @param {JSEvent} event
 * @param {Object} params
 *
 * @properties={typeid:24,uuid:"FAA3E552-777E-42B3-AA0D-CE28690D1C82"}
 */
function showChartConfig(table, onApply, event, params) {

	callback = onApply;

	// assume there is only 1 pk
	var jsTable = databaseManager.getTable(table.myFoundset.foundset.getDataSource());
	var pkName = jsTable.getRowIdentifierColumnNames()[0];

	var labelsDisplay = [];
	var labelsRealValue = [];

	// include all columns
	for (var i = 0; i < table.columns.length; i++) {
		var col = table.columns[i];
		// exclude pkName
		if (col.dataprovider && col.dataprovider != pkName) {
			labelsRealValue.push(col.dataprovider);
			labelsDisplay.push(col.headerTitle ? col.headerTitle : col.dataprovider);
		}
	}

	// set label valuelist
	application.setValueListItems("chartLabelPicker", labelsDisplay, labelsRealValue);

	// set value valuelist
	labelsDisplay = ["ID"].concat(labelsDisplay);
	labelsRealValue = [pkName].concat(labelsRealValue);
	application.setValueListItems("chartValuePicker", labelsDisplay, labelsRealValue);

	// first column should be PK
	valueColumn = labelsRealValue[0];
	labelColumn = labelsRealValue[1];
	
	if (params) {
		if (params.label) labelColumn = params.label;
		if (params.value) valueColumn = params.value;
		if (params.valueFunc) valueFunc = params.valueFunc;
	}

	// show the popup
	var popup = plugins.window.createFormPopup(forms[controller.getName()]);
	popup.x(event.getX());
	popup.y(event.getY());
	popup.show();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"D71F70FF-2486-4A90-A699-9ADA662F26F5"}
 */
function onLoad(event) {
	//	var propMainColor = scopes.svyProperties.getUserPropertyValue("MAIN-COLOR", "style")
	//	if (propMainColor) {
	//		primaryColor = propMainColor;
	//	}
	//
	//	var propSecondaryColor = scopes.svyProperties.getUserPropertyValue("SECONDARY-COLOR", "style")
	//	if (propSecondaryColor) {
	//		secondaryColor = propSecondaryColor;
	//	}
}

/**
 * @protected
 * @properties={typeid:24,uuid:"19136D1C-96B0-4D09-A22A-4C8834652E0E"}
 */
function updateUI() {
	elements.funcCount.removeStyleClass("text-primary");
	elements.funcSum.removeStyleClass("text-primary");
	elements.funcMax.removeStyleClass("text-primary");
	elements.funcMin.removeStyleClass("text-primary");

	elements.funcCount.addStyleClass("text-tertiary");
	elements.funcSum.addStyleClass("text-tertiary");
	elements.funcMax.addStyleClass("text-tertiary");
	elements.funcMin.addStyleClass("text-tertiary");

	switch (valueFunc) {
	case CHART_VALUE_FUNC.SUM:
		elements.funcSum.removeStyleClass("text-tertiary");
		elements.funcSum.addStyleClass("text-primary");
		break;
	case CHART_VALUE_FUNC.MAX:
		elements.funcMax.removeStyleClass("text-tertiary");
		elements.funcMax.addStyleClass("text-primary");
		break;
	case CHART_VALUE_FUNC.MIN:
		elements.funcMin.removeStyleClass("text-tertiary");
		elements.funcMin.addStyleClass("text-primary");
		break;
	case CHART_VALUE_FUNC.COUNT:
		elements.funcCount.removeStyleClass("text-tertiary");
		elements.funcCount.addStyleClass("text-primary");
		break;
	default:
		elements.funcCount.removeStyleClass("text-tertiary");
		elements.funcCount.addStyleClass("text-primary");
		valueFunc = CHART_VALUE_FUNC.COUNT;
		break;
	}
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"55A3B8DF-529F-4516-8F2F-8DC58F7794A5"}
 */
function onActionApplyColors(event) {

	//	scopes.svyProperties.setUserProperty("MAIN-COLOR", "style", primaryColor);
	//	scopes.svyProperties.setUserProperty("SECONDARY-COLOR", "style", secondaryColor);
	//
	//	scopes.cloudSample.overrideStyleColors(primaryColor, secondaryColor);

	if (callback) {
		callback.call(this, labelColumn, valueColumn, valueFunc)
	}
	
	plugins.window.closeFormPopup(null);
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"04961AEA-8858-40AC-BFEC-C2656A145672"}
 */
function onActionReset(event) {
	//	primaryColor = "#4880FF";
	//	secondaryColor = "#FFFFFF";
	//
	//	scopes.svyProperties.setUserProperty("MAIN-COLOR", "style", primaryColor);
	//	scopes.svyProperties.setUserProperty("SECONDARY-COLOR", "style", secondaryColor);
	//
	//	scopes.cloudSample.overrideStyleColors(primaryColor, secondaryColor)

}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B7C2CC88-9FB2-4405-8945-8C5D71A40CBA"}
 */
function onActionCount(event, dataTarget) {
	valueFunc = CHART_VALUE_FUNC.COUNT;
	updateUI();
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2BB06273-2EB4-404B-864C-66F26658ABB7"}
 */
function onActionSum(event, dataTarget) {
	valueFunc = CHART_VALUE_FUNC.SUM;
	updateUI();
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7AF94443-7932-4600-98DC-630C62A16E6F"}
 */
function onActionMax(event, dataTarget) {
	valueFunc = CHART_VALUE_FUNC.MAX;
	updateUI();
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"4C819724-1F03-45E8-A0CD-D648B3B4571C"}
 */
function onActionMin(event, dataTarget) {
	valueFunc = CHART_VALUE_FUNC.MIN;
	updateUI();
}
