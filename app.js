let myJsons = [
  "qanda",
  "abk",
  "osi",
  "abkur",
  "cmd",
  "security",
  "fileformat",
  "industrie4",
  "ipv6",
  "ki",
  "pm",
  "paradigm",
  "sql",
  "vgm",
  "wkp",
];
myFuncArray = [
  showQandA,
  showAbk,
  showOsi,
  showAbkur,
  showCmd,
  showSecurity,
  showFileformat,
  showIndustrie4,
  showIpv6,
  showKi,
  showPm,
  showParadigm,
  showSql,
  showVgm,
  showWkp,
]
let myPages = {};
let myFuncsObject = {};
for (var i = 0; i < myJsons.length; i++) {
  myPages[myJsons[i]] = myJsons[i] + ".json";
  myFuncsObject[myJsons[i]] = myFuncArray[i];
}
console.log(myPages);
let responseObj = {};
let request = new XMLHttpRequest();
for (var i = 0; i < myJsons.length; i++) {
  request.open("GET", myPages[myJsons[i]], false);
  request.send(null);
  responseObj[myJsons[i]] = JSON.parse(request.responseText);
  // console.log(request.responseText);
}
let anchorElements = {};
let anchors = document.getElementById("anchors");
for (var i = 0; i < myJsons.length; i++) {
  anchorElements[myJsons[i] + "TabDiv"] = document.createElement("a");
  anchorElements[myJsons[i] + "TabDiv"].setAttribute("id", myJsons[i] + "Tab");
  anchorElements[myJsons[i] + "TabDiv"].innerText = myJsons[i];
  anchorElements[myJsons[i] + "TabDiv"].className = "nav-link";
  anchorElements[myJsons[i] + "TabDiv"].style.cursor = "pointer";
  let showTabContentId = myJsons[i] + "TabContent";
  anchorElements[myJsons[i] + "TabDiv"].onclick = function(){showTabContent(showTabContentId)};
  document.getElementById(showTabContentId);
  console.log(anchorElements[myJsons[i] + "TabDiv"]);
  anchors.appendChild(anchorElements[myJsons[i] + "TabDiv"]);
}

