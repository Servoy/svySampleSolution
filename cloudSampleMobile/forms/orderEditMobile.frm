customProperties:"formComponent:false,\
methods:{\
onRecordSelectionMethodID:{\
arguments:null,\
parameters:null\
}\
},\
useCssPosition:true",
dataSource:"db:/example_data/orders",
extendsID:"2257E189-E435-4C88-A089-690E2F250200",
items:[
{
cssPosition:"937,15,-1,15,120,40",
formIndex:11,
name:"postalcode_label",
text:"Postalcode",
transparent:true,
typeid:7,
uuid:"04E808C0-B2BA-4910-8E39-509C64F013A2"
},
{
cssPosition:"385,15,-1,15,0,40",
dataProviderID:"orderdate",
displayType:5,
formIndex:12,
name:"orderdate",
typeid:4,
uuid:"0D8C6537-27FC-4B03-B353-2BD82EF901AD"
},
{
cssPosition:"350,15,-1,15,120,40",
formIndex:17,
labelFor:"orderdate",
name:"orderdate_label",
text:"Orderdate",
transparent:true,
typeid:7,
uuid:"0EE5014F-6316-4013-A9BE-8ED8BABDD667"
},
{
cssPosition:"157,15,-1,15,161,20",
formIndex:10,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"15",
right:"15",
top:"157",
width:"161"
},
formIndex:10,
styleClass:"h5 text-tertiary",
text:"CUSTOMER ADDRESS"
},
name:"label_customerAddress",
styleClass:"h5 text-tertiary",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"11425B34-2679-466A-AA01-90F289FC8EFE"
},
{
cssPosition:"777,15,-1,15,120,40",
formIndex:7,
name:"city_label",
text:"City",
transparent:true,
typeid:7,
uuid:"1D3406C0-2663-4836-8AEE-B15A94CC5D48"
},
{
cssPosition:"254,15,-1,15,86,20",
formIndex:14,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"15",
right:"15",
top:"254",
width:"86"
},
formIndex:14,
styleClass:"h5 text-tertiary",
text:"DELIVERY"
},
name:"label_delivery",
styleClass:"h5 text-tertiary",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"1DF75EA4-F32C-493A-BE65-A9217E74D9D0"
},
{
cssPosition:"732,15,-1,15,0,40",
dataProviderID:"shipcountry",
formIndex:17,
name:"country",
typeid:4,
uuid:"22B75A68-CABA-4313-B7F2-DA8728AE3178"
},
{
cssPosition:"121,15,-1,40,0,20",
formIndex:9,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"40",
right:"15",
top:"121",
width:"0"
},
formIndex:9,
text:"%%orders_to_customers.fax%%"
},
name:"faxLabel",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"2652C23B-50B1-4131-8830-6ADEA82A02D3"
},
{
cssPosition:"305,15,-1,15,243,40",
dataProviderID:"employeeid",
displayType:2,
editable:false,
formIndex:16,
name:"employee",
typeid:4,
uuid:"2D40A8C6-7A1E-46DE-BFFD-2FA11069ADAF",
valuelistID:"68D0A4FD-5742-41AB-9165-9543DC40C9F2"
},
{
cssPosition:"697,15,-1,15,120,40",
formIndex:4,
name:"country_label",
text:"Country",
transparent:true,
typeid:7,
uuid:"31C9F6B8-B696-481D-90EF-3D04C229D179"
},
{
cssPosition:"270,15,-1,15,120,40",
formIndex:20,
name:"label_employee",
text:"Employee",
transparent:true,
typeid:7,
uuid:"3658874D-8202-436B-837F-38C9A2B52961"
},
{
cssPosition:"510,15,-1,15,120,40",
formIndex:19,
labelFor:"shippeddate",
name:"shippeddate_label",
text:"Shippeddate",
transparent:true,
typeid:7,
uuid:"41D2168A-3BA0-42F0-9DEE-BC14BBB4F6EC"
},
{
cssPosition:"121,-1,-1,15,25,20",
formIndex:6,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"15",
right:"-1",
top:"121",
width:"25"
},
faclass:"fas fa-fax",
formIndex:6,
imageStyleClass:"fas fa-fax",
size:{
height:25,
width:25
}
},
name:"faxIcon",
size:"25,25",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"42AFF195-C09B-4EF3-975B-F348B652496C"
},
{
cssPosition:"101,15,-1,40,0,20",
formIndex:7,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"40",
right:"15",
top:"101",
width:"0"
},
formIndex:7,
text:"%%orders_to_customers.phone%%"
},
name:"phoneLabel",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"4850F2EF-85D1-4BB1-9161-A11C1659C47C"
},
{
cssPosition:"972,15,-1,15,0,40",
dataProviderID:"shippostalcode",
formIndex:15,
name:"postalcode",
typeid:4,
uuid:"637896FC-328A-4918-A543-A43FD017B16E"
},
{
cssPosition:"81,15,-1,15,0,20",
displaysTags:true,
formIndex:5,
name:"contactLabel",
text:"%%orders_to_customers.contacttitle%% %%orders_to_customers.contactname%%",
typeid:7,
uuid:"657EABDD-1680-4459-A24C-6D6C5B137240"
},
{
cssPosition:"198,15,-1,15,0,20",
displaysTags:true,
formIndex:1,
name:"cityLabel",
text:"%%orders_to_customers.city%%, %%orders_to_customers.postalcode%%",
typeid:7,
uuid:"6A7C79C2-2742-4F1C-BBAF-91ADBE0A38F0"
},
{
cssPosition:"1017,15,-1,15,120,40",
formIndex:13,
name:"region_label",
text:"Region",
transparent:true,
typeid:7,
uuid:"6EA343BC-0E37-4FAB-89EF-5EBA9D2108A8"
},
{
cssPosition:"812,15,-1,15,0,40",
dataProviderID:"shipcity",
formIndex:20,
name:"city",
typeid:4,
uuid:"6EE7B648-DE93-4BFE-952E-5D5F7CA0A4BA"
},
{
cssPosition:"218,15,-1,15,0,20",
displaysTags:true,
formIndex:4,
name:"countryLabel",
text:"%%orders_to_customers.country%%",
typeid:7,
uuid:"735C9222-304D-4FAA-8543-609B3CB7CF15"
},
{
cssPosition:"1140,15,-1,15,115,25",
extendsID:"DF107F13-E782-4C96-ADF4-C3319C182AD9",
formIndex:24,
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"15",
right:"15",
top:"1140",
width:"115"
},
formIndex:24
},
typeid:47,
uuid:"81535BB0-974F-4AD7-B950-2A9911C0EC74"
},
{
cssPosition:"5,-1,-1,80,230,40",
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
displayName:"Orders",
svyUUID:"AF905CC9-C7F7-472E-8FC1-87A4088FB1CB"
},
{
displayName:"Order %%orderText%%",
svyUUID:"A6A8F835-DD51-4BCB-8CA9-91CB3DCBB158"
}
],
cssPosition:{
bottom:"-1",
height:"40",
left:"80",
right:"-1",
top:"5",
width:"230"
},
onCrumbClicked:"0C93C59F-5402-4117-9178-4E665BF1CC94"
},
typeid:47,
uuid:"8C8C46F9-9F75-4730-85C9-FA612FB8CD93"
},
{
cssPosition:"178,15,-1,15,0,20",
displaysTags:true,
formIndex:2,
name:"addressLabel",
text:"%%orders_to_customers.address%%",
typeid:7,
uuid:"8CAEAD16-9CD4-4972-AEC3-A69DFED175D3"
},
{
cssPosition:"1052,15,-1,15,0,40",
formIndex:25,
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"15",
right:"15",
top:"1052",
width:"0"
},
dataProviderID:"shipregion",
formIndex:25
},
name:"region",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"9320534C-D984-4939-888F-9E00143B1D98"
},
{
cssPosition:"51,10,9,10,-1,1120",
extendsID:"A55FC613-C594-4E63-9DBB-0A672FADEABA",
formIndex:0,
json:{
cssPosition:{
bottom:"9",
height:"1120",
left:"10",
right:"10",
top:"51",
width:"-1"
},
formIndex:0
},
typeid:47,
uuid:"A7B29890-9E9B-41BD-BF01-6AC0D98B9487"
},
{
cssPosition:"1105,15,-1,15,80,25",
json:{
cssPosition:{
bottom:"-1",
height:"25",
left:"15",
right:"15",
top:"1105",
width:"80"
},
onActionMethodID:"09139261-A5AE-4721-A679-623D58439260",
size:{
height:30,
width:80
},
text:"Order Lines",
visible:true
},
name:"button_1",
size:"80,30",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"AD743489-A0FB-4C01-A62F-F3763310DF6A"
},
{
cssPosition:"857,15,-1,15,120,40",
formIndex:8,
name:"address_label",
text:"Address",
transparent:true,
typeid:7,
uuid:"B60C3729-61CD-45C5-B27C-7DC9A88B1F12"
},
{
cssPosition:"892,15,-1,15,0,40",
dataProviderID:"shipaddress",
formIndex:19,
name:"address1",
typeid:4,
uuid:"B6B3FD57-13D1-4331-A1D4-AB7D7B09986D"
},
{
extendsID:"B1D98F42-E45A-4A98-B1DE-9764B3B5A5D5",
height:1200,
typeid:19,
uuid:"C1583215-D535-4B7D-A09B-B0C9D4134094"
},
{
cssPosition:"465,15,-1,15,253,40",
dataProviderID:"requireddate",
displayType:5,
formIndex:13,
name:"requireddate",
typeid:4,
uuid:"CDA6A267-8BF3-43C2-9E3A-F75053E81ECA"
},
{
cssPosition:"625,15,-1,15,243,40",
dataProviderID:"shipvia",
displayType:2,
editable:false,
formIndex:15,
name:"shipVia",
typeid:4,
uuid:"D21366B0-25CE-47CE-98F0-2D6FAB43E98F",
valuelistID:"EE397070-5A81-4A99-A9C0-539F6100B5BF"
},
{
cssPosition:"101,-1,-1,15,25,20",
formIndex:8,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"15",
right:"-1",
top:"101",
width:"25"
},
faclass:"fas fa-phone",
formIndex:8,
imageStyleClass:"fas fa-phone",
size:{
height:25,
width:25
}
},
name:"phoneIcon",
size:"25,25",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D97778AC-532B-4F69-9BAB-4A7EB4282668"
},
{
cssPosition:"430,15,-1,15,120,40",
formIndex:18,
labelFor:"requireddate",
name:"requireddate_label",
text:"Requireddate",
transparent:true,
typeid:7,
uuid:"DD4D18C5-7309-4C8C-B374-91D22AB261A3"
},
{
cssPosition:"545,15,-1,15,253,40",
dataProviderID:"shippeddate",
displayType:5,
formIndex:3,
name:"shippeddate",
typeid:4,
uuid:"DDA077DB-A964-4F72-B312-1968D834AC66"
},
{
cssPosition:"590,15,-1,15,120,40",
formIndex:21,
name:"shipvia_label",
text:"Shipvia",
transparent:true,
typeid:7,
uuid:"DFC0263B-E9CC-4621-B53A-B5B8DDF8D68B"
},
{
cssPosition:"681,15,-1,15,142,23",
formIndex:22,
json:{
cssPosition:{
bottom:"-1",
height:"23",
left:"15",
right:"15",
top:"681",
width:"142"
},
formIndex:22,
styleClass:"h5 text-tertiary",
text:"DELIVERY ADDRESS"
},
name:"label_deliveryAddress",
styleClass:"h5 text-tertiary",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E3210C2D-486F-459F-A580-4A780AFEDE14"
},
{
cssPosition:"60,15,-1,15,86,20",
formIndex:11,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"15",
right:"15",
top:"60",
width:"86"
},
formIndex:11,
styleClass:"h5 text-tertiary",
text:"INFO"
},
name:"label_info",
styleClass:"h5 text-tertiary",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"FBE4E3A3-5128-493E-A4BF-206BF8C48D06"
}
],
name:"orderEditMobile",
onRecordSelectionMethodID:"99F7E369-41CD-4919-A98E-557E48C9A100",
typeid:3,
uuid:"14E29ABC-4673-4E19-826F-262A3A5899B6"