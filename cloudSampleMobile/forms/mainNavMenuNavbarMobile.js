/**
 * @private
 * @properties={typeid:35,uuid:"2C240038-1E7E-4165-B2AA-172ED915A7C9",variableType:-4}
 */
var NAVBAR_ACTIONS = {
	DOWNLOAD_IDE: "download-ide",
	PRIMARY_COLOR: "primary-color",
	HOME: "homeDashboardMobile",
	CUSTOMERS: "customersViewMobileDataGrid",
	ORDERS: "ordersViewMobileDataGrid",
	DOCUMENT_EDITOR: "documentEditor",
	TUTORIAL: "TUTORIAL",
	SECURITY: "svyTENANT",
	SECURITY_ROLES: "svyROLES",
	SECURITY_USERS: "svyUSERS"
};

/**
 * @protected
 * @param event
 *
 * @properties={typeid:24,uuid:"7B16644E-1E7D-4A09-AD03-F683C1011FF1"}
 * @override
 */
function onLoad(event) {
	_super.onLoad(event);

	// register for search event
	scopes.svyNavigationUX.addGlobalSearchListener(onSearch);
}

/**
 * @return {Array<CustomType<bootstrapextracomponents-navbar.menuItem>>}
 * @protected
 * @properties={typeid:24,uuid:"9CDFAE8D-2102-45D6-BB7E-A28E1566634C"}
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

	/*menuItem = elements.navbar.createMenuItem('DOCUMENT EDITOR', NAVBAR_ACTIONS.DOCUMENT_EDITOR, 'RIGHT');
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
	menuItems.push(menuItem);*/
	
	
	
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
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"0A06EBDB-05B3-4DC5-83D7-26684F6E6F9D"}
 * @override
 */
function onNavbarMenuItemClicked(event, menuItem) {

	switch (menuItem.itemId) {
	case NAVBAR_ACTIONS.DOWNLOAD_IDE:
		application.showURL('https://www.servoy.com/download/', '_blank');
		break;
	case NAVBAR_ACTIONS.PRIMARY_COLOR:

		var popup = plugins.window.createFormPopup(forms.colorPicker);
		popup.x(0);
		popup.y(0);
		popup.show();

		return false;
	case NAVBAR_ACTIONS.TUTORIAL:
		scopes.tutorial.showTutorial();
		return false;
	default:
		break;
	}

	return true
}

/**
 * @protected
 * @param {String} txt
 *
 * @properties={typeid:24,uuid:"4A5B9394-B9D3-4076-87C8-3A956E2A4761"}
 * @AllowToRunInFind
 */
function onSearch(txt) {
	// show search view lookup
	var lookup = scopes.svyLookup.createLookup(datasources.mem.search_results.getDataSource());
	lookup.setLookupForm(forms.searchViewLookupMobile);
	lookup.addField("").setSearchable(false).setStyleClass("text-center fa-2x").setStyleClassDataprovider("iconStyleClass").setWidth("50");
	lookup.addField("text_value").setTitleText("RESULT");

	// show the lookup as popup
	var popup = lookup.createPopUp(onSearchLookup, txt);
	popup.showBackdrop(true);
	popup.y(85);
	popup.x(1);
	popup.width(application.getWindow().getWidth()-1);
	popup.height(application.getWindow().getHeight()-85);
	popup.show();
}

/**
 * @protected
 * @param {Array<JSRecord<mem:search_results>>} records
 * @param values
 * @param lookup
 *
 * @properties={typeid:24,uuid:"E42AD00E-2BF1-40F6-8DC1-A6A234F53C18"}
 */
function onSearchLookup(records, values, lookup) {

	// handle search lookup selection
	if (records && records.length) {

		var record = records[0];

		switch (record.table_name) {
		case "customers":
			// navigate to customer
			var customerRecord = scopes.svyDataUtils.getRecord(datasources.db.example_data.customers.getDataSource(), [record.pks]);
			scopes.global.showForm(forms.customerViewMobile, customerRecord, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
			break;
		case "orders":
			// navigate to customer's order
			var orderRecord = scopes.svyDataUtils.getRecord(datasources.db.example_data.orders.getDataSource(), [record.pks]);
			scopes.global.showForm(forms.orderEditMobile, orderRecord, scopes.svyNavigation.NAVIGATION_SELECTION_TYPE.LOAD_RECORDS);
			break;
		default:
		}
	}
}
