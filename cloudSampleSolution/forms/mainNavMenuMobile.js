/**
 * @properties={typeid:24,uuid:"135492D0-1A92-46B1-AFBC-995B0C8A37CF"}
 * @override
 */
function loadMenuItems() {
	var menuItems = [];
	var menuItem;
	var menuSubItems = [];
	var menuSubItem;
	
	// User
	menuItem = new Object();
	menuItem.id = "User";
	menuItem.text = security.getUserName().toUpperCase();
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
	
	// DOWNLOAD IDE
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
	
	// PRIMARY COLORS
	menuItem = new Object();
	menuItem.id = "PRIMARYCOLORS";
	menuItem.text = "PRIMARY COLORS"
	menuItem.iconStyleClass = "fas fa-square text-primary border-default border-radius";
	menuItems.push(menuItem);

	// LOGOUT
	menuItems.push(_super.loadMenuItems()[0]);
	
    // return the menu items
	return menuItems;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param menuItemId
 * @param event
 *
 * @properties={typeid:24,uuid:"69A09279-3408-41F9-8D6D-E65BC2541794"}
 * @override
 */
function onMenuItemSelected(menuItemId,event) {
	
	if (menuItemId === "TUTORIAL") {
		scopes.tutorial.showTutorial()
	}
	
	else if(menuItemId === "DOWNLOADIDE"){
		application.showURL("https://www.servoy.com/download/", "_blank");
	}
	
	else if(menuItemId === "PRIMARYCOLORS"){
		var popup = plugins.window.createFormPopup(forms.colorPicker);
		popup.x(2.5);
		popup.y(102.5);
		popup.show();
		return false;
	}
	
	return true;
}