/**
 * @private
 * @properties={typeid:35,uuid:"320D59C8-2B98-485D-BCEB-862B2693C287",variableType:-4}
 */
var NAVBAR_ACTIONS = {
	DOWNLOAD_IDE: "download-ide",
	PRIMARY_COLOR: "primary-color"
};

/**
 * @protected 
 * @param event
 *
 * @properties={typeid:24,uuid:"F300ED97-4DC6-4157-8B49-33F89D125B9E"}
 * @override
 */
function onLoad(event) {
	_super.onLoad(event);

	// register for search event
	scopes.svyNavigationUX.addGlobalSearchListener(onSearch);
}

/**
 * @return {Array<CustomType<servoyextra-sidenav.MenuItem>>}
 * @protected
 * @override
 * @properties={typeid:24,uuid:"B4770894-DFFE-46A7-B66C-72E5896F8F1D"}
 */
function loadMenuItems() {	
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	var menuItem;
	var menuItems = [];
	var menuSubItem;
	var menuSubItems = [];
	
	// User
	menuItem = new Object();
	menuItem.id = "User";
	menuItem.text = security.getUserName().toUpperCase();
	menuItem.styleClass = "test";
	menuItem.iconStyleClass = "fas fa-user";
	menuItem.enabled = false;
	menuItems.push(menuItem);
	
	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);

	// HOME
	menuItem = new Object();
	menuItem.id = "homeDashboard";
	menuItem.text = "DASHBOARD"
	menuItem.iconStyleClass = "fa fa-th-large";
	menuItems.push(menuItem);

	// CUSTOMERS
	menuItem = new Object();
	menuItem.id = "customersTableView";
	menuItem.text = "CUSTOMERS"
	menuItem.iconStyleClass = "icon-contacts";
	menuItems.push(menuItem);

	// ORDERS
	menuItem = new Object();
	menuItem.id = "ordersTableView";
	menuItem.text = "ORDERS"
	menuItem.iconStyleClass = "icon-box";
	menuItems.push(menuItem);
	
	// DOCUMENT EDITOR
	menuItem = new Object();
	menuItem.id = "documentEditor";
	menuItem.text = "DOCUMENT EDITOR"
	menuItem.iconStyleClass = "far fa-file-alt";
	menuItems.push(menuItem);

	// SECURITY
	menuItem = new Object();
	menuItem.id = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT;
	menuItem.text = "SECURITY"
	menuItem.iconStyleClass = "fas fa-shield-alt";

	menuSubItem = new Object();
	menuSubItem.id = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT_ROLES;
	menuSubItem.text = "ROLES"
	menuSubItem.iconStyleClass = "fa fa-user-shield";
	menuSubItems.push(menuSubItem);

	menuSubItem = new Object();
	menuSubItem.id = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT_USERS;
	menuSubItem.text = "USERS"
	menuSubItem.iconStyleClass = "fa fa-user-shield";
	menuSubItems.push(menuSubItem);

	menuItem.menuItems = menuSubItems;
	menuItems.push(menuItem);
	
	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);
	
	// TUTORIAL
	menuItem = new Object();
	menuItem.id = "TUTORIAL";
	menuItem.text = "TUTORIAL"
	menuItem.styleClass = "font-weight-bold"
	menuItem.iconStyleClass = "fas fa-graduation-cap";
	menuItems.push(menuItem);
	
	// Download IDE
	menuItem = new Object();
	menuItem.id = "DOWNLOADIDE";
	menuItem.text = "DOWNLOAD IDE"
	menuItem.styleClass = "font-weight-bold"
	menuItem.iconStyleClass = "icon-cloud-download";
	menuItems.push(menuItem);
	
	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);
	
	// Primary Colors
	menuItem = new Object();
	menuItem.id = "PRIMARYCOLORS";
	menuItem.text = "PRIMARY COLORS"
	menuItem.iconStyleClass = "fas fa-square text-primary border-default border-radius";
	menuItems.push(menuItem);
	
	// Logout
	menuItem = new Object();
	menuItem.id = "LOGOUT";
	menuItem.text = "LOGOUT"
	menuItem.iconStyleClass = "fas fa-sign-out-alt";
	menuItems.push(menuItem);
	
	return menuItems;
}

