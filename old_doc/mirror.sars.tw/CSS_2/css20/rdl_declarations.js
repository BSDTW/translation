var sProductName='Rainer\'s Handbook';
var sTrademark='Rainer\'s Handbook';
var sHomeURL='mailto:rainersu@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh='蘇昱作品·版權所有';
var sCopyrightEn='&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL='rdl_index.css';
var sParentURL='l_declarations.html';
var sParentNote='聲明清單';

var collFriendDeclarations;

var collIE40,collIE50,collIE55,collIE60;

var oElementTable;
var sCode=sStyle=sScript=sPlusCode='';
var oShowCode,oExecCode,oCodeArea;
var bRunCode=true;
var bElements=true;

var iWinWidth=380;
var iWinHeight=220;



function rdlMakeElements(collElements,sIEVersion){

if (collElements==null || oElementTable==null || collElements.length==0) return;
var oIETR=oElementTable.insertRow();

var oIETD=oIETR.insertCell();
with (oIETD) {innerText='IE'+sIEVersion+'+';className='cssIETD';}

var oIETD=oIETR.insertCell();
for (bLoop=0;bLoop<collElements.length;bLoop++){
var oIEA=document.createElement('span');
oIETD.appendChild(oIEA);
with (oIEA) {innerText=collElements[bLoop];className='cssIEA';}
}

}



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


function rdlMakeOptions(collFriends,sPrefix,oSelect){

if (collFriends==null || collFriends.length==0) return;
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


function rdlWindowLoad(e){

with (document) {defaultCharset=charset='gb2312';createStyleSheet(sStyleURL);title=sProductName;}

var oContent=document.all('idContent');

var oHeadTable=document.createElement('<table id="idHeadTable">');
document.body.insertBefore(oHeadTable,oContent);
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

rdlMakeOptions(collFriendDeclarations,'i_',oFriendSelect);

var oOption=document.createElement('option');
oFriendSelect.options.add(oOption,0);
with (oOption) {innerText='See Also...';value='0';selected=true;}

if (bElements) {
var oElementDIV=document.createElement('div');
oContent.appendChild(oElementDIV);
with (oElementDIV) {className='cssColumnTitle';innerText='應用於：';}

oElementTable=document.createElement('<table id="idElementTable">');
oContent.appendChild(oElementTable);
with (oElementTable) {cellPadding=cellSpacing=1;className='cssCommonTable';}

rdlMakeElements(collIE40,'4.0');
rdlMakeElements(collIE50,'5.0');
rdlMakeElements(collIE55,'5.5');
rdlMakeElements(collIE60,'6.0');
}

var oFootnote=document.createElement('<div id="idFootnote">');
oContent.appendChild(oFootnote);
var oCopyright=document.createElement('<div id="idCopyright">');
oContent.appendChild(oCopyright);
oCopyright.innerHTML=sCopyrightEn;
oCopyright.insertAdjacentText('beforeBegin',sCopyrightCh);

oFriendSelect.onchange=doSelect;

//resizeTo(800,600);
}

window.onload=rdlWindowLoad;


/**************************************
 蘇昱(Rainer Su)版權所有，保留所有權利。
**************************************/