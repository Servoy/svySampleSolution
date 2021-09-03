/**
 * @private
 * @properties={typeid:35,uuid:"CDB8F194-BC37-41D9-9692-8435E476E5EE",variableType:-4}
 */
var NAVBAR_ACTIONS = {
	DOWNLOAD_IDE: "download-ide",
	PRIMARY_COLOR: "primary-color",
	HOME: "homeDashboard",
	CUSTOMERS: "customersTableView",
	ORDERS: "ordersTableView",
	DOCUMENT_EDITOR: "documentEditor",
	TUTORIAL: "TUTORIAL",
	SECURITY: "svyTENANT",
	SECURITY_ROLES: "svyROLES",
	SECURITY_USERS: "svyUSERS"
}

/**
 * @protected
 * @param event
 *
 * @properties={typeid:24,uuid:"B7DFE495-A4FA-4C09-AF64-49A916F4E5C5"}
 * @override
 */
function onLoad(event) {
	_super.onLoad(event);

	// register for search event
	scopes.svyNavigationUX.addGlobalSearchListener(onSearch);
}



/**
 * @protected
 * @param menuItemId
 * @param event
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"03CA2046-F192-47A3-8E2A-25BE9F275DBD"}
 * @override
 */
function onMenuItemSelected(menuItemId, event) {

	if (menuItemId === "TUTORIAL") {
		scopes.tutorial.showTutorial()
		return false;
	}

	return true;
}

/**
 * @return {Array<CustomType<bootstrapextracomponents-navbar.menuItem>>}
 * @protected
 * @properties={typeid:24,uuid:"34561015-D2E7-42CA-A52A-A3B10DFF342D"}
 * @override
 */