/**
 * @protected 
 * @param menuItemId
 * @param event
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E25E8A70-2771-44E0-A691-BB0D01A02405"}
 * @override
 */
function onMenuItemSelected(menuItemId,event) {
	
	if (menuItemId === "TUTORIAL") {
		scopes.tutorial.showTutorial()
		return false;
	}
	
	else if(menuItemId === "DOWNLOADIDE"){
		application.showURL("https://www.servoy.com/download/", "_blank");
		return false;
	}
	
	else if(menuItemId === "PRIMARYCOLORS"){
		var popup = plugins.window.createFormPopup(forms.colorPicker);
		popup.x(10);
		popup.y(133);
		popup.show();
		return false;
	}
	
	return true;
}

/**
 * @return {Array<CustomType<bootstrapextracomponents-navbar.menuItem>>}
 * @protected
 * @properties={typeid:24,uuid:"D2A15342-37D2-43E5-86CE-1126DA586DB9"}
 * @override
 */
function loadNavbarItems() {
	var menuItems = [];
	/** @type {CustomType<bootstrapextracomponents-navbar.menuItem>} */
	var menuItem;

	/*menuItem = elements.navbar.createMenuItem('Download IDE', NAVBAR_ACTIONS.DOWNLOAD_IDE, 'RIGHT');
	menuItem.displayType = 'MENU_ITEM';
	menuItem.styleClass = 'btn-download-ide btn-round border-default margin-10';
	menuItem.iconName = "icon-cloud-download";
	menuItems.push(menuItem);*/

	/*menuItem = elements.navbar.createMenuItem('Search', DEFAULT_NAVBAR_ACTIONS.SEARCH, 'RIGHT');
	menuItem.displayType = 'INPUT_GROUP';
	menuItem.styleClass = 'closed searchbar';
	menuItem.inputButtonStyleClass = "btn-default";
	menuItem.iconName = "fa fa-search";
	menuItems.push(menuItem);

	if (security.getUserName()) {
		menuItem = elements.navbar.createMenuItem(security.getUserName(), DEFAULT_NAVBAR_ACTIONS.USER, 'RIGHT');
		menuItem.displayType = 'MENU_ITEM';
		menuItem.iconName = 'fas fa-user';
		menuItem.styleClass = 'no-border';
		var submenuItems = [];

		var primaryColor = elements.navbar.createMenuItem('Primary Colors', NAVBAR_ACTIONS.PRIMARY_COLOR);
		primaryColor.iconName = "fas fa-square text-primary border-default border-radius";
		submenuItems.push(primaryColor);

		var logout = elements.navbar.createMenuItem('Logout', DEFAULT_NAVBAR_ACTIONS.LOGOUT);
		//logout.iconName = "fas fa-sign-out-alt";
		submenuItems.push(logout);
		menuItem.subMenuItems = submenuItems;
		menuItems.push(menuItem);
	}*/

	return menuItems;
}

/**
 * @protected
 * @param {JSEvent} event
 * @param menuItem
 *
 * @properties={typeid:24,uuid:"E7C399F1-FC48-4BB3-97DD-DE65CFC5537A"}
 * @override
 */
function onNavbarMenuItemClicked(event, menuItem) {
	//elements.sidenav.open = true
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
	default:
		break;
	}

}

/**
 * @protected
 * @param {String} txt
 *
 * @properties={typeid:24,uuid:"7EBBF148-0617-4D9F-A9AD-9CD22687F781"}
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
 * @properties={typeid:24,uuid:"9171AE48-D423-43FA-9FA4-1E4AF84989B8"}
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

/**
 * @properties={typeid:24,uuid:"97C7DCBE-0A6C-4D59-9F88-F729BA74B531"}
 */
function toggleMenu(){
	elements.sidenav.open = !elements.sidenav.open;
}
