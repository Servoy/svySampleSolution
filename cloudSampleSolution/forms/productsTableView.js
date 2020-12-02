/**
 * @properties={typeid:24,uuid:"0170268E-0794-4605-8288-DE3AB2D8463A"}
 * @override
 */
function newRecord() { 
	foundset.newRecord();
	foundset.discontinued = 0;
	elements.table.editCellAt(foundset.getSelectedIndex(), 0);
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
 * @protected
 *
 * @properties={typeid:24,uuid:"842D914F-B800-4AD1-8526-525E78776CEE"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var item = scopes.svyNavigation.createNavigationItem("productInfoEdit")
	scopes.svyNavigation.open(item, foundset.getSelectedRecord(), scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SELECT_RECORD);
}
