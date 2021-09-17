
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"3395F868-D90A-4E61-A127-04176B5F26C4"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	scopes.global.showForm(forms.orderEditMobile, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);

}

/**
 * @properties={typeid:24,uuid:"98BA5FAD-6068-44E2-94B9-152BFEA8DFBF"}
 */
function onActionSearch() {
	search(searchText,'orderid');
}


/**
 * @properties={typeid:24,uuid:"9381DA53-1A61-479B-8BDD-E5A267C25F7E"}
 * @override
 */
function newRecord(){
	var cId = foundset.customerid;
	_super.newRecord();
	foundset.customerid = cId;
	scopes.global.showForm(forms.orderEditMobile, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
}