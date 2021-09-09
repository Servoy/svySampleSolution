/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"41DDD72D-B382-4FAB-834F-E848CBE74814"}
 */
function onActionSearch(event) {
	search(searchText,'companyname')
}

/**
 * @properties={typeid:24,uuid:"C2C1A57D-67E2-495C-BE2F-A91B0AC50045"}
 * @override
 */
function newRecord() {
	_super.newRecord();
	showForm(forms.customerInfoAddMobile);
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C17EAB43-D42F-4AB4-B433-D4BF56D937D7"}
 */
function onActionViewDetails(event, dataTarget) {
	showForm(forms.customerView);
}
