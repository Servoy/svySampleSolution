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
	showForm(forms.customerInfoAdd);
}
