/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8EFB537A-7765-424E-B053-5AD0877BFA71"}
 */
function onActionSearch(event) {
	search(searchText,'companyname');
}

/**
 * @properties={typeid:24,uuid:"DC89E380-3668-4155-A275-8AC17802F1E1"}
 * @override
 */
function newRecord() {
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
	showForm(forms.customerViewMobile);
}
