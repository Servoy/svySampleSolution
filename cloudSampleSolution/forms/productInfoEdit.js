
/**
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 * @override
 *
 * @properties={typeid:24,uuid:"03FE6599-E2B0-4B4F-8527-E0755BB5B835"}
 */
function onCrumbClicked(event, crumb, index) {
	switch (index) {
	case 0:	// crumb at index 0 clicked. Show products grid
		var item = new scopes.svyNavigation.NavigationItem("productsTableView");
		scopes.svyNavigation.open(item);
		break;
	default:
		break;
	}

}
