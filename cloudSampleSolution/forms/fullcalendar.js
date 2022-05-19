/**
 * @properties={typeid:35,uuid:"C9B63415-7503-4558-8486-731BC22070A4",variableType:-4}
 */
var CALENDAR_VIEW_TYPE = {
	MONTH: 'month',
	BASICWEEK: 'basicWeek',
	BASICDAY: 'basicDay',
	AGENDAWEEK: 'agendaWeek',
	AGENDADAY: 'agendaDay',
	TIMELINE_DAY: 'timelineDay',
	TIMELINE_WEEK: 'timelineWeek',
	TIMELINE_MONTH: 'timelineMonth',
	TIMELINE_YEAR: 'timelineYear',
	LIST_DAY: 'listDay',
	LIST_WEEK: 'listWeek',
	LIST_MONTH: 'listMonth',
	LIST_YEAR: 'listYear'
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"4259E926-315E-44DE-A683-486235EBE70A"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	
	if(foundset.find()){
		foundset.allday = 1;
		foundset.search();
	}
	
	//Fill the in memory tables
	initData()	
	
	// init the calendar
	/** @type {CustomType<svy-fullcalendar.FullCalendarOptions>} */
	var options = {
		allDayText: '',
		lang: 'en',
		businessHours: {
			start: '09:00:00',
			end: '17:00:00',
			dow: [1, 2, 3, 4, 5]
		},
		defaultView: CALENDAR_VIEW_TYPE.TIMELINE_DAY,
		editable: true,
		eventConstraint: 'businessHours',
		firstDay: 1,
		handleWindowResize: true,
		header: {
			left: 'timelineDay,timelineWeek',
			center: 'title',
			right: 'today prev,next'
		},
		minTime: "07:00:00",
		maxTime: "20:00:00",
		nowIndicator: true,
		timeFormat: {
			// for agendaWeek and agendaDay
			agenda: 'h:mm{- h:mm}',
			// for all other views
			'': 'h(:mm)t'
		},
		columnFormat: {
			month: 'ddd',
			week: 'ddd M/d',
			day: 'dddd M/d'
		},
		titleFormat: {
			month: 'MMMM yyyy',
			week: "MMMM yyyy}",
			day: 'dddd, MMM d, yyyy'
		},
		resourceAreaWidth: '200px',
		scrollTime: "8:00:00",
		selectable: true,
		selectConstraint: 'businessHours',
		weekends: true,
		events: getEvents(),
		resources: getResources()
	};

	elements.fullcalendar.fullCalendar(options);
	elements.fullcalendar.render()
}

/**
 * Get all active resources
 *
 * @return {Array<CustomType<svy-fullcalendar.ResourceType>>}
 *
 * @properties={typeid:24,uuid:"FBAA5661-34FA-47EC-9456-293A11CE9196"}
 * @AllowToRunInFind
 * @private
 */
function getResources() {
	/** @type {Array<CustomType<svy-fullcalendar.ResourceType>>} */
	var resources = []
	
	var resourcesFS = datasources.mem.fullcalendar_resources.getFoundSet()
	resourcesFS.loadAllRecords()
	resourcesFS.forEach(function(resource){
			/** @type {CustomType<svy-fullcalendar.ResourceType>} */
			var data = {
				id: resource.resourceid,
				title: resource.title,
				parentId: resource.parentid
			}
			resources.push(data)
		
	})

	return resources;
}

/**
 * Get all active resources
 *
 * @return {Array<CustomType<svy-fullcalendar.EventType>>}
 *
 * @AllowToRunInFind
 * @private
 * 
 * @properties={typeid:24,uuid:"9301CC65-C717-4FBE-BBEE-F6146F5B0BB0"}
 */
function getEvents(){
	/** @type {Array<CustomType<svy-fullcalendar.EventType>>} */
	var events = []
	
	var eventsFS = datasources.mem.fullcalendar_events.getFoundSet()
	eventsFS.loadAllRecords()
	eventsFS.forEach(function(event){
		
		if(!event.planned){
			/** @type {CustomType<svy-fullcalendar.EventType>} */
			var data = {
				id: event.eventid,
				resourceId: event.resourceid,
				title: event.title,
				start: event.start,
				end: event.end,
				allDay: event.allday ? true : false
			}
			events.push(data)
		}
		
	
	})

	return events;
}

/**
 * @properties={typeid:24,uuid:"F0764A1F-CF00-4BEC-809B-65B75DE9ABE5"}
 */
