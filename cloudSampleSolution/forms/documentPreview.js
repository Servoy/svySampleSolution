/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"42EEAEE5-CB79-4160-92F7-4694CEB66507"}
 */
var displayContent = '';

/**
 * Show preview
 * 
 * @public 
 * @param {String} templateName
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"3CD35CD1-FF2B-452D-826F-8E08950B6C5C"}
 * @AllowToRunInFind
 */
function show(templateName, record){
	
	// LOAD TEMPLATE
	var docContent = scopes.svyProperties.getUserPropertyValue(templateName, "smart-document-type");
	if (!docContent) docContent = scopes.cloudSample.getDefaultDocumentTemplate();
	
	// MERGE
	displayContent = scopes.svyDocEditor_2.mergeTags(docContent, record);
	
	// SHOW IN WINDOW
	var win = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	win.setSize(1000,800);
	win.show(this);
}

/**
 * @public 
 * @param {String} content
 * @param {JSRecord} record
 *
 * @properties={typeid:24,uuid:"4EF2CBD7-38E5-4F8F-93E5-AE80DDF4B8FE"}
 */
function showContent(content, record){
	
	// MERGE
	displayContent = scopes.svyDocEditor_2.mergeTags(content, record);
	
	// SHOW IN WINDOW
	var win = application.createWindow(controller.getName(), JSWindow.MODAL_DIALOG);
	win.setSize(1000,800);
	win.show(this);
}

/**
 * @private 
 * @properties={typeid:24,uuid:"C6B71CAF-4E1D-4DD5-BF93-8F8D17E9AB8E"}
 */
function close(){
	var win = application.getWindow(controller.getName());
	if(win){
		win.destroy();
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D25D364C-8FFA-4D9C-802E-A4F22B169A39"}
 */
function onShow(firstShow, event) {
	elements.editor.readOnly = true;
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2CF915F6-5065-432E-B073-B2A9476109CA"}
 */
function onActionGeneratePdf(event, dataTarget) {
	var docExporter = scopes.svyDocEditor_2.getExporter();
	
	try {
		var bytes = docExporter.exportToPDF();
	} catch (e) {
		plugins.dialogs.showWarningDialog("Export error", "API Key required for export");
	}

	var pdf = plugins.file.createFile('export.pdf');
	plugins.file.writeFile(pdf,bytes);
	plugins.file.openFile(pdf);
}

