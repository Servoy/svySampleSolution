/**
 * @properties={typeid:35,uuid:"E8E8C5F2-E7F9-4E60-8FB3-B1C3D437AE90",variableType:-4}
 */
var products = [];

/**
 * @properties={typeid:35,uuid:"697D17BA-6C8D-45A1-BBCB-551EAC71AB4F",variableType:-4}
 */
var customerAmounts = [];

/**
 * @properties={typeid:35,uuid:"51763856-90F5-4321-B11D-688A7B5DBA22",variableType:-4}
 */
var annualAmounts = [];

/**
 * @properties={typeid:35,uuid:"D36DC2A6-E307-48DE-8B28-D4314D2A1931",variableType:-4}
 */
var years = [];

/**
 * @properties={typeid:35,uuid:"0BA41DC4-9788-48E5-8F1B-994E03F9148C",variableType:-4}
 */
var colors = [];

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"1D5149B8-9FF5-4082-8774-CF1B67A67E49"}
 */
function onLoad(event) { 
	setColors();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"F6111E05-EDC7-416E-8AAA-433024A436DF"}
 */
function onShow(firstShow, event) {
//	_super.onShow(firstShow, event);
	
	RenderPieChart();
	
	renderBarChart();
}

/**
 * @properties={typeid:24,uuid:"0B18B81A-07E1-4F45-94A7-33C440DCA2DE"}
 */
function RenderPieChart() {
	setPieChartData();
	
	var data = {
		type: 'doughnut',
		data: {
			labels: products,
			datasets: [{
				data: customerAmounts,
				backgroundColor: colors,

				borderColor: colors,
				tension: 0.3
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
 * @properties={typeid:24,uuid:"35E1A7E7-07DA-46D0-B566-2BA83B97DEEF"}
 */
function setPieChartData(){
	/**@type {Array}*/
	var result = scopes.modelDashboard.getTopCustomersProducts(foundset.customerid, 5);
	customerAmounts = [];
	products = [];

	for (var index = 0; index < result.length; index++) {
		var val = result[index];
		customerAmounts.push(val[index + 1, 1]);
		products.push(val[index + 1, 0]);
	}
}

/**
 * @properties={typeid:24,uuid:"9D2CA450-1B3F-4B18-BDAC-AC105218AA7A"}
 */
function renderBarChart() {
	setBarChartData();
	
	var data = {
		type: 'bar',
		data: {
			labels: years,
			datasets: [{
				data: annualAmounts,
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

	elements.bar_chart.setData(data);
	elements.bar_chart.setOptions(options);
}

/**
 * @properties={typeid:24,uuid:"0972E081-B12A-4396-859F-E5600C32E433"}
 */
function setBarChartData(){
	/**@type {Array}*/
	var result = scopes.modelDashboard.getSalesOrderByYear(foundset.customerid);
	annualAmounts = [];
	years = [];

	for (var i = 0; i < result.length; i++) {
		var val = result[i];
		annualAmounts.push(val[i + 1, 1]);
		years.push(val[i + 1, 0]);
	}
}

/**
 * @properties={typeid:24,uuid:"6EAACB3B-E419-4180-8FC6-034B10701644"}
 */
function setColors(){
	colors = ["#9D0952",
	"#F68500",
	"#F6B900",
	"#FFDD33",
	"#5C975D",
	"#5C774C"];
}
