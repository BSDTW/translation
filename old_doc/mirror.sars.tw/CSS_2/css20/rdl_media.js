var sProductName='Rainer\'s Handbook';
var sTrademark='Rainer\'s Handbook';
var sHomeURL='mailto:rainersu@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh='蘇昱作品·版權所有';
var sCopyrightEn='&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL='rdl_indexlist.css';
var sParentURL='rdl_index.html';
var sParentNote='返回首頁';
var sPrefix='';
var sTitleText='';

var collFriendLists;
var collHeadNotes;
var collListItems;
var collAllTRIEs=new Array();

var collTRIEs=new Array(
new Array('All','90'),
new Array('Unsupported','80'),
new Array('IE6.0','60'),
new Array('IE5.5','55'),
new Array('IE5.0','50'),
new Array('IE4.0','40')
);

var oListTable;


function rdlMakeOption(sOption,sPrefix,oSelect){

var oOption=document.createElement('option');
oSelect.options.add(oOption,0);

if (sOption=='0') {
oOption.innerText='------------------------------------------';
oOption.style.color='#99AACC';
oOption.value='0';
} 
else {
oOption.innerText='      '+sOption;
oOption.value=sPrefix+(sOption.replace(/\W/g,'')).toLowerCase()+'.html';
}

}


function rdlMakeOptions(collFriends,sPrefix,sFriendTitle,oSelect){

if (collFriends==null || collFriends.length==0) return;
//rdlMakeOption('No '+sFriendTitle+' or Init false...','',oSelect);else
for (mLoop=0;mLoop< collFriends.length;mLoop++) rdlMakeOption(collFriends[mLoop],sPrefix,oSelect);
rdlMakeOption('0','',oSelect);

}


function doSelect(e){
with (document.all('idSelect')){
var sValue=options[selectedIndex].value;
options[0].selected=true;
}
if (sValue!='0') window.location=sValue;
}


function doSortIE(e) {

with (document.all('idSortSelect')){
var sValue=options[selectedIndex].value;
}

//alert(sValue.replace(/\D/g,''));

for (sLoop=0;sLoop<collAllTRIEs.length;sLoop++)  {
if (collAllTRIEs[sLoop].id=='idTRHead') { collAllTRIEs[sLoop].style.display='block';continue; }
var iValue=parseInt(sValue);
var iTRID=parseInt(collAllTRIEs[sLoop].id.replace(/\D/g,''));
if (iValue==80) { if (iValue==iTRID) collAllTRIEs[sLoop].style.display='block'; else collAllTRIEs[sLoop].style.display='none'; continue; }
if (iValue>=iTRID) collAllTRIEs[sLoop].style.display='block'; else collAllTRIEs[sLoop].style.display='none';
}

}

function rdlWindowLoad(e){

with (document) {defaultCharset=charset='gb2312';createStyleSheet(sStyleURL);title=sProductName;}

var oHeadTable=document.createElement('<table id="idHeadTable">');
document.body.appendChild(oHeadTable);
oHeadTable.cellPadding=oHeadTable.cellSpacing=0;
var oHeadTR=oHeadTable.insertRow();
var oTrademarkTD=document.createElement('<td id="idTrademarkTD">');
oHeadTR.appendChild(oTrademarkTD);
var oTrademarkA=document.createElement('<a>');
oTrademarkTD.appendChild(oTrademarkA);
with (oTrademarkA) {innerHTML=sTrademark;href=sHomeURL;target='_blank';}
var oSelectTD=document.createElement('<td id="idSelectTD">');
oHeadTR.appendChild(oSelectTD);
var oParentA=document.createElement('<a>');
oSelectTD.appendChild(oParentA);
with (oParentA) {innerText=sParentNote;href=sParentURL;insertAdjacentText('afterEnd',' | 相關內容: ');}
var oFriendSelect=document.createElement('<select id="idSelect">');
oSelectTD.appendChild(oFriendSelect);
rdlMakeOptions(collFriendLists,'l_','Lists',oFriendSelect);

var oOption=document.createElement('option');
oFriendSelect.options.add(oOption,0);
with (oOption) {innerText='See Also...';value='0';selected=true;}

var oContent=document.createElement('<div id="idContent">');
document.body.appendChild(oContent);

var oNoteTable=document.createElement('table');
oContent.appendChild(oNoteTable);
var oNoteTR=oNoteTable.insertRow();
var oNoteTD=document.createElement('<td id=idNoteTD>');
oNoteTR.appendChild(oNoteTD);
oNoteTD.innerText=sTiteText;
var oSortTD=document.createElement('td');
oNoteTR.appendChild(oSortTD);
var oListModeA=document.createElement('a');
oSortTD.appendChild(oListModeA);
with (oListModeA) {className='cssListModeA';href=window.location.href.replace('_com.html','.html');innerText='模式切換';}
var oSortSelect=document.createElement('<select id="idSortSelect">');
oSortTD.appendChild(oSortSelect);
oSortSelect.insertAdjacentText('beforeBegin',' | 過濾條件: ');

for (eLoop=0;eLoop<collTRIEs.length;eLoop++) {
var oOption=document.createElement('option');
oSortSelect.options.add(oOption,0);
with (oOption) { innerText=collTRIEs[eLoop][0];value=collTRIEs[eLoop][1]; }
}

oListTable=document.createElement('<table id="idListTable">');
oContent.appendChild(oListTable);
with (oListTable) cellPadding=cellSpacing=1;

var oListHead=oListTable.createTHead();
var oListTR=oListHead.insertRow();
for (tLoop=0;tLoop<collHeadNotes.length;tLoop++) {
var oListTD=oListTR.insertCell();
with (oListTD) {innerText=collHeadNotes[tLoop];className='cssListHead';noWrap=true;}
}

for (tLoop=0;tLoop<collListItems.length;tLoop++) {
var collItem=collListItems[tLoop];
var oListTR=document.createElement('<tr id=idTR'+collItem[0]+'>');
oListTable.tBodies[0].appendChild(oListTR);
collAllTRIEs[tLoop]=oListTR;     /* 在JScript5.5+中可以使用collAllTRIEs.push(oListTR); */
var oListTD=oListTR.insertCell();
if (collItem[0]=='Head') { with (oListTD) {colSpan=collHeadNotes.length;innerText=collItem[1];} }
else {
var oListA=document.createElement('a');
with (oListTD) {noWrap=true;appendChild(oListA);}
with (oListA) {innerText=collItem[1];}    /* href=(sPrefix+collItem[1].replace(/\W/g,'')).toLowerCase()+'.html';} */
for (pLoop=2;pLoop<collItem.length;pLoop++) {
var oListTD=oListTR.insertCell();
oListTD.innerText=collItem[pLoop];
}
}
}

var oFootnote=document.createElement('<div id="idFootnote">');
oContent.appendChild(oFootnote);
var oCopyright=document.createElement('<div id="idCopyright">');
oContent.appendChild(oCopyright);
oCopyright.innerHTML=sCopyrightEn;
oCopyright.insertAdjacentText('beforeBegin',sCopyrightCh);

oFriendSelect.onchange=doSelect;
oSortSelect.onchange=doSortIE;

}


window.onload=rdlWindowLoad;


/**************************************
 蘇昱(Rainer Su)版權所有，保留所有權利。
**************************************/