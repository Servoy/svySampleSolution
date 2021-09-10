/**
 * Called whenever a breadcrumb item is clicked with the JSEvent and the item clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"26D81190-EE80-4F71-B67B-08E36210972B"}
 */
function onCrumbClicked(event, crumb, index) {
	switch (index) {
	case 0:
		showForm(forms.customersViewMobileDataGrid);
		break;
	default:
		showForm(forms.customerView);
		break;
	}
}