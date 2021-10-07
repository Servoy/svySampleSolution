/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F88F013D-AFC3-41E6-9F22-F4E3132C0B8D"}
 */
function onActionSearch(event) {
	search(searchText,['orderid','orderdate','customerid']);
}


/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4F3D62A5-6008-4881-8AA6-AEC370D37414"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	scopes.global.showForm(forms.orderEditMobile, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5177FCA9-0F48-4661-A71A-413CC080B870"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"EC8B3E25-1816-4613-9DA0-7E22C3A0AF02"}
 * @override
 */
function onLoad(event) {
	_super.onLoad(event);
	var orderIDFilter = toolbarFilter.addFilter('Order ID', 'orderid', scopes.svyToolbarFilter.FILTER_TYPES.NUMBER);
	var orderDateFilter = toolbarFilter.addFilter('Order Date', 'orderdate', scopes.svyToolbarFilter.FILTER_TYPES.DATE);
	var customerFilter = toolbarFilter.addFilter('Customer', 'customerid', scopes.svyToolbarFilter.FILTER_TYPES.SELECT);
	customerFilter.setValueList('customers');
	
	toolbarFilter.setFilterValue(orderIDFilter,[],scopes.svyPopupFilter.OPERATOR.IS_IN);
	toolbarFilter.setFilterValue(orderDateFilter,[],scopes.svyPopupFilter.OPERATOR.IS_IN);
	toolbarFilter.setFilterValue(customerFilter,[],scopes.svyPopupFilter.OPERATOR.IS_IN);
	
}