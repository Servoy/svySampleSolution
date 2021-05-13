/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CF681C0-1374-4FB1-A0F4-67E32352044C"}
 */
var docContent;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"DC863433-5F3C-4782-8970-114D685EDA8A"}
 */
function onLoad(event) {
	docContent = scopes.svyProperties.getUserPropertyValue("doc-orders", "smart-document-type");
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"663DC6F0-936E-4326-B713-99FA0AC197DB"}
 * @override
 */
function onShow(firstShow,event) {
	_super.onShow(firstShow,event);
	
	if (firstShow) initEditor();
}

/**
 * @properties={typeid:24,uuid:"07F74E6A-AC7F-403F-B90A-CB37A8FB48DA"}
 */
function initEditor(){
	
	// POPULATE THE TAG FIELDS LIST
	var fields = {
		DATASOURCE: datasources.db.example_data.orders.getDataSource(),
		FIELDS: [
			{DB_TITLE: 'orders', FIELD: 'orderid'},
			{DB_TITLE: 'orders', FIELD: 'displayAddressHTML'},
			{DB_TITLE: 'orders', FIELD: 'displayOrderDate'},
			{DB_TITLE: 'orders', FIELD: 'displayShippedDate'},
			{DB_TITLE: 'orders', FIELD: 'displayOrderTotal'},
			{DB_TITLE: 'customers', FIELD: 'companyname', RELATION: 'orders_to_customers', ONE_TO_ONE: true },
			{DB_TITLE: 'order_details', FIELD: 'quantity', RELATION: 'orders_to_order_details', ONE_TO_ONE: false },
			{DB_TITLE: 'order_details', FIELD: 'unitprice', RELATION: 'orders_to_order_details', ONE_TO_ONE: false },
			{DB_TITLE: 'order_details', FIELD: 'subtotal', RELATION: 'orders_to_order_details', ONE_TO_ONE: false },
			{DB_TITLE: 'products', FIELD: 'productname', RELATION: 'orders_to_order_details.order_details_to_products', ONE_TO_ONE: false }
		],
		ATTRIBUTES: ['RELATION']
	}
	
	scopes.svyDocTagValuelists.generateFieldTags(fields);
	
	var toolbarConfig = {
		"toolbar" : {
			"items" : 						
			 [
			 	{ "type": "pageNavigation"},
			 	{ "type": "previousPage"},
				{ "type": "nextPage"},
			 	{ "type": "|"},
				{ "type": "heading" },
			 	{ "type": "fontfamily" }, 
			 	{ "type": "fontsize" }, 
        		{ "type": "|" },
        		{ "type": "bold" }, 
        		{ "type": "italic" }, 
        		{ "type": "underline" }, 
        		{ "type": "strikethrough" },
				{ "type": "superscript"},
        		{ "type": "subscript" },
        		{ "type": "|" },
        		{ "type": "imageUpload" },
        		{ "type": "link" },
        		{ "type": "|" }, 
        		{ "type": "FontColor" },
        		{ "type": "FontBackgroundColor" },
        		{ "type": "|" }, 
        		{ "type": "numberedList" }, 
        		{ "type": "bulletedList" }, 
        		{ "type": "|" }, 
        		{ "type": "alignment" },
        		{ "type": "insertTable" },
        		{ "type": "|" }, 
        		{ "type": "HorizontalLine" },
        		{ "type": "pageBreak" },
        		{ "type": "|" }, 
        		{ "type": "undo" },
        		{ "type": "redo" },
//        		{ "type": "|" },
//				{ "type": "servoyToolbarItem", "valuelist": "svyDoc_fieldTags", "withText": "true", "label": "Insert Tag" },
				{ "type": "|" }
    		]
		}
	}
	elements.smartDoc.create(toolbarConfig)
	
//	var items = [
//		{displayName:'Customer', dataprovider:'orders_to_customers.companyname'},
//		{displayName:'Sales Rep', dataprovider:'orders_to_employees.lastname'}
//	];
//	elements.smartDoc.placeholders = items;
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"8EA79F28-0D1F-42E0-8720-ABCF980A93F3"}
 * @override
 */
function save() {
	scopes.svyProperties.setUserProperty("doc-orders","smart-document-type", docContent);
}


/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"73F0DFEF-81B6-48E0-ADA0-784AF5BCDEDC"}
 */
function onDataChangeDocs(oldValue, newValue, event) {
	return true
}

/**
 * @param {string} errorMessage
 * @param {string} errorStack
 * @protected
 *
 * @properties={typeid:24,uuid:"7D204985-8E0B-4893-A470-D32456976061"}
 */
function onError(errorMessage, errorStack) {
	application.output(errorMessage, LOGGINGLEVEL.ERROR);
}

/**
 * @protected 
 * @param event
 * @param id
 * @param value
 *
 * @properties={typeid:24,uuid:"45F208E3-879D-48DA-87FF-B0255DAF169C"}
 */
function onClickCustomToolbar(event, id, value) {
	var display = application.getValueListDisplayValue('svyDoc_fieldTags',value);
	elements.smartDoc.addInputAtCursor('#' + display);
}


/**
 * @protected 
 * @properties={typeid:24,uuid:"D0DE8B3C-9FAC-4F7C-B8AD-CD30AF290B1F"}
 */
function onActionPreview() {
	
	
	// TODO need to save the template !?
	// preview document for an order record
	var orders = datasources.db.example_data.orders.getFoundSet();
	orders.loadAllRecords();
	
	forms.documentPreview.showContent(docContent, orders.getSelectedRecord())
	
}