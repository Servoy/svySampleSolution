/**
 * @return {Array<CustomType<servoyextra-sidenav.MenuItem>>}
 * @protected
 * @override
 * @properties={typeid:24,uuid:"F8A19012-5907-4828-94A7-365D70971DA9"}
 */
function loadMenuItems() {
	
	var menuItems = [];
	/** @type {CustomType<servoyextra-sidenav.MenuItem>} */
	var menuItem;
	
	// User
	menuItem = new Object();
	menuItem.id = "User";
	menuItem.text = security.getUserName().toUpperCase();
	menuItem.iconStyleClass = "fas fa-user";
	menuItem.styleClass = "text-primary";
	menuItem.enabled = false;
	menuItems.push(menuItem);

	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);

	// HOME
	menuItem = new Object();
	menuItem.id = "homeDashboardMobile";
	menuItem.text = "DASHBOARD";
	menuItem.iconStyleClass = "fa fa-th-large";
	menuItems.push(menuItem);

	// CUSTOMERS
	menuItem = new Object();
	//menuItem.id = "customersViewMobile";
	menuItem.id = "customersViewMobileDataGrid";
	menuItem.text = "CUSTOMERS";
	menuItem.iconStyleClass = "icon-contacts";
	menuItems.push(menuItem);

	// ORDERS
	menuItem = new Object();
	menuItem.id = "ordersViewMobileDataGrid";
	menuItem.text = "ORDERS";
	menuItem.iconStyleClass = "icon-box";
	menuItems.push(menuItem);

	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);
	
	// SEARCH
	menuItem = new Object();
	menuItem.id = "SEARCH";
	menuItem.text = "SEARCH";
	menuItem.iconStyleClass = "fa fa-search";
	menuItems.push(menuItem);
	
	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);

	// TUTORIAL
	menuItem = new Object();
	menuItem.id = "TUTORIAL";
	menuItem.text = "TUTORIAL";
	menuItem.styleClass = "font-weight-bold";
	menuItem.iconStyleClass = "fas fa-graduation-cap";
	menuItems.push(menuItem);

	// DIVIDER
	menuItem = new Object();
	menuItem.isDivider = true;
	menuItems.push(menuItem);

	// PRIMARY COLORS
	menuItem = new Object();
	menuItem.id = "PRIMARYCOLORS";
	menuItem.text = "PRIMARY COLORS";
	menuItem.iconStyleClass = "fas fa-square text-primary border-default border-radius";
	menuItems.push(menuItem);

	// LOGOUT
	menuItems.concat(_super.loadMenuItems());

	// return the menu items
	return menuItems;
}

/**
 * @protected
 * @param menuItemId
 * @param event
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E1AB7615-CB14-4E5E-ADC0-60F282A0F27F"}
 * @override
 * @AllowToRunInFind
 */
function onMenuItemSelected(menuItemId, event) {

	if (menuItemId === "TUTORIAL") {
		scopes.tutorial.showTutorial()
	} else if (menuItemId === "PRIMARYCOLORS") {
		
		// show the color picker
		forms.colorPickerMobile.showColorPicker();
		return false;
	} else if(menuItemId === "SEARCH"){
		
		// create a lookup object
		var lookup = scopes.svyLookup.createLookup(datasources.mem.search_results.getDataSource());
		lookup.setLookupForm(forms.searchViewLookupMobile);
		lookup.addField("").setSearchable(false).setStyleClass("text-center fa-2x").setStyleClassDataprovider("iconStyleClass").setWidth("50");
		lookup.addField("text_value").setTitleText("RESULT");

		// show the lookup as popup
		var popupS = lookup.createPopUp(onSearchLookup, "");
		popupS.showBackdrop(true);
		popupS.y(85);
		popupS.x(1);
		popupS.width(application.getWindow().getWidth()-1);
		popupS.height(application.getWindow().getHeight()-85);
		popupS.show();
		
		return true;
	}

	return true;
}

/**
 * @protected
 * @param {Array<JSRecord<mem:search_results>>} records
 * @param values
 * @param lookup
 *
 * @properties={typeid:24,uuid:"6C264567-1373-4125-B0C5-C0DF5B5F684F"}
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