{
	"name": "fullcalendarscheduler-scheduler",
	"displayName": "scheduler",
	"version": 1,
 	"definition": "fullcalendarscheduler/scheduler/scheduler.js",
 	"ng2Config": {
       "packageName": "@servoy/fullcalendarscheduler",
       "serviceName": "schedulerService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [{
			"name": "scheduler.css",
			"version": "1.9.2",
			"url": "fullcalendarscheduler/scheduler/lib/scheduler.min.css",
			"mimetype": "text/css"
		},{
			"name": "scheduler.js",
			"version": "1.9.2",
			"url": "fullcalendarscheduler/scheduler/lib/scheduler.min.js",
			"mimetype": "text/javascript"
		}],
	"model":
	{
    	"text": "string"
 	},
 	"api":
 	{
	   	"load": 
	   	{
	    	"parameters":
	    	[
			]
		}
 	}
}