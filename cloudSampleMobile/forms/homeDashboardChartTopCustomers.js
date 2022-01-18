
/**
 * @properties={typeid:35,uuid:"34F55BC4-2166-47EF-8E3C-6CBCA686BA1C",variableType:-4}
 */
var dataTopCustomersName = [];

/**
 * @properties={typeid:35,uuid:"60A31CCB-C78F-4DAB-8ACD-D39DC45861BF",variableType:-4}
 */
var dataTopCustomersAmount = [];


/**
 * @properties={typeid:24,uuid:"B90DC5A2-FB34-436A-93C9-19B7AE22F3FC"}
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E406DA70-5C1C-4685-841F-CBAF4DC6ACBD"}
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


/**
 * TODO generated, please specify type and doc for the params
 * @param dataset_index
 * @param index
 * @param label
 * @param value
 * 
 * @properties={typeid:24,uuid:"2FBD0374-51DD-4CE2-BD08-96C2036128BC"}
 * @AllowToRunInFind
 */
function onClickChart(dataset_index, index, label, value) {
	forms.customersViewMobile.search(label,'customerid')
	// navigate to Customer view table
	var item = new scopes.svyNavigation.NavigationItem("customerViewMobile");
	scopes.svyNavigation.open(item);

}

