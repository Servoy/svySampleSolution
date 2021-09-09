/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B43EAC85-E43D-4C67-B0E1-8695FC18A855"}
 */
function onActionSearch(event) {
	search(searchText,'companyname')
}


/**
 * @properties={typeid:24,uuid:"2B8087EE-5DE0-41A4-B196-A023D76B5CEE"}
 * @override
 */
function newRecord() {
	_super.newRecord();
	showForm(forms.customerInfoAdd);
}