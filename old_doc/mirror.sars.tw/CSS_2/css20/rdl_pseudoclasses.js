var sProductName='Rainer\'s Handbook';
var sTrademark='Rainer\'s Handbook';
var sHomeURL='mailto:rainersu@hotmail.com?subject=Hello , Rainer ...';
var sCopyrightCh='蘇昱作品·版權所有';
var sCopyrightEn='&copy;2002 Rainer Su . All rights reserved .';
var sStyleURL='rdl_index.css';
var sParentURL='l_pseudoclasses.html';
var sParentNote='偽類清單';

var collFriendProperties;
var collFriendDeclarations;
var collFriendAtRules;
var collFriendElements;
var collFriendClasses;
var collFriendUnits;

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


rdlMakeOptions(collFriendClasses,'p_',oFriendSelect);
rdlMakeOptions(collFriendElements,'p_',oFriendSelect);
rdlMakeOptions(collFriendAtRules,'a_',oFriendSelect);
rdlMakeOptions(collFriendDeclarations,'i_',oFriendSelect);
rdlMakeOptions(collFriendProperties,'c_',oFriendSelect);
rdlMakeOptions(collFriendUnits,'u_',oFriendSelect);

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

if (sCode!=null && sCode!='') {
var oCodeDIV=document.createElement('<div id="idCodeDIV">');
oContent.appendChild(oCodeDIV);

oShowCode=document.createElement('<input id="idShowCode" type="button">');
oCodeDIV.appendChild(oShowCode);
with (oShowCode) {value='察看代碼';onclick=showCode;}

if (bRunCode) {
oExecCode=document.createElement('<input id="idExecCode" type="button">');
oCodeDIV.appendChild(oExecCode);
with (oExecCode) {value='運行示例';onclick=execCode;}
}

oCodeArea=document.createElement('<div id="idCodeArea">');
oCodeDIV.appendChild(oCodeArea);
oCodeArea.innerText=sStyle+'\n'+sScript+'\n'+sCode+sPlusCode;
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

function showCode(e){
with (oCodeArea.style) 
{if (display!='block') display='block';else display='none';}
with (oShowCode) 
{if (value!='察看代碼') value='隱藏代碼';else value='察看代碼';}
}

function execCode(e){
var sHTML=
'<html xmlns:rdl>\n<head>\n<meta http-equiv="Content-Type" content="text\/html; charset=big5">\n<title>'+sProductName+
'<\/title>\n<style>\n'+
'body{margin:0px;padding:16px;background:#FFFFFF;overflow:auto;}\n'+
'body,table,input,select,textarea,a{font-family:verdana,tahoma,arial;font-size:11px;color:#000000;word-break:break-all;}\n'+
'table,img{border:0px;}\n'+
'a{text-decoration:none;color:#003399;}\n'+
'a:hover{color:#000000;text-decoration:underline;}\n'+
'#id_div3{padding-top:8px;border-top:1px solid #000000;line-height:15px;}\n'+
'#id_span3{font-size:10px;font-family:tahoma;}\n'+
'<\/style>\n'+sStyle+'\n'+sScript+
'\n<\/head>\n<body>\n'+sCode+
'\n<br>&nbsp;<br>&nbsp;<br>\n<div id=id_div3>'+sCopyrightCh+
'<br><span id=id_span3>'+sCopyrightEn+
'<\/span><\/div>\n<\/body>\n<\/html>';
var sWinName=document.all('idTitleName').innerText.replace(/\W/g,'');
var demoWin=window.open('',sWinName,'resizable=1');
demoWin.resizeTo(iWinWidth,iWinHeight);
demoWin.moveTo(Math.ceil((window.screen.availWidth-iWinWidth)/2),Math.ceil((window.screen.availHeight-iWinHeight)/2));
demoWin.document.open('text/html','replace');
//demoWin.document.clear();
demoWin.document.write(sHTML);
//demoWin.document.createStyleSheet('rdl_method.css');
//demoWin.document.close();
demoWin.location.reload();
demoWin.focus();
}

window.onload=rdlWindowLoad;


/**************************************
 蘇昱(Rainer Su)版權所有，保留所有權利。
**************************************/