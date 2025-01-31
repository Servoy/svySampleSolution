customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/orders",
encapsulation:44,
extendsID:"804EB596-ECA6-45A8-84D3-1C373665F1DD",
initialSort:"orderdate desc",
items:[
{
cssPosition:"70,0,60,0,200,100",
customProperties:"methods:{\
onCellClick:{\
arguments:null,\
parameters:null\
}\
}",
extendsID:"58532960-BC18-43F9-A60D-DE87E65EBEAF",
json:{
columns:[
{
autoResize:false,
columnDef:{
suppressMenu:"true"
},
enableResize:false,
enableRowGroup:false,
enableSort:false,
enableToolPanel:false,
id:"edit",
maxWidth:40,
minWidth:40,
styleClass:"far fa-edit clickable",
svyUUID:"EE9FDCD2-B5C8-47C3-98D9-FC1DA67FED27",
width:40
},
{
dataprovider:"orderid",
format:"#",
headerTitle:"ID",
id:"id",
maxWidth:70,
svyUUID:"2F78834D-99CF-40D5-BB09-68AC0F00EF5A"
},
{
dataprovider:"orderdate",
format:"dd/MM/yyyy",
headerTitle:"Order Date",
id:"orderdate",
svyUUID:"BD127B43-34E7-4D55-93D9-B8E9768DE8FA"
},
{
dataprovider:"shipcountry",
enableResize:false,
headerTitle:"Country",
id:"country",
svyUUID:"4C389912-90E5-4807-8579-66799D12294A"
},
{
columnDef:{
suppressMenu:"true"
},
dataprovider:"order_total",
enableResize:false,
enableRowGroup:false,
enableSort:false,
format:"¤#.00",
headerTitle:"Total",
id:"total",
svyUUID:"1EE5A275-8411-4A15-9D58-42BA97C0BF3A"
},
{
columnDef:{
suppressMenu:"true"
},
dataprovider:"orderStatus",
enableRowGroup:false,
enableSort:false,
headerTitle:"Status",
id:"status",
styleClassDataprovider:"orderStatusStyleClass",
svyUUID:"5497694F-D4F7-4248-B2B6-09D0CED86B8A"
}
],
cssPosition:{
bottom:"60",
height:"100",
left:"0",
right:"0",
top:"70",
width:"200"
},
onCellClick:"86C6F9A6-E39E-406F-81F4-40531531C313",
toolPanelConfig:{
svyUUID:"EBBBA3E2-39C4-4C9B-91C4-919E929B514A"
}
},
typeid:47,
uuid:"0A07AF6F-FAF1-4145-8817-DAA0BDB0E6EE"
},
{
cssPosition:"12,-1,-1,30,185,33",
extendsID:"588976DF-F072-4B40-B0B0-D7F982816865",
styleClass:"h2 text-primary",
text:"Sales Orders",
typeid:7,
uuid:"14E02609-9E3C-407C-806B-BB1FA7B93699"
},
{
extendsID:"35231972-AFF9-4626-85B4-11EAEC688780",
typeid:19,
uuid:"1B6FE0B4-7281-4BF5-B0AA-A5FD4493C17F"
},
{
cssPosition:"21,54,-1,-1,20,20",
extendsID:"7403686B-0C3B-40DA-86C7-6BC0DB761E1A",
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"-1",
right:"54",
top:"21",
width:"20"
}
},
typeid:47,
uuid:"2DA94640-C215-473D-945B-82D10394744D"
},
{
cssPosition:"-1,-1,10,60,116,40",
formIndex:2,
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"60",
right:"-1",
top:"-1",
width:"116"
},
formIndex:2,
onActionMethodID:"E0143577-D0A3-422B-8382-DE48E2094A1F",
styleClass:"text-success clickable text-center-vertical",
text:"NEW ORDER"
},
name:"btnNewRole",
styleClass:"text-success clickable text-center-vertical",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"34246DE3-8E65-463D-8F06-133DB0F7DA77"
},
{
cssPosition:"21,86,-1,-1,20,20",
extendsID:"DD37254E-8ECC-4B76-902C-5FD56E986972",
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"-1",
right:"86",
top:"21",
width:"20"
}
},
typeid:47,
uuid:"56BDC901-62E1-4736-9FBB-38B4A3149F06"
},
{
extendsID:"6E57CCB6-C6DB-4EEA-899E-662BD7FED798",
json:{

},
typeid:47,
uuid:"8B8E5E0D-8812-4A94-8DE7-EE6AAB174046"
},
{
cssPosition:"-1,-1,10,30,25,40",
formIndex:1,
json:{
cssPosition:{
bottom:"10",
height:"40",
left:"30",
right:"-1",
top:"-1",
width:"25"
},
formIndex:1,
imageStyleClass:"icon-control_point h4",
onActionMethodID:"E0143577-D0A3-422B-8382-DE48E2094A1F",
size:{
height:25,
width:25
},
styleClass:"default-align clickable text-success"
},
name:"iconNewRole",
size:"25,25",
styleClass:"default-align clickable text-success",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"9A98B839-6DE8-4B07-8E45-73CAF7A1AE12"
},
{
cssPosition:"21,20,-1,-1,20,20",
extendsID:"29E69132-37C2-40DE-9F6E-8BAA976661F3",
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"-1",
right:"20",
top:"21",
width:"20"
}
},
typeid:47,
uuid:"F4F4E66B-A182-44D0-85AF-DBDF6270A9F7"
}
],
name:"customerDashboardOrders",
navigatorID:"-1",
showInMenu:true,
styleClass:null,
typeid:3,
uuid:"A484D7D0-E207-4F7E-9489-6DBCB30DFE50"