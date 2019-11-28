/**
 * @properties={typeid:35,uuid:"370B880F-73DF-4E77-8F14-DADA80F3FFD3",variableType:-4}
 */
var dataTopCustomersName = [];

/**
 * @properties={typeid:35,uuid:"2EA01BAB-4E96-4148-B5CD-1C4FFDBEF29E",variableType:-4}
 */
var dataTopCustomersAmount = [];

/**
 * @properties={typeid:24,uuid:"14A16BCC-5E4F-46FC-A0DF-89785135051A"}
 */
function RenderChart() {
	var data = {
		type: 'doughnut',
		data: {
			labels: dataTopCustomersName,
			datasets: [{
				data: dataTopCustomersAmount,
				backgroundColor: ["#9D0952",
				"#F68500",
				"#F6B900",
				"#FFDD33",
				"#5C975D"],

				borderColor: ["#9D0952",
				"#F68500",
				"#F6B900",
				"#FFDD33",
				"#5C975D"]
			}]
		}
	};

	var options = {
		tooltips: {
			enabled: true
		},
		cutoutPercentage: 50,
		title: {
			display: false
		},
		legend: {
			display: false,
			position: 'right'
		}

	};

	elements.chart_1.setData(data);
	elements.chart_1.setOptions(options);

}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2815C080-2C9B-4812-A178-F9CBCE1270B5"}
 */
function onLoad(event) {
	/**@type {Array}*/
	var customers = scopes.modelDashboard.getTopCustomers(5);
	for (var index = 0; index < customers.length; index++) {
		var customer = customers[index];
		dataTopCustomersName.push(customer[index + 1, 0]);
		dataTopCustomersAmount.push(customer[index + 1, 1]);

	}
	RenderChart();

}
