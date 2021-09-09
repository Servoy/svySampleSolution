/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"50C13E1F-BFCD-45BC-A8CF-0C27A6BD0AD8"}
 */
function onActionSearch(event) {
	search(searchText,'companyname')
}


/**
 * @properties={typeid:24,uuid:"F2AA7DAE-3D7D-4526-9936-2A6F304255F3"}
 * @override
 */
function newRecord() {
	_super.newRecord();
	showForm(forms.customerInfoAdd);
}