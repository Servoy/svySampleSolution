/**
 * @properties={type:12,typeid:36,uuid:"2B139EAB-35B9-47BF-9559-3BA9833FC262"}
 */
function customerDashboardOrders()
{
	return '<div class="container" style="border-bottom: 1px solid"><div class="cName h4 bold">' + orderid + '</div><div class="cAddress">' + new Date(orderdate) + '</div></div>';

 * @properties={type:12,typeid:36,uuid:"F6A17955-9D32-4AC6-8D3E-94B9752B3129"}
 */
function ordersHtml()
{
	var customerID = orders_to_customers.customerid;
	var date = new Date(orderdate);
	var printDate = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
	return '<div class="container" style="border-bottom: 1px solid darkgray"><div class="h4 bold" style="margin-bottom:10px"><span class="oId">No.' + orderid + '</span><span class="cId" style="float:right;"> CustomerID: ' + customerID + '</span></div><div style="margin-bottom:10px"><span class="date">Ordare date: ' + printDate + '</span><span class="status '+ orderStatusStyleClass +'" style="float:right;">' + orderStatus + '</span></div></div>';
}
