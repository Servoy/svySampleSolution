/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8EFB537A-7765-424E-B053-5AD0877BFA71"}
 */
function onActionSearch(event) {
	search(searchText, ['companyname', 'address']);
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"DC89E380-3668-4155-A275-8AC17802F1E1"}
 * @override
 */
function newRecord() {
	// Create new record and show Customer Detail
	_super.newRecord();
	showForm(forms.customerInfoAddMobile);
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
 * @properties={typeid:24,uuid:"60B5D18C-215E-4DC2-88FB-CC5817743B5C"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	// show the Customer Detail
	showForm(forms.customerViewMobile);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7DEE4500-8EC4-46E1-BFDE-082DE6FFB636"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords();
}

/**
 * @protected 
 * @param event
 *
 * @properties={typeid:24,uuid:"01676E59-6F0B-4C97-AE8F-2CCFB694C11D"}
 * @override
 */
function onLoad(event) {
	_super.onLoad(event);

	var customerFilter = toolbarFilter.addFilter('Customer', 'customerid', scopes.svyToolbarFilter.FILTER_TYPES.SELECT);
	customerFilter.setValueList('customers');
	var addressFilter = toolbarFilter.addFilter('Address', 'address', scopes.svyToolbarFilter.FILTER_TYPES.TOKEN);

	toolbarFilter.setFilterValue(customerFilter, [], scopes.svyPopupFilter.OPERATOR.IS_IN);
	toolbarFilter.setFilterValue(addressFilter, [], scopes.svyPopupFilter.OPERATOR.LIKE_CONTAINS);

}
