customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/orders",
encapsulation:108,
items:[
{
cssPosition:"40,10,-1,-1,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"10",
top:"40",
width:"80"
},
onActionMethodID:"88934DE9-9CFE-48F4-B152-3009DEA8298E",
size:{
height:30,
width:80
},
styleClass:"text-tertiary text-center text-center-vertical text-underline",
text:"See more"
},
name:"label_4",
size:"80,30",
styleClass:"text-tertiary text-center text-center-vertical text-underline",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"04B22611-C221-4546-AD48-A38B64EDD8CF"
},
{
cssPosition:"0,-1,-1,calc(50% - 100px),200,40",
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"calc(50% - 100px)",
right:"-1",
top:"0",
width:"200"
},
size:{
height:30,
width:80
},
styleClass:"h3 text-center text-center-vertical text-primary",
text:"LAST 10 ORDERS"
},
name:"label_3",
size:"80,30",
styleClass:"h3 text-center text-center-vertical text-primary",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"3F03AE4B-7F9D-499C-A83C-AAFE019E70C5"
},
{
height:850,
partType:5,
typeid:19,
uuid:"42DC0F67-6602-4987-9D20-1B2E25738E7B"
},
{
cssPosition:"70,0,10,0,-1,-1",
json:{
columns:[
{
dataprovider:"ordersHtml",
id:"homeDashboardOrdersColumn",
showAs:"html",
svyUUID:"205E4AF4-EB5B-4F4B-9F5B-1A2449D61022"
}
],
cssPosition:{
bottom:"10",
height:"-1",
left:"0",
right:"0",
top:"70",
width:"-1"
},
onCellClick:"BC3D4245-597D-4CDE-A8C8-BDA5DBD4D54B",
rowHeight:75,
styleClass:"ag-theme-servoy",
toolPanelConfig:{
suppressColumnExpandAll:true,
suppressColumnFilter:true,
suppressColumnSelectAll:true,
suppressRowGroups:true,
suppressSideButtons:true,
svyUUID:"5500AC78-6918-4D75-B3F7-B39994275802"
}
},
name:"groupingtable_1",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"653FFDBD-705A-4EC3-B106-71B8C1203704"
}
],
name:"homeDashboardOrdersMobile",
namedFoundSet:"separate",
navigatorID:"-1",
onShowMethodID:"DBE81749-1DDF-438E-AF46-4D5D0E4FF51A",
showInMenu:true,
typeid:3,
uuid:"87BCF9F2-556E-4CD6-9333-05C82DF78A03"