function loadNavbarItems() {
	var menuItems = [];
	var submenuItems = [];
	/** @type {CustomType<bootstrapextracomponents-navbar.menuItem>} */
	var menuItem;

	menuItem = elements.navbar.createMenuItem('Download IDE', NAVBAR_ACTIONS.DOWNLOAD_IDE, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'btn-download-ide btn-round border-default margin-10';
	menuItem.iconName = "icon-cloud-download";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('Search', DEFAULT_NAVBAR_ACTIONS.SEARCH, 'RIGHT');
	menuItem.displayType = 'INPUT_GROUP';
	menuItem.styleClass = 'closed searchbar';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItem.iconName = "fa fa-search";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('HOME', NAVBAR_ACTIONS.HOME, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('CUSTOMERS', NAVBAR_ACTIONS.CUSTOMERS, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('ORDERS', NAVBAR_ACTIONS.ORDERS, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('DOCUMENT EDITOR', NAVBAR_ACTIONS.DOCUMENT_EDITOR, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('SECURITY', NAVBAR_ACTIONS.SECURITY, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.inputButtonStyleClass = "btn-default";

	var roles = elements.navbar.createMenuItem('ROLES', NAVBAR_ACTIONS.SECURITY_ROLES);
	submenuItems.push(roles);
	
	var users = elements.navbar.createMenuItem('USERS', NAVBAR_ACTIONS.SECURITY_USERS);
	submenuItems.push(users);
	
	menuItem.subMenuItems = submenuItems;
	menuItems.push(menuItem);
	
	
	
	menuItem = elements.navbar.createMenuItem('TUTORIAL', NAVBAR_ACTIONS.TUTORIAL, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItems.push(menuItem);

	menuItem = elements.navbar.createMenuItem('Primary Colors', NAVBAR_ACTIONS.PRIMARY_COLOR, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'no-border';
	menuItem.iconName = "fas fa-square text-primary border-default border-radius";
	menuItem.inputButtonStyleClass = "btn-default";
	menuItems.push(menuItem);

	if (security.getUserName()) {
		menuItem = elements.navbar.createMenuItem(security.getUserName(), DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.displayType = 'MENU_ITEM';
		menuItem.iconName = 'fas fa-user';
		menuItem.styleClass = 'no-border';
		submenuItems = [];

		var logout = elements.navbar.createMenuItem('Logout', DEFAULT_NAVBAR_ACTIONS.LOGOUT);
		//logout.iconName = "fas fa-sign-out-alt";
		submenuItems.push(logout);

		menuItem.subMenuItems = submenuItems;
		menuItems.push(menuItem);
	}

	return menuItems;
}

/**
 * @protected
 * @param {JSEvent} event
 * @param menuItem
 *
 * @properties={typeid:24,uuid:"66EEFB31-08D3-4973-92C4-7FF8D31277E7"}
 * @override
 */
function onNavbarMenuItemClicked(event, menuItem) {

	switch (menuItem.itemId) {
	case NAVBAR_ACTIONS.DOWNLOAD_IDE:
		application.showURL('https://www.servoy.com/download/', '_blank');
		break;
	case NAVBAR_ACTIONS.PRIMARY_COLOR:

		var popup = plugins.window.createFormPopup(forms.colorPicker);
		popup.x(event.getX());
		popup.y(event.getY());
		popup.show();

		break;
	case NAVBAR_ACTIONS.HOME:
		elements.formcontainer.containedForm = forms.homeDashboard;
		break;
	case NAVBAR_ACTIONS.CUSTOMERS:
		elements.formcontainer.containedForm = forms.customersTableView;
		break;
	case NAVBAR_ACTIONS.ORDERS:
		elements.formcontainer.containedForm = forms.ordersTableView;
		break;
	case NAVBAR_ACTIONS.DOCUMENT_EDITOR:
		elements.formcontainer.containedForm = forms.documentEditor;
		break;
	case NAVBAR_ACTIONS.SECURITY:
	elements.formcontainer.containedForm = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT;
		break;
	case NAVBAR_ACTIONS.SECURITY_ROLES:
		elements.formcontainer.containedForm = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT_ROLES;
		break;
	case NAVBAR_ACTIONS.SECURITY_USERS:
	elements.formcontainer.containedForm = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT_USERS;
	break;
	case DEFAULT_NAVBAR_ACTIONS.LOGOUT:
		security.logout();
		break;
	case NAVBAR_ACTIONS.TUTORIAL:
		scopes.tutorial.showTutorial();
		break;
	default:
		break;
	}

}

/**
 * @protected
 * @param {String} txt
 *
 * @properties={typeid:24,uuid:"917AF150-B3EB-49A7-BDAF-16ECA5139CCA"}
 * @AllowToRunInFind
 */
function onSearch(txt) {
	// show search view lookup
	var lookup = scopes.svyLookup.createLookup(datasources.mem.search_results.getDataSource());
	lookup.setLookupForm(forms.searchViewLookup);
	lookup.addField("").setSearchable(false).setStyleClass("text-center fa-2x").setStyleClassDataprovider("iconStyleClass").setWidth("50");
	lookup.addField("text_value").setTitleText("RESULT");

	// show the lookup as popup popup
	var popup = lookup.createPopUp(onSearchLookup, txt);
	popup.y(86);
	popup.x(application.getWindow().getWidth() - 501);
	popup.width(500);
	popup.show();
}

/**
 * @protected
 * @param {Array<JSRecord<mem:search_results>>} records
 * @param values
 * @param lookup
 *
 * @properties={typeid:24,uuid:"7037996E-C523-4CCB-BEFD-0661F30654C4"}
 */
function onSearchLookup(records, values, lookup) {

	// handle search lookup selection
	if (records && records.length) {

		var record = records[0];

		switch (record.table_name) {
		case "customers":
			// navigate to customer
			var customerRecord = scopes.svyDataUtils.getRecord(datasources.db.example_data.customers.getDataSource(), [record.pks]);
			scopes.global.showForm(forms.customerView, customerRecord, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
			break;
		case "orders":
			// navigate to customer's order
			var orderRecord = scopes.svyDataUtils.getRecord(datasources.db.example_data.orders.getDataSource(), [record.pks]);
			scopes.global.showForm(forms.orderEdit, orderRecord, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
			break;
		default:
		}
	}
}
