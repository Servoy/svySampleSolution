/**
 * @properties={typeid:35,uuid:"78428562-84C6-479A-89F6-81915B38B8E2",variableType:-4}
 */
var ORDER_STATUSES = {
	NEW: 1,
	PLANNED: 2,
	COMPLETED: 3
}

/**
 * @properties={typeid:24,uuid:"2555A2A8-A863-4AC0-980C-ADEB838D43F7"}
 */
function applyFilter(type) {
	var query = datasources.db.example_data.orders.createSelect();
	query.result.addPk();

	switch (type) {
	case ORDER_STATUSES.NEW:
		query.where.add(query.columns.requireddate.isNull).add(query.columns.shippeddate.isNull);
		break;
	case ORDER_STATUSES.PLANNED:
		query.where.add(query.columns.requireddate.not.isNull).add(query.columns.shippeddate.isNull);
		break;
	case ORDER_STATUSES.COMPLETED:
		query.where.add(query.columns.requireddate.not.isNull).add(query.columns.shippeddate.not.isNull);
		break;
	default:
		break;
	}

	foundset.loadRecords(query);
	foundset.sort('orderdate desc');
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D9738DFF-84BE-4344-AD7A-F79231DB1677"}
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
 * @properties={typeid:24,uuid:"51B9FE2B-66B8-40AC-A32D-26161731B55F"}
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
 * @properties={typeid:24,uuid:"3C46395E-E351-441C-8866-06A3EB5A90FD"}
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
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"26CF4302-E8E3-4727-A56E-92DE940DB285"}
 */
function onShow(firstShow, event) {
	if (firstShow) {
		onPlannedClick(event);
	}
}
