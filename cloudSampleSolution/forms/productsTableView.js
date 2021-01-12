/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"036B3F13-56A9-4379-A8BE-8BBF52436109"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	showForm(forms.productInfoEdit);
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"625A80DD-1658-41BB-B074-30C8692875A4"}
 * @override
 */
function newRecord() {
	_super.newRecord();
	showForm(forms.productInfoEdit);
}


/**
 * @properties={typeid:24,uuid:"4086699F-28AD-4A14-A39D-0699EB63DB03"}
 * @override
 */
function gotoNew() {
	var item = new scopes.svyNavigation.NavigationItem("productInfoEdit");
	scopes.svyNavigation.open(item, foundset.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
} 