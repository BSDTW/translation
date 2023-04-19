
var sClearEvents='event.returnValue=false;return false;';
var oMenuBar;
var arrActiveMenus=new Array();
var sBlurColor='#FFFFFF';
var sHoverColor='#FFCC00';
var sSubImage='url(images/rdl_submenu.gif)';
var sMenuBorder='1px solid #FFFFFF';
var iOffsetLeft=0;
var iBaseZIndex=4;
var sDefaultItemCode='return false;';

var arrMenuBarItems=new Array(
new Array('','','return false;'),
new Array('樣式表中文手冊 ','index.htm',sDefaultItemCode),
new Array('︱','','return false;'),
new Array('附錄','index.htm',sDefaultItemCode),
new Array('︱','','return false;'),
new Array('我的信箱','index.htm',sDefaultItemCode),
new Array('︱','','return false;'),
new Array('幫助','index.htm',sDefaultItemCode),
new Array(' ','','return false;')
);

var arrMenus5=new Array(
new Array('rainersu@hotmail.com','mailto:rainersu@hotmail.com','','border')
);

var arrMenus7=new Array(
new Array('關於此手冊','rdl_readme.html','','border'),
new Array('樣式表簡介','rdl_css.html','',''),
new Array('最終用戶協議','rdl_rain1977.html','','')
);

var arrMenus3=new Array(
new Array('顏色表(Color Tables)','z_color.html','','border'),
new Array('設備類型(Media Types)','z_media.html','',''),
new Array('特殊文本和字符實體','z_symbol.html','',''),
new Array('語言代碼(Language Codes)','z_languagecodes.html','',''),
new Array('字符集識別','z_charset.html','',''),
new Array('附加命名實體','z_additional.html','',''),
new Array('ISO Latin-1字符集','z_iso.html','','')
);

var arrMenus1=new Array(
new Array('簡介  Introduction','submenu','window.location="l_introduction.html";return false;','border'),
new Array('屬性  Properties','submenu','window.location="l_properties.html";return false;',''),
new Array('選擇符  Selectors','l_selectors.html','',''),
new Array('偽類  Pseudo-Classes','l_pseudoclasses.html','',''),
new Array('偽對像  Pseudo-Elements','l_pseudoelements.html','',''),
new Array('濾鏡  Filters','submenu','window.location="l_filters.html";return false;',''),
new Array('單位 Units','submenu','window.location="l_units.html";return false;',''),
new Array('規則  At-Rules','l_atrules.html','',''),
new Array('聲明  Declaration','l_declarations.html','','')
);

var arrMenus16=new Array(
new Array('長度  Length','d_length.html','','border'),
new Array('顏色  Color','d_color.html','',''),
new Array('角度  Angle','d_angle.html','',''),
new Array('時間  Time','d_time.html','',''),
new Array('頻率  Frequency','d_frequency.html','','')
);

var arrMenus15=new Array(
new Array('界面濾鏡  Procedural Surfaces','d_surfaces.html','','border'),
new Array('靜態濾鏡  Static Filters','d_static.html','',''),
new Array('轉換濾鏡  Transitions','d_transitions.html','','')
);

var arrMenus10=new Array(
new Array('樣式表簡介','rdl_css.html',sDefaultItemCode,'border')
);

var arrMenus11=new Array(
new Array('字體  Font','d_font.html','','border'),
new Array('文本  Text','d_text.html','',''),
new Array('背景  Background','d_background.html','',''),
new Array('定位  Positioning','d_positioning.html','',''),
new Array('尺寸  Dimensions','d_dimensions.html','',''),
new Array('佈局  Layout','d_layout.html','',''),
new Array('外補丁  Margins','d_margins.html','',''),
new Array('輪廓  Outlines','d_outlines.html','',''),
new Array('邊框  border','d_border.html','',''),
new Array('內容  Generated Content','d_content.html','',''),
new Array('內補丁  Paddings','d_paddings.html','',''),
new Array('列表  Lists','d_lists.html','',''),
new Array('表格  table','d_table.html','',''),
new Array('滾動條  Scrollbar','d_scrollbar.html','',''),
new Array('打印  Printing','d_printing.html','',''),
new Array('聲音  Aural','d_aural.html','',''),
new Array('其它  Classification','d_classification.html','','')
);


function showMenu(e){
event.cancelBubble=true;
var oItem=event.srcElement;
if (oItem.id.indexOf('idItem')==-1) return;
if (oItem.href.length>4) oItem.style.color=sHoverColor;

var sTempID=oItem.id.replace('Item','Menu');
var oMenu=document.getElementById(sTempID);
if (oMenu==null) return;

var oTempElement=oItem;
if (oItem.parentElement==oMenuBar) {var iTop=oTempElement.offsetHeight;var iLeft=0+iOffsetLeft;}
else {var iLeft=oTempElement.offsetWidth+iOffsetLeft;var iTop=0;}

while (oTempElement!=null){
iTop+=oTempElement.offsetTop;
iLeft+=oTempElement.offsetLeft;
oTempElement=oTempElement.parentElement;
}

with(oMenu.style) {
posTop=iTop;
posLeft=iLeft;
display='block';
}

var iMenuBarPlace=oMenuBar.offsetLeft+oMenuBar.offsetWidth;
var iMenuPlace=iLeft+oMenu.offsetWidth;
//document.title=iMenuBarPlace+','+iMenuPlace;

if (iMenuPlace>=iMenuBarPlace){
var arrTemp=oMenu.id.split('_');
if (arrTemp.length>2) {
var sMenuID=oMenu.id.slice(0,oMenu.id.length-2);
var oParentMenu=document.getElementById(sMenuID);
if (oParentMenu!=null) {iLeft=oParentMenu.offsetLeft-oMenu.offsetWidth-iOffsetLeft;}
}
else  {
iLeft=iMenuBarPlace-oMenu.offsetWidth+iOffsetLeft;
}
oMenu.style.posLeft=iLeft;
}

}



