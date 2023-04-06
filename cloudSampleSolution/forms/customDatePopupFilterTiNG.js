/**
 * @protected 
 * @return {Array}
 * @properties={typeid:24,uuid:"93337186-38F5-4CDB-AD21-0912A5F93FDF"}
 * @override
 */
function getSelectedFilterValues() {
	
	var date1 = dateFrom ? scopes.svyDateUtils.toStartOfDay(dateFrom) : null;
	var date2 = dateTo ? scopes.svyDateUtils.toEndOfDay(dateTo) : null;

	return [date1, date2];
}

/**
 * @protected 
 * @override 
 * @return {Number}
 * @properties={typeid:24,uuid:"F9889232-364A-4D40-B2A3-601812CBA876"}
 */
function defaultWidth() {
	return 580;
}
