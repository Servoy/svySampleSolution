/**
 * @protected 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7ADFBD5B-2362-4C54-9AFB-DF4C5EC6B163"}
 */
var cId;

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
 * @AllowToRunInFind
 */
function onActionSearch() {
	search(searchText,['orderdate','orderid']);
}


/**
 * @properties={typeid:24,uuid:"9381DA53-1A61-479B-8BDD-E5A267C25F7E"}
 * @override
 */
function newRecord(){
	_super.newRecord();
	foundset.customerid = cId;
	scopes.global.showForm(forms.orderEditMobile, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"801C4D4C-3B0B-499D-B3B0-1FB06E66E283"}
 */
function onActionBack(event) {
	back();
}

/**
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B2E2629E-7BDB-4215-8EEF-26F99A2E948D"}
 */
function back() {
	scopes.svyNavigationHistory.back();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param crumb
 * @param index
 *
 * @properties={typeid:24,uuid:"954BC2B9-9E7B-4A35-A47B-D65DBD3D40A3"}
 */
function onCrumbClicked(event, crumb, index) {
	switch (index) {
	case 0:
		back();
		break;
	default:
		back();
		break;
	}
}

/**
 * @public 
 * TODO generated, please specify type and doc for the params
 * @param id
 *
 * @properties={typeid:24,uuid:"14930FB8-FCB0-43FD-84FB-13429F85B242"}
 */
function setCID(id){
	cId = id;
}