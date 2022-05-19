/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B107F722-60FE-4994-AF36-B96B5E97FFC6"}
 */
var resourceName;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F67AFF2-8634-474E-A607-1F219F37F3AA",variableType:8}
 */
var selectedParent
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"18800440-3A3A-44BF-8729-2434796A6B7B"}
 */
function onActionAdd(event) {
	var resourcesFS = datasources.mem.fullcalendar_resources.getFoundSet()
	resourcesFS.newRecord()
	resourcesFS.title = resourceName
	if(selectedParent) resourcesFS.parentid = selectedParent
	databaseManager.saveData(resourcesFS)
	
	forms.fullcalendar.addResource({id:resourcesFS.resourceid, title:resourcesFS.title, parentId: resourcesFS.parentid})
	
	resourceName = null
	selectedParent = null
	application.getActiveWindow().destroy()
}
