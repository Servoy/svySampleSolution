/**
 * Called whenever a breadcrumb item is clicked with the JSEvent and the item clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B004B4E7-62B9-4D04-AC04-336474CAC6E5"}
 */
function onCrumbClicked(event, crumb, index) {
	switch (index) {
	case 0:
		var item = new scopes.svyNavigation.NavigationItem("customersTableView");
		scopes.svyNavigation.open(item);
		break;
	default:
		back(event);
		break;
	}
}
