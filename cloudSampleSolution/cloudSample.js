/**
 * @private 
 * @type {String}
 * @SuppressWarnings(unused)
 *
 * @properties={typeid:35,uuid:"AC0890DB-44B5-406C-98C2-10C91900F290"}
 */
var SAMPLE_APPLICATION_VERSION = "1.0.0";

/**
 * @protected 
 * @properties={typeid:35,uuid:"E58D06FB-AB22-4449-AD17-2388722974D7",variableType:-4}
 */
var DEFAULT_COLORS = {
	'MAIN-COLOR': '#4880FF',
	'SECONDARY-COLOR': '#FFF'
}


/**
 * @protected
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"BFCC6B60-B595-4A61-B90E-0D1D0853B7C7"}
 */
function onSolutionOpen(arg, queryParams) {
	
	plugins.ngclientutils.setViewportMetaForMobileAwareSites(plugins.ngclientutils.VIEWPORT_MOBILE_DENY_ZOOM);
	
	// autosave false
	databaseManager.setAutoSave(false);
	
	// disable null check validation exception
	databaseManager.nullColumnValidatorEnabled = false;

	// global config for grids
	configGrid();
	
	// global config for grid filters
	scopes.svyToolbarFilter.setPopupDefaultOperator(scopes.svyToolbarFilter.FILTER_TYPES.TOKEN, scopes.svyPopupFilter.OPERATOR.LIKE);

	// run onAfterUserCreate when a user is created from the svySecurityUX templates
	scopes.svySecurityUX.addAfterUserCreateListener(onAfterUserCreate);
	
	// apply custom style at the onOpen
	overrideSolutionStyle();
	
	// reference FA for load
	plugins.fontawesomeLib.load();

	// update sample data to last year
	scopes.cloudSampleData.updateOrderDates();
	
	// init navigation first-item
	scopes.global.showForm(forms.homeDashboard);
}

/**
 * configure grid globally, applying a common style & behavior
 * 
 * @private
 * @properties={typeid:24,uuid:"7AB92316-A5EC-4779-9CEC-CFFDB1DB3615"}
 */
function configGrid() {
	// configure grid globally, for common styles

	// set up grid options
	plugins.ngDataGrid.gridOptions = {
		headerHeight: 10,
		rowHeight: 52
	}
	
	// set up default column properties
	plugins.ngDataGrid.columnOptions = {
		menuTabs: ['generalMenuTab']
	}

	// set up tool panel options
	var toolPanelOptions = plugins.ngDataGrid.createToolPanelConfig();
	toolPanelOptions.suppressColumnFilter = true;
	toolPanelOptions.suppressColumnSelectAll = true;
	toolPanelOptions.suppressRowGroups = true;
	plugins.ngDataGrid.toolPanelConfig = toolPanelOptions;

	// set up grid icons
	var icons = plugins.ngDataGrid.createIconConfig();
	icons.iconSortAscending = "fa fa-long-arrow-up";
	icons.iconSortDescending = "fa fa-long-arrow-down";
	icons.iconFilter = "fa fa-filter";

	//	icons.iconCheckboxChecked = "fa fa-check-square-o";
	//	icons.iconCheckboxUnchecked = "fa fa-square-o";
	//	icons.iconCheckboxIndeterminate = "fa fa-minus-square-o";

	plugins.ngDataGrid.iconConfig = icons;
}

/**
 * @protected
 * @param userName
 * @param tenantName
 *
 * @properties={typeid:24,uuid:"662640D4-C396-4AA7-B10F-74248E813CD0"}
 */
function onAfterUserCreate(userName, tenantName) {
	var user = scopes.svySecurity.getUser(userName, tenantName);
	if (scopes.modelUsers.sendRegistrationEmail(user)) {
		plugins.webnotificationsToastr.success("An invitation email has been sent to the new user " + userName, "Invitation sent");
	}
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"96687A40-3405-44AC-A105-56468D89CA7A"}
 */
function overrideSolutionStyle() {
		
	var mainColor = DEFAULT_COLORS['MAIN-COLOR'];
	var secondaryColor = DEFAULT_COLORS['SECONDARY-COLOR'];
	

	var propMainColor = scopes.svyProperties.getUserPropertyValue("MAIN-COLOR", "style")
	if (propMainColor) {
		mainColor = propMainColor;
	}

	var propSecondaryColor = scopes.svyProperties.getUserPropertyValue("SECONDARY-COLOR", "style")
	if (propSecondaryColor) {
		secondaryColor = propSecondaryColor;
	}

	overrideStyleColors(mainColor, secondaryColor);
}

/**
 * @public
 * @param {String} mainColor
 * @param {String} secondaryColor
 *
 * @properties={typeid:24,uuid:"B36E5C6E-51A0-40D1-AF79-D47421D1B73C"}
 */
