/**
 * @properties={type:12,typeid:36,uuid:"F92634B0-3841-4A07-9234-07D3083C116D"}
 */
function orderDetailsHtml()
{
	return '<div class="container" style="border-bottom: 1px solid darkgray"><div class="h4 bold" style="overflow: hidden; text-overflow: ellipsis;">' + (order_details_to_products != null ? order_details_to_products.productname : "") + '</div><div>Quantity: ' +quantity+ '</div><div>Price: ' +unitprice+ '</div><div>Total: ' +subtotal+ '</div></div>';
}
