
/**
 * @properties={typeid:35,uuid:"B3BE213C-557E-43BA-BA58-72C009A85C38",variableType:-4}
 */
var months = [];


/**
 * @properties={typeid:35,uuid:"6DEB5921-6C2D-4104-8205-3EACC8ED57D0",variableType:-4}
 */
var amounts = [];

/**
 * @properties={typeid:24,uuid:"259EC61A-0FA2-4383-B6A9-D1FE42D7C5B4"}
 */
function RenderChart() {
	var colors = ["#9D0952",
		"#F68500",
		"#F6B900",
		"#FFDD33",
		"#5C975D",
		"#5C774C"];

	var data = {
		type: 'bar',
		data: {
			labels: months,
			datasets: [{
				data: amounts,
				backgroundColor: colors,

				borderColor: colors,
				tension: 0.3
			}]
		}
	};

	var options = {
		tooltips: {
			enabled: false
		},
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: 'Amount($)'
				}
			}]
		}
	};

	elements.chart_1.setData(data);
	elements.chart_1.setOptions(options);

}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C8BF6D52-4DB1-4C45-9BE8-E5B78074862C"}
 */
function onLoad(event) {
	/**@type {Array}*/
	var result = scopes.modelDashboard.getSalesLastMonths();
	var monthShortNames = scopes.svyDateUtils.getShortMonthNames();

	for (var index = 0; index < result.length; index++) {
		var val = result[index];
		amounts.push(val[index + 1, 1]);
		var month = val[index + 1, 0];
		var monthName = monthShortNames[month - 1];

		months.push(monthName);

	}

	RenderChart();
}


/**
 * TODO generated, please specify type and doc for the params
 * @param dataset_index
 * @param index
 * @param label
 * @param value
 *
 * @properties={typeid:24,uuid:"3FDE62A0-BA13-4A0B-8CF9-07A9ECC078C6"}
 * @AllowToRunInFind
 */
function onClickMonth(dataset_index, index, label, value) {

	// retrieve fist and last day of the clicked month
	var monthIndex = scopes.svyDateUtils.getShortMonthNames("en").indexOf(label);
	var monthDate = new Date()
	monthDate.setMonth(monthIndex);
	//var startDate = scopes.svyDateUtils.toStartOfDay(scopes.svyDateUtils.getFirstDayOfMonth(monthDate));
	//var endDate = scopes.svyDateUtils.toEndOfDay(scopes.svyDateUtils.getLastDayOfMonth(monthDate));

	// navigate to orders table
	
	var item = new scopes.svyNavigation.NavigationItem("ordersViewMobileDataGrid");
//	// TODO: can extend the svyNavigation to include filters
//	item.setCustomData({ filters: [{ dataprovider: "orderdate", operator: scopes.svyPopupFilter.OPERATOR.BETWEEN, values: [startDate, endDate] }] })

	// open the item
	scopes.svyNavigation.open(item);
}

