/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"01256C01-6088-4605-85C3-4670A4C4138E"}
 */
var addRemoveText = "+/-";

/**
 * @protected 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD18018B-4B82-457C-BEE9-A0642FB40B3B"}
 */
var orderText;

/**
 * Called whenever a breadcrumb item is clicked with the JSEvent and the item clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-breadcrumbs.crumb>} crumb
 * @param {Number} index
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9D358794-DC73-4881-B189-17B0CFCD8151"}
 */
function onCrumbClicked(event, crumb, index) {
	switch (index) {
	case 0:
		back();
		break;
	default:
		back();
		break;
	}
}

/**
 * @public 
 * TODO generated, please specify type and doc for the params
 * @param id
 *
 * @properties={typeid:24,uuid:"2FAE2E4C-36DD-443B-879C-B4116B3B72A7"}
 */
function setOrderId(id){
	orderText = id;
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {number} foundsetindex
 * @param {number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6F3E7373-0C04-4C56-84E0-78E1D703E032"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.dataGridTable.getColumn(columnindex);
	switch (column.id) {
	case "addRemove":
		var answer = plugins.dialogs.showInputDialog("Quantity","Please enter the new value:",foundset.quantity.toString());
		if (answer != null) {
			if(answer == '0'){
				deleteRecord();
			}
			else if(foundset.quantity.toString() != answer){
				foundset.quantity = parseInt(answer);
			}	
		}
		break;
	case "delete":
		deleteRecord();
		break;

	default:
		break;
	}

}

/**
 * @properties={typeid:24,uuid:"514A09F4-5DFD-481A-B0DE-01E21E4475FD"}
 */
function deleteRecord() {
	foundset.deleteRecord();
}

/**
 * @param {JSEvent} event
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2DB83C3F-A2D6-4754-9E38-DF90A2803013"}
 */
function onActionAddProducts(event) {
	var lookupObj = scopes.svyLookup.createLookup(datasources.db.example_data.products.getDataSource());
	lookupObj.setMultiSelect(true);

	lookupObj.addField('productname').setTitleText('Product');
	lookupObj.addField('unitprice').setTitleText('Price')
		.setSearchable(false)
		.setFormat('#,###.00')

	lookupObj.showPopUp(onSelect, elements.addLine, 320, 450);
}

/**
 * @param {Array<JSRecord<db:/example_data/products>>} record
 * @param {Array} values
 * @param {scopes.svyLookup.Lookup} lookup
 *
 * @properties={typeid:24,uuid:"1F89ACE3-255D-4C36-8481-FF0EB6EC01EE"}
 */
function onSelect(record, values, lookup){
	if (values && values.length) {
		foundset.productid = values[0];
	}
	
	if(record){
		record.forEach(function(rec){
			if(foundset.selectRecord(foundset.orderid,rec.productid)) {
				foundset.quantity = foundset.quantity + 1;
			} else {
				var newRec = foundset.getRecord(foundset.newRecord());
				newRec.orderid = orderText;
				newRec.discount = 0;
				newRec.quantity = 1;
				newRec.unitprice = rec.unitprice;
				newRec.productid = rec.productid;
			}
		})
	}
}