/**
 * @private
 * @properties={typeid:35,uuid:"9E67DAED-FBB8-4960-B992-9D2B90540D1B",variableType:-4}
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
 * @properties={typeid:24,uuid:"9CAF8A64-6D20-4E81-B039-EBF0BD11C5DC"}
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
 * @properties={typeid:24,uuid:"B8B3ACF3-A21C-4845-9C49-F0B2A83061B8"}
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
 * @properties={typeid:24,uuid:"A5DCA19D-3138-47C9-90E5-37942DF41AE4"}
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
 * @private
 * @properties={typeid:24,uuid:"1ABB8D17-DF1B-4B40-BA94-8B88208A6C96"}
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
	
}
/**
 * @param {CustomType<svy-fullcalendar.EventType>} eventObject
 * @param {number} delta
 * @param {JSEvent} event
 * @param {CustomType<svy-fullcalendar.ViewType>} view
 *
 * @private
 *
 * @properties={typeid:24,uuid:"17CA9771-7569-4F2A-ABFE-5B34917DB776"}
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
 * @properties={typeid:24,uuid:"73DB24DF-2955-4AFE-91AA-A9BD8F76CAFC"}
 */
function onActionAddResource(event) {
	var popup = application.createWindow('newResource', JSWindow.MODAL_DIALOG)
	popup.title = 'New Resource'
	popup.show(forms.newResourcePopup)
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7BF3F956-28DE-4117-AC44-2E6601738572"}
 */
function onActionAddEvent(event) {
	var popup = application.createWindow('newEvent', JSWindow.MODAL_DIALOG)
	popup.title = 'New Event'
	popup.show(forms.newEventPopup)	
}

/**
 * @param resource
 * 
 * @public
 *
 * @properties={typeid:24,uuid:"0960DB06-76B2-47ED-9FB9-604DCD03F794"}
 */
function addResource(resource){
	elements.fullcalendar.addResource(resource)
} 


/**
 * @param event
 * 
 * @public
 *
 * @properties={typeid:24,uuid:"CC582085-FE19-49A7-8EC7-6491B4093C12"}
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
 * @properties={typeid:24,uuid:"E9EEC5E4-F9C3-4492-903A-938B70192828"}
 */
function onDayClick(date, event, view, resource) {
	var data = {
		id: application.getUUID().toString(),
		resourceId: parseInt(resource.id.toString()),
		title: 'Order '+ foundset.orderid,
		start: date,
		end: scopes.svyDateUtils.addHours(date, 1),
		allday: false
	}
	
	elements.fullcalendar.renderEvent(data)
}
/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @private
 * @override
 *
 * @properties={typeid:24,uuid:"CCD550CE-5FDA-4AE8-B72E-BCA66347BA06"}
 */
function onShow(firstShow, event) {
	//Show popup to inform user of functionality
	if(firstShow){
		plugins.scheduler.addJob('ShowInfoDialog',new Date(new Date().setSeconds(new Date().getSeconds()+1)),test,0,0)
	}
}


/**
 * @properties={typeid:24,uuid:"8541F1E8-BD8E-4333-A238-1A85E2FDBE9F"}
 */
function test(){
	plugins.dialogs.showInfoDialog('Add event', 'Click in the calendar to add the currently selected order to that timeslot')
}