/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98FCE982-25A0-444E-8DA2-006574CE7199"}
 */
var title;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C828FEB-AAAB-4CAB-BDC4-0FA7D07351EE",variableType:8}
 */
var resource = null

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D9F77400-8AFE-4282-8B84-8B794DD8ADBD",variableType:93}
 */
var startDate = new Date()

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4C3E962C-9173-45F2-9859-33306D7630F2",variableType:93}
 */
var endDate = new Date()

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC214D82-F27B-4CD4-9BDC-BA769AD5DC89",variableType:4}
 */
var allDay

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D3CC7D98-2222-41BF-B80E-D527B6F5C00A"}
 */
function onActionAdd(event) {
	var eventsFS = datasources.mem.fullcalendar_events.getFoundSet()
	eventsFS.newRecord()
	eventsFS.title = title
	eventsFS.resourceid = resource
	eventsFS.start = startDate
	eventsFS.end = endDate
	eventsFS.allday = allDay ? 1 : 0
	databaseManager.saveData(eventsFS)
	
	forms.fullcalendar.addEvent({id: eventsFS.eventid, title:eventsFS.title, resourceId: eventsFS.resourceid, start:eventsFS.start, end: eventsFS.end, allDay: eventsFS.allday ? true : false})
	
	title = null
	resource = null
	startDate = new Date()
	endDate = new Date()
	allDay = null
	
	application.getActiveWindow().destroy()
}
