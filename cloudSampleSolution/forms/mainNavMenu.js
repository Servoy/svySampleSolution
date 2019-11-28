/**
 * @properties={typeid:35,uuid:"1367611B-6B80-429C-BBC1-F3AAD61475C3",variableType:-4}
 */
var pageIcons = {
	productsTable: 				'icon-box',
	productsVerticalSplit: 		'icon-layers',
	productsHorizontalSplit: 	'icon-tape',
	suppliersTable: 			'icon-apartment',
	suppliersVerticalSplit:		'icon-city',
	suppliersHorizontalSplit:	'icon-factory',
	customersTable: 			'icon-users',
	customersVerticalSplit: 	'icon-group-work',
	customersHorizontalSplit: 	'icon-man-woman',
    homeDashboard:              'icon-dashboard'    
}

/**
 * @private 
 * @properties={typeid:35,uuid:"CAE104C4-A142-4A6D-AA79-C960AAA819AE",variableType:-4}
 */
var NAVBAR_ACTIONS = {
	DOWNLOAD_IDE: "download-ide",
	PRIMARY_COLOR: "primary-color"
}


/**
 * @return {Array<CustomType<servoyextra-sidenav.MenuItem>>}
 * @protected
 * @override
 * @properties={typeid:24,uuid:"C7E93724-084A-4757-B313-3CD3899C1572"}
 */
function loadMenuItems() {
	
	var menuSubItem;	
	var menuSubItems = [];
	var menuItems = [];

	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	var menuItem;
	
	menuItem = new Object();
	menuItem.id = "homeDashboard";
	menuItem.text = "DASHBOARD"
	menuItem.iconStyleClass = "fa fa-th-large";
	menuItems.push(menuItem);
	
	var wizardMenuItems;
	var tenantName = scopes.svySecurity.getTenant().getName();
	if (tenantName){
		wizardMenuItems = scopes.modelWizard.getWizardMenuItems(tenantName);
	}
	
	if (wizardMenuItems) {
		for(var i = 1; i <= wizardMenuItems.getSize(); i++){
			var rec = wizardMenuItems.getRecord(i);
			
			/** @type {CustomType<servoyextra-sidenav.MenuItem} */
			menuItem = new Object();
			
			//datasource + page_type forms the formName that belongs to that combination
			menuItem.id = rec.datasource.toLowerCase() + rec.page_type;
			menuItem.text = rec.name;
			menuItem.iconStyleClass = pageIcons[menuItem.id];
			menuItems.push(menuItem);
		}
	} else {
		
		menuItem = new Object();
		menuItem.id = "customersTableView";
		menuItem.text = "CUSTOMERS"
		menuItem.iconStyleClass = "fas icon-contacts";
		menuItems.push(menuItem);
		
		menuItem = new Object();
		menuItem.id = "ordersTableView";
		menuItem.text = "ORDERS"
		menuItem.iconStyleClass = "icon-box";
		menuItems.push(menuItem);
	}
	
	/** @type {CustomType<servoyextra-sidenav.MenuItem} */
	menuItem = new Object();
	menuItem.id = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT;
	menuItem.text = "SECURITY"
	menuItem.iconStyleClass = "fa fa-shield";

	/** @type {CustomType<servoyextra-sidenav.MenuItem} */
	menuSubItem = new Object();
	menuSubItem.id = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT_ROLES;
	menuSubItem.text = "ROLES"
	menuSubItem.iconStyleClass = "fa fa-user-shield";
	menuSubItems.push(menuSubItem);

	/** @type {CustomType<servoyextra-sidenav.MenuItem} */
	menuSubItem = new Object();
	menuSubItem.id = scopes.svySecurityUX.SVY_SECURITY_UX.TENANT_USERS;
	menuSubItem.text = "USERS"
	menuSubItem.iconStyleClass = "fa fa-user-shield";
	menuSubItems.push(menuSubItem);

	menuItem.menuItems = menuSubItems;

	menuItems.push(menuItem);

	return menuItems;
}

/**
 *
 * @public
 * @param logoBytes
 *
 * @properties={typeid:24,uuid:"CBC26BA1-27A0-4FB5-BA49-F16EB4ADF1A1"}
 */
function setLogo(logoBytes) {
	var newMediaName = "customLogo.png";
	solutionModel.newMedia(newMediaName, logoBytes);
	elements.navbar.brandLogo = newMediaName;
}


/**
 * @properties={typeid:24,uuid:"B1558097-985D-4E15-A3CB-DC956FE2CA6C"}
 * @override
 */
function loadNavbarItems() {
	var menuItems = [];
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
	}

	return menuItems;
}

/**
 * @param {JSEvent} event
 * @param menuItem
 *
 * @properties={typeid:24,uuid:"05D20151-9074-408E-9565-00608B51F491"}
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
	case DEFAULT_NAVBAR_ACTIONS.LOGOUT:
		scopes.svySecurity.logout();
		break;
	default:
		break;
	}

}
