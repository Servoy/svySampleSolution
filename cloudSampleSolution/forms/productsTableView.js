/**
 * @properties={typeid:24,uuid:"0170268E-0794-4605-8288-DE3AB2D8463A"}
 * @override
 */
function newRecord() { 
	foundset.newRecord();
	foundset.discontinued = 0;
	elements.table.editCellAt(foundset.getSelectedIndex(), 0);
}
