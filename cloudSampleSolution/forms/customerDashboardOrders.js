/**
 * @properties={typeid:35,uuid:"1D4F3FA5-4C36-45F7-B2B1-7073B308F51D",variableType:-4}
 */
var ORDER_STATUSES = {
	NEW: 1,
	PLANNED: 2,
	COMPLETED: 3
};

/**
 * @properties={typeid:24,uuid:"39DC3896-7368-4C91-BD7A-9A08848DE0A5"}
 */
function applyFilter(type) { }

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7CB380CA-2C0D-4150-9FB1-2828F4B404E6"}
 */
function onNewClick(event) {
	applyFilter(ORDER_STATUSES.NEW);

	elements.btnNew.removeStyleClass('order-newbutton');
	elements.btnNew.addStyleClass('order-newbutton-active');

	elements.btnPlanned.addStyleClass('order-plannedbutton');
	elements.btnPlanned.removeStyleClass('order-plannedbutton-active');

	elements.btnCompleted.addStyleClass('order-completedbutton');
	elements.btnCompleted.removeStyleClass('order-completedbutton-active');
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8ECFFBE1-5135-411B-9EA0-537C8F305DA7"}
 */
function onPlannedClick(event) {
	applyFilter(ORDER_STATUSES.PLANNED);

	elements.btnPlanned.removeStyleClass('order-plannedbutton');
	elements.btnPlanned.addStyleClass('order-plannedbutton-active');

	elements.btnNew.addStyleClass('order-newbutton');
	elements.btnNew.removeStyleClass('order-newbutton-active');

	elements.btnCompleted.addStyleClass('order-completedbutton');
	elements.btnCompleted.removeStyleClass('order-completedbutton-active');
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"900B0ED2-DA38-4C05-8135-1A4A825A5BD8"}
 */
function onCompletedClick(event) {

	applyFilter(ORDER_STATUSES.COMPLETED);

	elements.btnCompleted.removeStyleClass('order-completedbutton');
	elements.btnCompleted.addStyleClass('order-completedbutton-active');

	elements.btnNew.addStyleClass('order-newbutton');
	elements.btnNew.removeStyleClass('order-newbutton-active');

	elements.btnPlanned.addStyleClass('order-plannedbutton');
	elements.btnPlanned.removeStyleClass('order-plannedbutton-active');
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E0143577-D0A3-422B-8382-DE48E2094A1F"}
 */
function onActionNewOrder(event, dataTarget) {
	foundset.newRecord();
	edit();
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 * the record is not an actual JSRecord but an object having the dataprovider values of the clicked record
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {object} [record]
 * @param {JSEvent} [event]
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"86C6F9A6-E39E-406F-81F4-40531531C313"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.table.getColumn(columnindex);
	if (column && column.id === "edit") {
		edit();
	}
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"76AA264F-0E7E-4ED7-A5BC-C85DD23A2099"}
 */
function edit() {
	var item = new scopes.svyNavigation.NavigationItem("orderEdit");
	scopes.svyNavigation.open(item, foundset, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.SET_FOUNDSET);

}
