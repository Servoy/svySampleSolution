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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"36ECC346-1326-4F58-B2A7-910CE7E9C21E"}
 */
var startTime 

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D9F77400-8AFE-4282-8B84-8B794DD8ADBD",variableType:93}
 */
var startDate = new Date()

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C00317F3-F705-4203-B7F2-50E026E59336"}
 */
var endTime

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
	eventsFS.start = new Date(startDate.setHours(startTime.split(':')[0], startTime.split(':')[1]))
	eventsFS.end = new Date(endDate.setHours(endTime.split(':')[0], endTime.split(':')[1]))	
	eventsFS.allday = allDay ? 1 : 0
	databaseManager.saveData(eventsFS)
	
	forms.fullcalendar.addEvent({id: eventsFS.eventid, title:eventsFS.title, resourceId: eventsFS.resourceid, start:eventsFS.start, end: eventsFS.end, allDay: eventsFS.allday ? true : false})
	
	title = null
	resource = null
	startTime = null
	startDate = null
	endTime = null
	endDate = null
	allDay = null
	
	application.getActiveWindow().destroy()
}
