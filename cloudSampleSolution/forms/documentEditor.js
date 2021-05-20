/**
 * @type {String}
 * @protected 
 *
 * @properties={typeid:35,uuid:"1CF681C0-1374-4FB1-A0F4-67E32352044C"}
 */
var docContent;

/**
 * @type {scopes.svyDocEditor.DocumentEditor}
 * @protected 
 *
 * @properties={typeid:35,uuid:"FA547B05-6669-4D63-B313-7EDB4DC6D4B4",variableType:-4}
 */
var docEditor

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
	if (!docContent) docContent = scopes.cloudSample.getDefaultDocumentTemplate();
	
	initEditor();
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"07F74E6A-AC7F-403F-B90A-CB37A8FB48DA"}
 */
function initEditor(){
	
	// getInstance
	docEditor = scopes.svyDocEditor.getInstance(elements.smartDoc);
	
	// POPULATE THE TAG FIELDS LIST
	var tagBuilder = docEditor.tagBuilder(datasources.db.example_data.orders.getDataSource());
	tagBuilder.addField('orderid');
	tagBuilder.addField('displayAddressHTML', 'Address');
	tagBuilder.addField('displayOrderDate', 'Order Date');
	tagBuilder.addField('displayShippedDate', 'Shipped Date');
	tagBuilder.addField('displayOrderTotal', 'Total');
	tagBuilder.addField('orders_to_customers.companyname', 'Customer.Company', false);
	tagBuilder.addField('orders_to_order_details.quantity', 'OrderDetails.Quantity');
	tagBuilder.addField('orders_to_order_details.unitprice', 'OrderDetails.Unit Price');
	tagBuilder.addField('orders_to_order_details.subtotal', 'OrderDetails.Subtotal');
	tagBuilder.addField('orders_to_order_details.order_details_to_products.productname', 'Product.Name', false);
	
	// BUILD THE TAG LIST
	tagBuilder.build();
	
	// populate the valuelist used in toolbar item
	application.setValueListItems("documentEditorTags", tagBuilder.getFields());
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
	var display = application.getValueListDisplayValue('documentEditorTags', value);
	elements.smartDoc.addInputAtCursor('#' + display);
}


/**
 * @protected 
 * @properties={typeid:24,uuid:"D0DE8B3C-9FAC-4F7C-B8AD-CD30AF290B1F"}
 */
function onActionPreview() {
	
	// preview document for an order record
	var orders = datasources.db.example_data.orders.getFoundSet();
	orders.loadAllRecords();
	
	forms.documentPreview.showContent(docContent, orders.getSelectedRecord())
	
}