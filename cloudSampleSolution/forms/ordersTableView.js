/**
 * @private
 * @type {String}
 * @SuppressWarnings (unused)
 *
 * @properties={typeid:35,uuid:"08F5A764-2756-4813-8357-5C99E7C761D7"}
 */
var tooltipCustomer = 'Show customer at double click';

/**
 * @param {Number} foundsetindex
 * @param {Number} columnindex
 * @param {JSRecord<db:/example_data/orders>} record
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B8E6B20B-B389-4204-96D4-36BA81D25C24"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {

	var column = elements.table.getColumn(columnindex)
	if (column.id == "customer") {
		// navigate to the clicked customer
		scopes.global.showForm(forms.customerView, record.orders_to_customers.getSelectedRecord())
		
	} else {
		// navigate to the orderEdit
		scopes.global.showForm(forms.orderEdit, record)
	}
}

/**
 * @param {QBSelect<db:/example_data/orders>} query
 * @param {String} dataprovider
 * @param {String} operator
 * @param {Array} values
 * @param {scopes.svyPopupFilter.AbstractPopupFilter} filter
 * 
 * @return {Boolean}
 * @protected
 * @override 
 *
 * @properties={typeid:24,uuid:"E838DBBC-0B32-4C48-81F7-4360A5D6A2AF"}
 */
function onFilterQueryCondition(query, dataprovider, operator, values, filter) {
	if (!values || !values.length) return true;

	switch (dataprovider) {
	case "orderStatus":

		var or = query.or;

		// no requireddate set
		if (values.indexOf("new") > -1) {
			or.add(query.columns.requireddate.isNull)
		}

		// only requireddate is set
		if (values.indexOf("planned") > -1) {
			or.add(query.and.add(query.columns.requireddate.not.isNull).add(query.columns.shippeddate.isNull))
		}

		// requireddate & shippedate are set
		if (values.indexOf("completed") > -1) {
			or.add(query.and.add(query.columns.requireddate.not.isNull).add(query.columns.shippeddate.not.isNull))
		}

		query.where.add(or);

		return false;
		break;
	default:
		break;
	}
	return true;
}