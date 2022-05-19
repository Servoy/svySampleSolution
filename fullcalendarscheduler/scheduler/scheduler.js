angular.module('fullcalendarschedulerScheduler',['servoy'])
.factory("fullcalendarschedulerScheduler",function($services) 
{
	var scope = $services.getServiceScope('fullcalendarschedulerScheduler');
	return {
		load: function() {
		}
	}
})
.run(function($rootScope,$services)
{
	var scope = $services.getServiceScope('fullcalendarschedulerScheduler')
	scope.$watch('model', function(newvalue,oldvalue) {
	// handle state changes
		console.log(newvalue)
}, true);
})