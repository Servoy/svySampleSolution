/**
 * @properties={type:12,typeid:36,uuid:"F6A17955-9D32-4AC6-8D3E-94B9752B3129"}
 */
function ordersHtml()
{
	var date = new Date(orderdate);
	var printDate = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
	return '<div class="container"><div class="h4 bold" style="margin-bottom: 10px; display: grid; grid-template-columns: 1fr 1fr;"><span class="oId">No.' + orderid + '</span><span class="cId" style="text-align: center;"> CustomerID: ' + customerid + '</span></div><div style="margin-bottom: 10px; display: grid; grid-template-columns: 1fr 1fr;"><span class="date">Date: ' + printDate + '</span><span class="status '+ orderStatusStyleClass +'">' + orderStatus + '</span></div></div>';
}