function initData(){
	var resources = [{
		id: 1,
		parentid: null,
		title: 'Sales'
	}, {
		id: 2,
		parentid: 1,
		title: 'Caroline'
	}, {
		id: 3,
		parentid: 1,
		title: 'Mike'
	}, {
		id: 4,
		parentid: null,
		title: 'Finance'
	}, {
		id: 5,
		parentid: 4,
		title: 'Paul'
	}, {
		id: 6,
		parentid: null,
		title: 'Marketing'
	}, {
		id: 7,
		parentid: 6,
		title: 'Sophie'
	}, {
		id: 8,
		parentid: 6,
		title: 'John'
	}]
	
	var resourceFS = datasources.mem.fullcalendar_resources.getFoundSet()	
	resources.forEach(function(resource){
		resourceFS.newRecord()
		resourceFS.resourceid = resource.id
		resourceFS.title = resource.title
		resourceFS.parentid = resource.parentid
	})
	
	databaseManager.saveData(resourceFS)
	
//	var events = [
//		{
//			resourceid: 1,
//			title: 'Team Meeting',
//			start: new Date(new Date().setHours(10,0,0,0)),
//			end: new Date(new Date().setHours(11,0,0,0)),
//			allday: false,
//			planned: true
//		},{
//			resourceid: 2,
//			title: 'Vacation',
//			start: new Date(),
//			end: null,
//			allday: true,
//			planned: true
//			
//		},{
//			resourceid: 3,
//			title: 'Lunch',
//			start: new Date(new Date().setHours(12,0,0,0)),
//			end: new Date(new Date().setHours(13,0,0,0)),
//			allday: false,
//			planned: false
//		},{
//			resourceid: 5,
//			title: 'Timesheets',
//			start: new Date(new Date().setHours(16,0,0,0)),
//			end: new Date(new Date().setHours(17,0,0,0)),
//			allday: false,
//			planned: false
//		}
//	]
//	
//	
//	var eventFS = datasources.mem.fullcalendar_events.getFoundSet()	
//	events.forEach(function(event){
//		eventFS.newRecord()
//		eventFS.eventid = event.id
//		eventFS.resourceid = event.resourceid
//		eventFS.title = event.title
//		eventFS.start = event.start
//		eventFS.end = event.end
//		eventFS.allday = event.allday
//		eventFS.planned = event.planned
//	})
//	
//	databaseManager.saveData(eventFS)	

}
/**
 * @param {CustomType<svy-fullcalendar.EventType>} eventObject
 * @param {number} delta
 * @param {JSEvent} event
 * @param {CustomType<svy-fullcalendar.ViewType>} view
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B530F5F2-B3C5-4D00-91A3-236B2DEC04C9"}
 */
function onEventDrop(eventObject, delta, event, view) {

	var eventsFS = datasources.mem.fullcalendar_events.getFoundSet()
	eventsFS.loadAllRecords()
	eventsFS.selectRecord(eventObject.id)
	
	eventsFS.resourceid = eventObject.resourceIds[0]
	eventsFS.title = eventObject.title
	eventsFS.start = eventObject.start
	eventsFS.end = eventObject.end
	eventsFS.allday = eventObject.allDay
	
	databaseManager.saveData(eventsFS)
}
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D6543DB3-EB2E-47A3-A1F6-858923DA8195"}
 */
function onActionAddResource(event) {
	var popup = application.createWindow('newResource', JSWindow.MODAL_DIALOG)
	popup.show(forms.newResourcePopup)
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1E46589C-E390-4F8F-86C9-10C6216EF551"}
 */
function onActionAddEvent(event) {
	var popup = application.createWindow('newEvent', JSWindow.MODAL_DIALOG)
	popup.show(forms.newEventPopup)	
}

/**
 * @param resource
 * 
 * @public
 *
 * @properties={typeid:24,uuid:"BAC3E45A-21C6-48EE-932E-E1697BC365A6"}
 */
function addResource(resource){
	elements.fullcalendar.addResource(resource)
} 


/**
 * @param event
 * 
 * @public
 *
 * @properties={typeid:24,uuid:"3CFCAB1C-0EE0-4E4A-B583-9786B8B25345"}
 */
function addEvent(event){
	elements.fullcalendar.renderEvent(event)
}
/**
 * @param {Date} date
 * @param {JSEvent} event
 * @param {CustomType<svy-fullcalendar.ViewType>} view
 * @param {CustomType<svy-fullcalendar.ResourceType>} [resource]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E6251587-BAA3-4E49-9B67-03995E727F98"}
 */
function onDayClick(date, event, view, resource) {
	var answer = plugins.dialogs.showInputDialog('New event', 'Enter a name for the event')
	
	var data = {
		id: application.getUUID().toString(),
		resourceid: resource.id,
		title: answer,
		start: date,
		end: scopes.svyDateUtils.addHours(date, 1),
		allday: false
	}
	
	elements.fullcalendar.renderEvent(data)
}
