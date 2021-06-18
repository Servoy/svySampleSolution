/**
 * @properties={type:4,typeid:36,uuid:"D421365F-B523-4D4F-B5D3-B2621AFE55C9"}
 */
function unitsavailable() {
	return unitsinstock + unitsonorder;
}

/**
 * @properties={type:12,typeid:36,uuid:"20CDFE7D-0A48-44B2-A512-9D324C6CC940"}
 */
function unitsInStockIcon() {
	
	if (!unitsinstock) {
		return "fas fa-exclamation-circle text-danger";
	} else if (unitsinstock < 10) {
		return "fas fa-exclamation-circle text-warning";
	} else if (unitsinstock > 20) {
		return "";
	} else {
		return "";
	}
}