customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/order_details",
extendsID:"2257E189-E435-4C88-A089-690E2F250200",
items:[
{
cssPosition:"55,0,55,0,200,100",
formIndex:2,
json:{
columns:[
{
dataprovider:"orderDetailsHtml",
headerStyleClass:"bold h4",
headerTitle:"Details",
id:"product",
minWidth:205,
showAs:"html",
svyUUID:"95A6336D-7564-41DB-AEE7-A01B57F497B9"
},
{
dataprovider:"addRemoveText",
id:"addRemove",
maxWidth:40,
minWidth:40,
styleClass:"clickable h4",
svyUUID:"1CC65F81-4283-4702-92AE-6F1BEB715F64"
},
{
id:"delete",
maxWidth:40,
minWidth:40,
styleClass:"fas fa-trash clickable",
svyUUID:"CFE0BFEC-06B4-4D90-B490-C084362078C9"
}
],
cssPosition:{
bottom:"55",
height:"100",
left:"0",
right:"0",
top:"55",
width:"200"
},
formIndex:2,
onCellClick:"6F3E7373-0C04-4C56-84E0-78E1D703E032",
rowHeight:100,
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"EEB4AA37-6042-4B6D-B872-F03F5348E01D"
}
},
name:"dataGridTable",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"08888BC5-FB92-4132-8667-2799EA1F4480"
},
{
cssPosition:"5,-1,-1,80,200,40",
customProperties:"methods:{\
onCrumbClicked:{\
arguments:null,\
parameters:null\
}\
}",
extendsID:"18D552B3-6DF7-4CDF-A9F6-444DD60D663B",
json:{
breadcrumbs:[
{
displayName:"Order %%orderText%%",
svyUUID:"41DC8943-E946-4025-B4EF-3F5950B3DC46"
},
{
displayName:"List",
svyUUID:"C37ABD3A-AE20-49F6-8244-168A2143FDFA"
}
],
cssPosition:{
bottom:"-1",
height:"40",
left:"80",
right:"-1",
top:"5",
width:"200"
},
onCrumbClicked:"9D358794-DC73-4881-B189-17B0CFCD8151"
},
typeid:47,
uuid:"2CDF1301-5C6C-43BE-9736-88CAB121B256"
},
{
cssPosition:"-1,15,15,15,115,35",
extendsID:"DF107F13-E782-4C96-ADF4-C3319C182AD9",
formIndex:1,
json:{
cssPosition:{
bottom:"15",
height:"35",
left:"15",
right:"15",
top:"-1",
width:"115"
},
formIndex:1
},
typeid:47,
uuid:"54F44801-9A9F-423A-B740-73484D30F2A4"
},
{
cssPosition:"10,15,-1,-1,25,25",
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"-1",
right:"15",
top:"10",
width:"25"
},
imageStyleClass:"icon-control_point h3",
onActionMethodID:"2DB83C3F-A2D6-4754-9E38-DF90A2803013",
size:{
height:30,
width:80
},
styleClass:"clickable text-primary"
},
name:"addLine",
size:"80,30",
styleClass:"clickable text-primary",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"AA713F51-C0DC-4C13-9482-2D809D9B3D22"
},
{
cssPosition:"50,0,0,0,0,0",
extendsID:"A55FC613-C594-4E63-9DBB-0A672FADEABA",
formIndex:0,
json:{
cssPosition:{
bottom:"0",
height:"0",
left:"0",
right:"0",
top:"50",
width:"0"
},
formIndex:0
},
typeid:47,
uuid:"CA0D18C6-6D19-441A-A512-D0C35A8F5198"
}
],
name:"orderDetailsViewMobile",
typeid:3,
uuid:"F0C3A76E-BC19-44F1-B049-31F3AF2B71DC"