let tabContentIds = [];
for (let i = 0; i < myJsons.length; i++) {
  tabContentIds[i] = myJsons[i] + "TabContent";
    if (tabContentIds[i] === "qandaTabContent") {
      document.getElementById(tabContentIds[i]).className = "container";
    }else{
      document.getElementById(tabContentIds[i]).className = "d-none";

    }
}
function showTabContent(tabContentId) {
  let tabContent = tabContentId;
  console.log(tabContent);
  console.log(tabContentIds);
  for (let i = 0; i < myJsons.length; i++) {
    if (tabContentIds[i] === tabContentId) {
      document.getElementById(tabContentIds[i]).className = "container";
      console.log(tabContentIds[i]);
      myFuncsObject[myJsons[i]]();

    }else{
      document.getElementById(tabContentIds[i]).className = "d-none";
      console.log("doesn't!!");
    }
  }
}
for (let i = 0; i < anchorElements.length; i++) {
  anchorElements[i].onclick = function () {
    n(tabIds[i]);
  };
}
// QandA elements
console.log(responseObj);
let QandA = responseObj.start;
let title_element = document.getElementById("title");
let question_element = document.getElementById("question");
let answer_element = document.getElementById("answer");
let ranMax = responseObj.qanda.length;
//abkur elements
let abkur_element = document.getElementById("abkur");
let abkurName_element = document.getElementById("abkurName");
let abkur_definition_element = document.getElementById("abkurdefinition");
//abk elements
let abk_element = document.getElementById("abk");
let abkName_element = document.getElementById("abkName");
//cmd elements
let cmd_Name_element = document.getElementById("cmdName");
let cmd_definition_element = document.getElementById("cmddefinition");
//security elements
let security_Name_element = document.getElementById("securityName");
let security_definition_element = document.getElementById("securitydefinition");
//fileformat elements
let fileformat_Name_element = document.getElementById("fileformatName");
let fileformat_definition_element = document.getElementById("fileformatdefinition");
//industrie4 elements
let industrie4_Name_element = document.getElementById("industrie4Name");
let industrie4_definition_element = document.getElementById("industrie4definition");
//IPv6 elements
let ipv6_q_element = document.getElementById("ipv6q");
let ipv6_a_element = document.getElementById("ipv6a");
//ki elements
let ki_q_element = document.getElementById("kiq");
let ki_a_element = document.getElementById("kia");
//pm elements
let pm_q_element = document.getElementById("pmq");
let pm_a_element = document.getElementById("pma");
//paradigm elements
let paradigm_paradigm_element = document.getElementById("paradigmparadigm");
let paradigm_languages_element = document.getElementById("paradigmlanguages");
//sql elements
let sql_Name_element = document.getElementById("sqlName");
let sql_definition_element = document.getElementById("sqldefinition");
//vgm elements
let vgm_Name_element = document.getElementById("vgmName");
let vgm_definition_element = document.getElementById("vgmdefinition");
//wkp elements
let port_element = document.getElementById("wkpPort");
let protocol_element = document.getElementById("wkpProtocol");
//RanId-------------------------------------------------------
function getRanId(arr) {
  const randomIndex = Math.round(Math.random() * arr.length);
  if (randomIndex === 0) {
    return arr[randomIndex].id;
  }
  return arr[randomIndex - 1].id;
}
//QandA-------------------------------------------------------
function showQandA() {
  const ranID = getRanId(responseObj.qanda);
  console.log("Q_ID: ", ranID);
  let ranTitle = JSON.stringify(
    responseObj.qanda.find((obj) => obj.id === ranID).title
  );
  let ranAnswer = JSON.stringify(
    responseObj.qanda.find((obj) => obj.id === ranID).answer
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranQuestion = JSON.stringify(
    responseObj.qanda.find((obj) => obj.id === ranID).question
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  title_element.innerHTML = "";
  if (ranTitle === "1") {
    title_element.innerHTML =
      "<small>Beurteilen marktgängiger IT-Systeme und Lösungen</small>";
  } else if (ranTitle === "2") {
    title_element.innerHTML =
      "<small>Entwickeln, Erstellen und Betereuen von IT-Lösungen</small>";
  } else if (ranTitle === "3") {
    title_element.innerHTML =
      "<small>Planen, Vorbreiten und Durchführen von Arbeitsaufgaben</small>";
  } else if (ranTitle === "4") {
    title_element.innerHTML =
      "<small>Auftragsabschluss und Leistungserbringung</small>";
  } else if (ranTitle === "5") {
    title_element.innerHTML = "<small>Qualitätssichernde Maßnahmen</small>";
  } else if (ranTitle === "6") {
    title_element.innerHTML =
      "<small>Informieren und Beraten von Kunden und Kundinnen</small>";
  } else if (ranTitle === "7") {
    title_element.innerHTML =
      "<small>IT-Sicherheit und Datenschutz, Ergonomie</small>";
  }
  question_element.innerHTML = "";
  question_element.innerHTML = `${ranQuestion}`;
  answer_element.innerHTML = "";
  answer_element.innerHTML += `${ranAnswer}`;
}
//Abkur-------------------------------------------------------
function showAbkur(){
  const ranID = getRanId(responseObj.abkur);
  console.log(ranID);
  let ranAbkur = (JSON.stringify(responseObj.abkur.find((obj) => obj.id === ranID).abk).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranName = (JSON.stringify(responseObj.abkur.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.abkur.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  abkur_element.innerHTML = "";
  abkur_element.innerHTML = `${ranAbkur}`;
  abkurName_element.innerHTML = "";
  abkurName_element.innerHTML = `${ranName}`;
  abkur_definition_element.innerHTML = "";
  abkur_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//OSI---------------------------------------------------------
function showOsi(){
  console.log("not function for osi yet");
}
//Abk---------------------------------------------------------
function showAbk(){
  const ranID = getRanId(responseObj.abk);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.abk.find((obj) => obj.id === ranID).abk).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.abk.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  abk_element.innerHTML = "";
  abk_element.innerHTML = `${ranName}`;
  abkName_element.innerHTML = "";
  abkName_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//Cmd---------------------------------------------------------
function showCmd(){
  const ranID = getRanId(responseObj.cmd);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.cmd.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.cmd.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  cmd_Name_element.innerHTML = "";
  cmd_Name_element.innerHTML = `${ranName}`;
  cmd_definition_element.innerHTML = "";
  cmd_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);

}
//Security----------------------------------------------------
function showSecurity(){
  const ranID = getRanId(responseObj.security);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.security.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.security.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  security_Name_element.innerHTML = "";
  security_Name_element.innerHTML = `${ranName}`;
  security_definition_element.innerHTML = "";
  security_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);

}
//fileformat----------------------------------------------------
function showFileformat(){
  const ranID = getRanId(responseObj.fileformat);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.fileformat.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.fileformat.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  fileformat_Name_element.innerHTML = "";
  fileformat_Name_element.innerHTML = `${ranName}`;
  fileformat_definition_element.innerHTML = "";
  fileformat_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//industrie4----------------------------------------------------
function showIndustrie4(){
  const ranID = getRanId(responseObj.industrie4);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.industrie4.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.industrie4.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  industrie4_Name_element.innerHTML = "";
  industrie4_Name_element.innerHTML = `${ranName}`;
  industrie4_definition_element.innerHTML = "";
  industrie4_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//IPv6----------------------------------------------------------
function showIpv6(){
  const ranID = getRanId(responseObj.ipv6);
  console.log(ranID);
  let ranQ = (JSON.stringify(responseObj.ipv6.find((obj) => obj.id === ranID).frage).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranA = (JSON.stringify(responseObj.ipv6.find((obj) => obj.id === ranID).antwort).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranA, ranQ);
  ipv6_q_element.innerHTML = "";
  ipv6_q_element.innerHTML = `${ranQ}`;
  ipv6_a_element.innerHTML = "";
  ipv6_a_element.innerHTML += `${ranA}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);

}
//ki----------------------------------------------------------
function showKi(){
  const ranID = getRanId(responseObj.ki);
  console.log(ranID);
  let ranQ = (JSON.stringify(responseObj.ki.find((obj) => obj.id === ranID).question).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranA = (JSON.stringify(responseObj.ki.find((obj) => obj.id === ranID).answer).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranA, ranQ);
  ki_q_element.innerHTML = "";
  ki_q_element.innerHTML = `${ranQ}`;
  ki_a_element.innerHTML = "";
  ki_a_element.innerHTML += `${ranA}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//pm----------------------------------------------------------
function showPm(){
  const ranID = getRanId(responseObj.pm);
  console.log(ranID);
  let ranQ = (JSON.stringify(responseObj.pm.find((obj) => obj.id === ranID).question).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranA = (JSON.stringify(responseObj.pm.find((obj) => obj.id === ranID).answer).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranA, ranQ);
  pm_q_element.innerHTML = "";
  pm_q_element.innerHTML = `${ranQ}`;
  pm_a_element.innerHTML = "";
  pm_a_element.innerHTML += `${ranA}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//paradigm----------------------------------------------------
function showParadigm(){
  const ranID = getRanId(responseObj.paradigm);
  console.log(ranID);
  let ranParadigm = (JSON.stringify(responseObj.paradigm.find((obj) => obj.id === ranID).paradigma).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranLanguages = (responseObj.paradigm.find((obj) => obj.id === ranID).sprachen);
  console.log(ranParadigm, ranLanguages);
  paradigm_paradigm_element.innerHTML = "";
  paradigm_paradigm_element.innerHTML = `${ranParadigm}`;
  paradigm_languages_element.innerHTML = "";
for (var i = 0; i < ranLanguages.length; i++) {
  paradigm_languages_element.innerHTML += `<li>${ranLanguages[i]}</li>`;
}
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//sql-----------------------------------------------------------
function showSql(){
  const ranID = getRanId(responseObj.sql);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.sql.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.sql.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  sql_Name_element.innerHTML = "";
  sql_Name_element.innerHTML = `${ranName}`;
  sql_definition_element.innerHTML = "";
  sql_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//vgm-----------------------------------------------------------
function showVgm(){
  const ranID = getRanId(responseObj.vgm);
  console.log(ranID);
  let ranName = (JSON.stringify(responseObj.vgm.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.vgm.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  vgm_Name_element.innerHTML = "";
  vgm_Name_element.innerHTML = `${ranName}`;
  vgm_definition_element.innerHTML = "";
  vgm_definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
//Wkp---------------------------------------------------------
function showWkp(){
  const ranID = getRanId(responseObj.wkp);
  console.log(ranID);
  let ranPort = (JSON.stringify(responseObj.wkp.find((obj) => obj.id === ranID).port).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranProtocol = (JSON.stringify(responseObj.wkp.find((obj) => obj.id === ranID).protocol).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranPort, ranProtocol);
  port_element.innerHTML = "";
  port_element.innerHTML = `${ranPort}`;
  protocol_element.innerHTML = "";
  protocol_element.innerHTML += `${ranProtocol}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);

}


showQandA();
