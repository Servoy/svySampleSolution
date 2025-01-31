customProperties:"formComponent:false,\
useCssPosition:true",
encapsulation:44,
items:[
{
cssPosition:"40,86,-1,-1,25,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"86",
top:"40",
width:"25"
},
imageStyleClass:"fas fa-chart-bar clickable",
onActionMethodID:"F797A8C4-CACD-4ACD-A76D-1EE4CB3EAF3A",
toolTipText:"Toggle chart view"
},
name:"btnChart",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"0253AB81-E199-47E0-889A-99600DFA4458"
},
{
cssPosition:"42,-1,-1,318,25,25",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"318",
right:"-1",
top:"42",
width:"25"
},
formIndex:1,
imageStyleClass:"fa fa-search",
onActionMethodID:"FA66816E-DE30-43F3-AF63-E26D2F6A2379",
size:{
height:25,
width:25
},
styleClass:"default-align clickable"
},
name:"btnSearch",
size:"25,25",
styleClass:"default-align clickable",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"116E83ED-9286-4DEE-8B1F-C8E8ACB30272"
},
{
cssPosition:"38,-1,-1,30,325,32",
dataProviderID:"searchText",
name:"searchbar",
onActionMethodID:"FA66816E-DE30-43F3-AF63-E26D2F6A2379",
placeholderText:"Search...",
styleClass:"border-round",
typeid:4,
uuid:"204FD588-8F62-4F01-9CB2-D298EE211CE5"
},
{
cssPosition:"40,-1,-1,359,25,30",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"359",
right:"-1",
top:"40",
width:"25"
},
formIndex:2,
imageStyleClass:"fa fa-filter",
onActionMethodID:"18402340-95F4-4FEC-BAAE-DB7533D2C3E1",
size:{
height:25,
width:25
},
styleClass:"default-align clickable"
},
name:"btnFilter",
size:"25,25",
styleClass:"default-align clickable",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"33748875-2236-4888-8EEE-5347DC761343"
},
{
cssPosition:"40,139,-1,385,111,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"385",
right:"139",
top:"40",
width:"111"
},
onClick:"4DA82988-EE93-4BFC-A5DE-11AE27EE1310"
},
name:"filterToolbar",
typeName:"customrenderedcomponents-customlist",
typeid:47,
uuid:"58578296-17E6-435F-AC5F-3F5609F0F2BE"
},
{
cssPosition:"40,60,-1,-1,25,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"60",
top:"40",
width:"25"
},
imageStyleClass:"fas fa-cog clickable",
onActionMethodID:"6CA01D3F-828A-4CF7-980D-9CEAE933DA6C",
toolTipText:"Configure chart",
visible:true
},
name:"btnChartConfig",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"6E0E644F-DA3C-4504-875A-ACE502D5B5F2"
},
{
cssPosition:"10,-1,-1,31,324,23",
json:{
cssPosition:{
bottom:"-1",
height:"23",
left:"31",
right:"-1",
top:"10",
width:"324"
},
styleClass:"font-weight-bold h4",
text:"Title"
},
name:"labelTitle",
styleClass:"font-weight-bold h4",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"77B75982-F3BC-459F-ABAE-D1B5EF16340A"
},
{
cssPosition:"84,30,53,30,0,0",
formIndex:1,
json:{
continuousColumnsAutoSizing:true,
cssPosition:{
bottom:"53",
height:"0",
left:"30",
right:"30",
top:"84",
width:"0"
},
formIndex:1,
gridOptions:{
floatingFilter:"false",
floatingFiltersHeight:"0",
headerHeight:"35"
},
onColumnDataChange:"51762184-6F32-4021-9998-6CFBCA60B2FC",
onColumnStateChanged:"913541E9-3BB0-4377-8C06-F6E22C3B6948",
styleClass:"ag-theme-servoy"
},
name:"table",
styleClass:"ag-theme-servoy",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"9BF6D2ED-B31B-4F1D-BF51-67A2F8F04D33"
},
{
height:500,
partType:5,
typeid:19,
uuid:"AA801C33-79D0-48C7-9E88-58A11D7AB1D1"
},
{
cssPosition:"40,34,-1,-1,25,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"34",
top:"40",
width:"25"
},
imageStyleClass:"fas fa-graduation-cap",
onActionMethodID:"9C6747ED-5DA2-4932-BEC6-F77E7AEFE78E",
styleClass:"default-align clickable",
toolTipText:"View Tutorial"
},
name:"btnTutorial",
styleClass:"default-align clickable",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D38E1B61-18AF-47B1-B104-EA3D61B6111C"
},
{
cssPosition:"40,112,-1,-1,25,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"112",
top:"40",
width:"25"
},
imageStyleClass:"icon-control_point h4",
onActionMethodID:"0617C50E-1CB5-4E1F-8D42-AEA2408967DD",
styleClass:"default-align clickable",
visible:false
},
name:"btnAdd",
styleClass:"default-align clickable",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E08B9F39-7A28-40C7-8FAF-81034783BCCD"
},
{
cssPosition:"84,30,53,30,0,0",
json:{
containedForm:"02AD411E-B972-4275-89A2-FE6C27DBA0EE",
cssPosition:{
bottom:"53",
height:"0",
left:"30",
right:"30",
top:"84",
width:"0"
},
formIndex:0,
styleClass:"box",
visible:false
},
name:"tabChart",
styleClass:"box",
typeName:"servoycore-formcontainer",
typeid:47,
uuid:"FA4F7C95-AF83-4279-9D64-49E2E6BE93A2",
visible:false
}
],
name:"baseTableAdvanced",
navigatorID:"-1",
onLoadMethodID:"2ADE1345-EC76-4D90-A228-58AA5363C8EE",
onShowMethodID:"C9EC8A6B-DABC-41C0-BA9E-E1C7C415EA33",
showInMenu:true,
styleClass:"bg-tertiary",
typeid:3,
uuid:"220354D9-CA4C-401C-96E6-7A07733010B0"