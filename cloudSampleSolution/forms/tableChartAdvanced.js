/**
 * @enum
 * @protected
 * @properties={typeid:35,uuid:"F20A58E6-1604-44F1-82D7-2F363C1F9426",variableType:-4}
 */
var CHART_VALUE_FUNC = {
	COUNT: "count",
	SUM: "sum",
	MAX: "max",
	MIN: "min"
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93A901D3-DC73-4F7D-BAF2-B618E4DA3810"}
 */
var label = "shipcountry";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3981040F-ED41-414D-B03A-DA49FBF0915E"}
 */
var value = "orderid";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03292087-1AF2-4EC2-8CAD-1D872416013B"}
 */
var valueFunc = "count";

/**
 * @param {JSFoundSet} chartFoundSet
 * @param {String} chartLabel
 * @param {String} [chartValue]
 * @param {String} [chartValueFunc]
 *
 * @properties={typeid:24,uuid:"2AB3AB8F-20F8-4C31-8B04-1F1218168C12"}
 */
function configChart(chartFoundSet, chartLabel, chartValue, chartValueFunc) {

	var table = databaseManager.getTable(chartFoundSet);
	var pkName = table.getRowIdentifierColumnNames()[0];

	label = chartLabel;
	value = chartValue ? chartValue : pkName;
	valueFunc = chartValueFunc ? chartValueFunc : 'count';
}

/**
 * @param {JSFoundSet} chartFoundset
 *
 * @public
 *
 * @properties={typeid:24,uuid:"023AF3D9-3BF1-44BE-80CC-1F4B7E9BE44D"}
 */
function renderChart(chartFoundset) {

	// the query
	var query = chartFoundset.getQuery();

	query.result.clear();

	var dps = label.split(".");
	var columnQuery = query;
	if (dps.length > 1) {
		columnQuery = query.joins.add(dps[0], dps[0]);
	}

	var labelColumn = columnQuery.getColumn(dps[dps.length - 1]);
	query.result.add(labelColumn);
	query.result.distinct = true;

	switch (valueFunc) {
	case CHART_VALUE_FUNC.COUNT:
		query.result.add(query.getColumn(value).count.distinct);
		break;
	case CHART_VALUE_FUNC.SUM:
		query.result.add(query.getColumn(value).sum);
		break;
	case CHART_VALUE_FUNC.MAX:
		query.result.add(query.getColumn(value).max);
		break;
	case CHART_VALUE_FUNC.MIN:
		query.result.add(query.getColumn(value).min);
		break;
	default:
		query.result.add(query.getColumn(value).count.distinct);
		break;
	}

	query.groupBy.add(labelColumn);
	query.sort.clear();
	query.sort.add(labelColumn);

	var dataset = databaseManager.getDataSetByQuery(query, -1);
	var labels = dataset.getColumnAsArray(1);
	var chartData = dataset.getColumnAsArray(2);

	// fill colors
	var colors = ["#9D0952",
		"#F68500",
		"#F6B900",
		"#FFDD33",
		"#5C975D",
		"#5C774C"];

	var dataColors = colors;
	for (var i = 0; i <= labels.length / 5; i++) {
		dataColors = dataColors.concat(colors);
	}

	dataColors.length = labels.length;

	var data = {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				data: chartData,
				backgroundColor: dataColors,
				borderColor: dataColors,
				tension: 0.3
			}]
		}
	};

	var options = {
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	};

	elements.chart.setData(data);
	elements.chart.setOptions(options);
}
