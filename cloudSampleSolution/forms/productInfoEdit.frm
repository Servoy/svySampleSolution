customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/example_data/products",
extendsID:"954F2DA3-D9B2-44F2-B5C2-6A1FDAB1507B",
items:[
{
cssPosition:"265,50%,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"50%",
top:"265",
width:"200"
},
dataProviderID:"supplierid",
valuelistID:"B2CE91F1-9801-4076-BFD3-902087B5B7D2"
},
name:"supplierid",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"05766D36-C17D-4287-8BD2-DBF68BED9723"
},
{
extendsID:"642700D2-400D-46A8-B5C7-E88E7D6B3E91",
height:580,
typeid:19,
uuid:"12B8D45E-1FEE-4B2E-B333-E6A28F80E3B3"
},
{
cssPosition:"320,50%,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"50%",
top:"320",
width:"200"
},
dataProviderID:"unitprice",
format:"¤#.00"
},
name:"unitprice",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"1BCECDC1-2DCD-4AB2-A992-B8352111EDAE"
},
{
cssPosition:"100,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"100",
width:"120"
},
labelFor:"productname",
styleClassExpression:null,
text:"Product",
toolTipText:"Product"
},
name:"productname_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"224A354F-4902-459B-92AC-7D95F889ECD6"
},
{
cssPosition:"265,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"265",
width:"120"
},
labelFor:"supplierid",
styleClassExpression:null,
text:"Supplier",
toolTipText:"Supplier"
},
name:"supplierid_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"3398A640-D1B8-4947-8EC7-5E791DE60F8A"
},
{
customProperties:"methods:{\
onCrumbClicked:{\
arguments:null,\
parameters:null\
}\
}",
extendsID:"9002DFD5-92D4-4E02-A613-E24A0B0C42DE",
json:{
breadcrumbs:[
{
displayName:"Products",
svyUUID:"8101CE59-FF27-45C5-9571-51F12278ACD8"
},
{
crumbId:"edit",
displayName:"%%productname%%",
svyUUID:"4ACFD1FB-D7A6-449F-B441-FA831E2565BA"
}
],
onCrumbClicked:"03FE6599-E2B0-4B4F-8527-E0755BB5B835"
},
typeid:47,
uuid:"366BD724-650D-4BE8-B453-A48C3EEEE299"
},
{
cssPosition:"430,50%,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"50%",
top:"430",
width:"200"
},
dataProviderID:"unitsonorder",
imageStyleClass:"fas fa-cart-plus margin-right-10",
onActionMethodID:"49BEDC63-246C-4B4E-91EA-15A404EA8247",
styleClass:"default-align btn btn-outline-success",
styleClassExpression:"unitsonorder"
},
name:"unitsonorder",
styleClass:"default-align btn btn-outline-success",
typeName:"bootstrapcomponents-datalabel",
typeid:47,
uuid:"39B2E131-B982-4D1C-8A19-82B71ABD0580"
},
{
cssPosition:"155,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"155",
width:"120"
},
labelFor:"categoryid",
styleClassExpression:null,
text:"Category",
toolTipText:"Category"
},
name:"categoryid_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"4D46C93E-A601-4214-9DE8-50A0143B215D"
},
{
cssPosition:"375,50%,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"50%",
top:"375",
width:"200"
},
dataProviderID:"unitsinstock",
imageStyleClass:"fa fa-truck-loading  margin-right-10",
onActionMethodID:"E1E9312E-CCBA-456F-A2FF-E0C8BD9CB3A3",
styleClass:"default-align btn btn-outline-success",
styleClassExpression:"unitsinstock"
},
name:"unitsinstock",
styleClass:"default-align btn btn-outline-success",
typeName:"bootstrapcomponents-datalabel",
typeid:47,
uuid:"5931C08D-458A-4213-A788-F608ABCDE01C"
},
{
cssPosition:"155,50%,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"50%",
top:"155",
width:"200"
},
dataProviderID:"categoryid",
valuelistID:"0A33A641-6094-41B6-BB64-5F15869929F4"
},
name:"categoryid",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"5E014F84-2609-4B61-B1C6-C94E44502030"
},
{
cssPosition:"375,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"375",
width:"120"
},
imageStyleClass:"fas fa-boxes",
labelFor:"unitsinstock",
styleClassExpression:null,
text:"In stock",
toolTipText:"In stock"
},
name:"unitsinstock_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"659E037D-D128-4702-B315-B2678AAE9AF1"
},
{
cssPosition:"502,-1,-1,181,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"181",
right:"-1",
top:"502",
width:"200"
},
dataProviderID:"unitsavailable",
styleClassExpression:"unitsavailable"
},
name:"unitsavailable",
typeName:"bootstrapcomponents-datalabel",
typeid:47,
uuid:"7C3D3971-674E-457D-9C10-AFB6D7CDBD01"
},
{
cssPosition:"100,50%,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"50%",
top:"100",
width:"200"
},
dataProviderID:"productname"
},
name:"productname",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"7F25D839-46BC-44F3-8D8D-5FE76DB5078D"
},
{
cssPosition:"210,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"210",
width:"120"
},
labelFor:"description",
styleClassExpression:null,
text:"Category desc.",
toolTipText:"Category desc."
},
name:"description_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"8B73AA66-9729-41E6-B9FD-4BB043D907B8"
},
{
cssPosition:"502,-1,-1,61,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"61",
right:"-1",
top:"502",
width:"120"
},
imageStyleClass:"fas fa-warehouse",
labelFor:"unitsavailable",
styleClassExpression:null,
text:"Available",
toolTipText:"Units available"
},
name:"unitsavailable_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"A797BFC4-91EA-4856-9B60-61A251D6572C"
},
{
cssPosition:"320,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"320",
width:"120"
},
labelFor:"unitprice",
styleClassExpression:null,
text:"Unit price",
toolTipText:"Unit price"
},
name:"unitprice_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"AE0F9960-2E8C-4409-8E78-EB0B0AAF8415"
},
{
cssPosition:"210,60,-1,180,200,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"180",
right:"60",
top:"210",
width:"200"
},
dataProviderID:"products_to_categories.description"
},
name:"description",
typeName:"bootstrapcomponents-datalabel",
typeid:47,
uuid:"B035CCEB-A688-40FB-B6A7-60DF1D6AC07B"
},
{
cssPosition:"430,-1,-1,60,120,42",
json:{
cssPosition:{
bottom:"-1",
height:"42",
left:"60",
right:"-1",
top:"430",
width:"120"
},
imageStyleClass:"fas fa-truck",
labelFor:"unitsonorder",
styleClassExpression:null,
text:"In order",
toolTipText:"In order"
},
name:"unitsonorder_label",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"FB9C5EB3-A1A4-492C-BBC0-19E54FDFA3AC"
}
],
name:"productInfoEdit",
size:"640,541",
typeid:3,
uuid:"52A20278-29C7-45DF-B39D-B0A26B93B5FF"