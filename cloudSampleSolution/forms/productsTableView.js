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
	var column = elements.table.getColumn(columnindex);
	if (column.id == "edit") {
		showForm(forms.productInfoEdit);
	}
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
