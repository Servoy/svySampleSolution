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
 * @protected 
 *
 * @properties={typeid:35,uuid:"93A901D3-DC73-4F7D-BAF2-B618E4DA3810"}
 */
var label = "shipcountry";

/**
 * @type {String}
 * @protected
 *
 * @properties={typeid:35,uuid:"3981040F-ED41-414D-B03A-DA49FBF0915E"}
 */
var value = "orderid";

/**
 * @type {String}
 * @protected
 *
 * @properties={typeid:35,uuid:"03292087-1AF2-4EC2-8CAD-1D872416013B"}
 */
var valueFunc = "count";

/**
 * @type {String}
 * @protected
 *
 * @properties={typeid:35,uuid:"8C828C0E-ED79-4C8B-8B42-31F7FFC7BD36"}
 */
var labelDisplay = ''
	
/**
 * @type {String}
 * @protected
 *
 * @properties={typeid:35,uuid:"8F61DFFF-D01B-4140-B5E2-8ECB4261520C"}
 */
var valueDisplay = ''

/**
 * @param {JSFoundSet} chartFoundSet
 * @param {String} chartLabel
 * @param {String} [chartValue]
 * @param {String} [chartValueFunc]
 * @param {String} [chartLabelDisplay]
 * @param {String} [chartValueDisplay]
 *
 * @properties={typeid:24,uuid:"2AB3AB8F-20F8-4C31-8B04-1F1218168C12"}
 */
function configChart(chartFoundSet, chartLabel, chartValue, chartValueFunc, chartLabelDisplay, chartValueDisplay) {

	var table = databaseManager.getTable(chartFoundSet);
	var pkName = table.getRowIdentifierColumnNames()[0];

	label = chartLabel;
	value = chartValue ? chartValue : pkName;
	valueFunc = chartValueFunc ? chartValueFunc : 'count';
	labelDisplay = chartLabelDisplay ? chartLabelDisplay : '';
	valueDisplay = chartValueDisplay ? chartValueDisplay : '';
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

	var columnQuery = query;
	
	// get the related QBSelect Column
	var dps = label.split(".");
	if (dps.length > 1) {
		columnQuery = query.joins.add(dps[0], dps[0]);
	}
	var labelColumn = columnQuery.getColumn(dps[dps.length - 1]);
	
	// Add in the result the Column to group by
	query.result.add(labelColumn);
	query.result.distinct = true;

	// Aggregate for the value field.
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

	// group by Column
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
				label: labelDisplay,
				data: chartData,
				backgroundColor: dataColors,
				borderColor: dataColors,
				tension: 0.3
			}]
		}
	};

	var titleText = (valueFunc && valueDisplay && labelDisplay) ? valueFunc[0].toUpperCase() + valueFunc.slice(1).toLowerCase() + ' ' + valueDisplay + ' per ' + labelDisplay : 'Chart';
	var options = {
	    title: {
	    	display: true,
	    	text: titleText,
			position: 'top',
			fontSize: 14,
			fontFamily: 'Karla, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontColor: '#191B33'
	    },
		legend: {
			display: false
		},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            display: true
		}
	};

	elements.chart.setOptions(options);
	elements.chart.setData(data);
}