function overrideStyleColors(mainColor, secondaryColor) {
	var newColorStyle = {
		'MAIN-COLOR': mainColor,
		'SECONDARY-COLOR': secondaryColor
	}

	// set the preferred colors
	var mediaOriginal = solutionModel.getMedia('cloudSampleTemplateOriginal.less');
	var cssText = mediaOriginal.getAsString();

	// override css
	cssText = utils.stringReplaceTags(cssText, newColorStyle);
	var media = solutionModel.getMedia('cloudSampleTemplate.less');
	media.setAsString(cssText);

	application.overrideStyle('cloudSampleSolution.less', 'cloudSampleTemplate.less');
}


/**
 * @public 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"7F9DEE89-C970-48A5-AD99-68E665338F43"}
 */
function getDefaultDocumentTemplate() {
	var content = '<figure class="image image-style-align-left"><img src="https://docs.google.com/drawings/u/2/d/sqTY9PPHoJ_grubeHm0JXUQ/image?w=816&amp;h=209&amp;rev=12&amp;ac=1&amp;parent=1chvZaE9c3etg_-hovDYZxouocPvBTfLQuOma-vSK2xA"></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><h2><span class="mention svy-mention" data-mention="#customers.Company" data-real-value="orders_to_customers.companyname" contenteditable="true">#customers.Company</span>&nbsp;</h2><h4><span style="background-color:transparent;color:#31394d;">COMPANY ADDRESS</span></h4><h4><span class="mention svy-mention" data-mention="#Address" data-real-value="displayAddress" contenteditable="true">#Address</span>&nbsp;</h4><p>&nbsp;</p><h3><span style="background-color:transparent;color:#31394d;">Order &nbsp;<span class="mention svy-mention" data-mention="#orders.OrderId" data-real-value="orderid" contenteditable="true">#orders.OrderId</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></h3><p><i>Date</i>: <span class="mention svy-mention" data-mention="#Order Date" data-real-value="orderdate" contenteditable="true">#Order Date</span>&nbsp;</p><p><i>Status</i>: <span class="mention svy-mention" data-mention="#Status" data-real-value="orderStatus" contenteditable="true">#Status</span>&nbsp;</p><p><i>Total</i>: &nbsp;$ <span class="mention svy-mention" data-mention="#Total" data-real-value="order_total" contenteditable="true">#Total</span>&nbsp;</p><p><span style="background-color:transparent;color:#31394d;"><span class="mention svy-mention" data-mention="$startRepeater.OrderDetails" data-real-value="startRepeater-orders_to_order_details" contenteditable="true">$startRepeater.OrderDetails</span>&nbsp;</span></p><figure class="table"><table><thead><tr><th>ITEM</th><th>&nbsp; &nbsp; &nbsp;QTY</th><th>&nbsp; &nbsp; &nbsp;PRICE</th><th>&nbsp; &nbsp; &nbsp;SUBTOTAL</th></tr></thead><tbody><tr><td style="border-bottom:0.75pt solid #f3f3f3;border-left:0.75pt solid #f3f3f3;border-right:0.75pt solid #f3f3f3;border-top:0.75pt solid #f3f3f3;padding:2pt;"><p style="margin-left:6pt;"><span class="mention svy-mention" data-mention="#products.Product" data-real-value="orders_to_order_details.order_details_to_products.productname" contenteditable="true">#products.Product</span>&nbsp;</p></td><td style="border-bottom:0.75pt solid #f3f3f3;border-left:0.75pt solid #f3f3f3;border-right:0.75pt solid #f3f3f3;border-top:0.75pt solid #f3f3f3;padding:2pt;"><p style="text-align:right;"><span class="mention svy-mention" data-mention="#order_details.Quantity" data-real-value="orders_to_order_details.quantity" contenteditable="true">#order_details.Quantity</span>&nbsp;</p></td><td style="border-bottom:0.75pt solid #f3f3f3;border-left:0.75pt solid #f3f3f3;border-right:0.75pt solid #f3f3f3;border-top:0.75pt solid #f3f3f3;padding:2pt;"><p style="text-align:right;"><span class="mention svy-mention" data-mention="#order_details.Price" data-real-value="orders_to_order_details.price" contenteditable="true">#order_details.Price</span>&nbsp;</p></td><td style="border-bottom:0.75pt solid #f3f3f3;border-left:0.75pt solid #f3f3f3;border-right:0.75pt solid #f3f3f3;border-top:0.75pt solid #f3f3f3;padding:2pt;"><p style="text-align:right;">$ <span class="mention svy-mention" data-mention="#order_details.Subtotal" data-real-value="orders_to_order_details.subtotal" contenteditable="true">#order_details.Subtotal</span>&nbsp;</p></td></tr></tbody></table></figure><p><span class="mention svy-mention" data-mention="$endRepeater" data-real-value="" contenteditable="true">$endRepeater</span>&nbsp;</p>'
	return content;
}