function hideMenu(e){

event.cancelBubble=true;

var oToElement=event.toElement;
if (oToElement==null || oToElement.id.indexOf('idItem')==-1) {clearMenus();return;}

var oSrcElement=event.srcElement;
oSrcElement.style.color=sBlurColor;
var sMenuID=oSrcElement.id.replace('Item','Menu');
var oMenu=document.getElementById(sMenuID);
if (oMenu!=null && !oMenu.contains(oToElement)) oMenu.style.display='none';
if (oMenu!=null && oMenu.contains(oToElement)) oSrcElement.style.color=sHoverColor;

if (oSrcElement.id.length>oToElement.id.length) {var sLID=oSrcElement.id;sSID=oToElement.id;}
else {var sLID=oToElement.id;sSID=oSrcElement.id;}
//document.title=sLID+'-'+sSID

if (sLID.length-sSID.length>3) {clearMenus();return;}  /* 修正從子菜單的子菜單直接移到menubar上的項目時的BUG */

var sItemID=sLID.slice(0,sLID.length-2);
var oItem=document.getElementById(sItemID);

if (sSID.indexOf(sItemID)!=-1) {
if (oItem!=null) oItem.style.color=sHoverColor;
return;
}

var sMenuID=sItemID.replace('Item','Menu');
//document.title=sLID+'-'+sSID+'-'+sMenuID
var oMenu=document.getElementById(sMenuID);

if (oMenu!=null) oMenu.style.display='none';
if (oItem!=null) oItem.style.color=sBlurColor;

}



function clearMenus(){

var collAnchors=document.anchors;

for (n=0;n<collAnchors.length;n++) {
if (collAnchors[n].className=='cssMenuA') collAnchors[n].style.color=sBlurColor;
}

for (m=0;m<arrActiveMenus.length;m++){
document.all(arrActiveMenus[m]).style.display='none';
}

}



function createMenu(sValue,arrItems,iWidth){

var oTempMenu=document.createElement('<div id=idMenu_'+sValue+'>');
document.body.appendChild(oTempMenu);
arrActiveMenus[arrActiveMenus.length]=oTempMenu.id;    /* 在JScript5.5+中可以使用arrActiveMenus.push(oTempMenu.id); */

with (oTempMenu) {
className='cssMenu';
style.posWidth=iWidth;
style.zIndex=iBaseZIndex+id.length;
onselectstart=ondragstart=new Function(sClearEvents);
}

for (i=0;i<arrItems.length;i++){
var oTempA=document.createElement('<a id=idItem_'+sValue+'_'+i.toString()+'>');
oTempMenu.appendChild(oTempA);
with (oTempA) {
className='cssMenuA';
style.posWidth=iWidth;
innerText=arrItems[i][0];
href=arrItems[i][1];
/*if (href=='submenu') style.backgroundImage=sSubImage;*/
if (arrItems[i][3]=='border') style.borderTop=sMenuBorder;
onmouseover=showMenu;
onmouseout=hideMenu;
if (arrItems[i][2]!='') onclick=new Function(arrItems[i][2]);
}
}

}



function createMenuBar(){

oMenuBar=document.createElement('<div id=idMenuBar nowrap>');
document.body.appendChild(oMenuBar);

for (i=0;i<arrMenuBarItems.length;i++){
var oTempA=document.createElement('<a id=idItem_'+i.toString()+'>');
oMenuBar.appendChild(oTempA);
with (oTempA) {
className='cssMenuA';
innerText=arrMenuBarItems[i][0];
if (arrMenuBarItems[i][1]!='') href=arrMenuBarItems[i][1];
onmouseover=showMenu;
onmouseout=hideMenu;
if (arrMenuBarItems[i][2]!='') onclick=new Function(arrMenuBarItems[i][2]);
}
}

}


function window.onload(){

createMenu('1',arrMenus1,200);
createMenu('3',arrMenus3,200);
createMenu('5',arrMenus5,200);
createMenu('7',arrMenus7,180);
createMenu('1_0',arrMenus10,200);
createMenu('1_1',arrMenus11,190);
createMenu('1_5',arrMenus15,210);
createMenu('1_6',arrMenus16,170);
createMenuBar();

}


/**************************************
 蘇昱(Rainer Su)版權所有，保留所有權利。
**************************************/
