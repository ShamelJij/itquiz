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
  "itGrundschutz",
  "IEEE",
  "firewall",
];
let myFuncArray = [
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
  showItGrundschutz,
  showIeee,
  showFirewall,
];
/*
$(document).ready(function () {
            // Simulate a delay for demonstration purposes
            setTimeout(function () {
                // Hide the loader
                $('#loader').addClass('hidden');
                // Show the content
                $('.content').removeClass('hidden');
            }, 3000); // Delay in milliseconds (3000ms = 3s)
        });
*/
            let myPages = {};
            let myFuncsObject = {};
            let responseObj = {};
 window.addEventListener("load", function () {
            console.log("It's loaded!");
            const loadingElement = document.getElementById("loader");
            const mainElement = document.getElementById("mainSection");

            // Show the loader
            loadingElement.classList.remove("hidden");
            mainElement.classList.add("hidden");

            // Simulate AJAX requests
            //let myJsons = ["exam1", "exam2"]; // Example array of exam names
            //let myFuncArray = [showQandA, showQandA]; // Example array of functions
            for (var i = 0; i < myJsons.length; i++) {
                myPages[myJsons[i]] = myJsons[i] + ".json";
                myFuncsObject[myJsons[i]] = myFuncArray[i];
            }
            let requestsCompleted = 0;

            for (var i = 0; i < myJsons.length; i++) {
                (function (i) {
                    let request = new XMLHttpRequest();
                    request.open("GET", myPages[myJsons[i]], true);
                    request.onreadystatechange = function () {
                        //if (request.readyState === 4 && request.status === 200) {
                            responseObj[myJsons[i]] = JSON.parse(request.responseText);
                            requestsCompleted++;
                            if (requestsCompleted === myJsons.length) {
                                // All requests are completed
                                // Hide the loader
                                loadingElement.classList.add("hidden");
                                // Show the content
                                mainElement.classList.remove("hidden");
                            }
                        //}
                    };
                    request.send();
                })(i);
            }
        });
let anchorElements = {};
let anchors = document.getElementById("anchors");
for (var i = 0; i < myJsons.length; i++) {
  anchorElements[myJsons[i] + "TabDiv"] = document.createElement("a");
  anchorElements[myJsons[i] + "TabDiv"].setAttribute("id", myJsons[i] + "Tab");
  anchorElements[myJsons[i] + "TabDiv"].innerText = myJsons[i];
  anchorElements[myJsons[i] + "TabDiv"].className = "nav-link";
  anchorElements[myJsons[i] + "TabDiv"].style.cursor = "pointer";
  let showTabContentId = myJsons[i] + "TabContent";
  anchorElements[myJsons[i] + "TabDiv"].onclick = function () {
    showTabContent(showTabContentId);
  };
  document.getElementById(showTabContentId);
  anchors.appendChild(anchorElements[myJsons[i] + "TabDiv"]);
}

let tabContentIds = [];
for (let i = 0; i < myJsons.length; i++) {
  tabContentIds[i] = myJsons[i] + "TabContent";
  if (tabContentIds[i] === "qandaTabContent") {
    document.getElementById(tabContentIds[i]).className = "container";
  } else {
    document.getElementById(tabContentIds[i]).className = "d-none";
  }
}
function showTabContent(tabContentId) {
  for (let i = 0; i < myJsons.length; i++) {
    if (tabContentIds[i] === tabContentId) {
      document.getElementById(tabContentIds[i]).className = "container";
      myFuncsObject[myJsons[i]]();
    } else {
      document.getElementById(tabContentIds[i]).className = "d-none";
    }
  }
}
for (let i = 0; i < anchorElements.length; i++) {
  anchorElements[i].onclick = function () {
    n(tabIds[i]);
  };
}
//search
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("resultsList");
const searchingDiv = document.getElementById("resultDiv");
const searchSize = document.getElementById("resultSize");
let searchTimeout;

function preformSearch() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const filteredData = responseObj["qanda"].filter(
    (item) =>
      item.question.toLowerCase().trim().includes(searchValue) ||
      item.answer.toLowerCase().trim().includes(searchValue)
  );
  displayResults(filteredData, searchValue);
}

function handleSearchInputChange() {
  clearTimeout(searchTimeout);
  if (searchInput.value == "") {
    searchList.innerHTML = "";
    searchSize.textContent = "";
    console.log("handle is empty again");
  }
  searchTimeout = setTimeout(preformSearch, 1000);
}

function showSearchingDiv() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (searchInput.value == "") {
        console.log("input is empty again");
      } else {
        searchList.innerHTML = "<div class='text-secondary'>suchen..</div>";
      }
      resolve();
    }, 20);
  });
}
searchInput.addEventListener("input", () => {
  showSearchingDiv()
    .then(() => handleSearchInputChange())
    .catch((error) => console.error("searching error", error));

  //console.log(filteredData);
});

function displayResults(results, input) {
  searchList.textContent = "";
  searchSize.textContent = "";
  const resultDiv = document.createElement("div");
  if (results.length === 0 || input == "") {
    if (input == "") {
      searchList.textContent = "";
      searchSize.textContent = "";
      return;
    }
    searchSize.textContent = "0";
    resultDiv.innerHTML = "<div class='text-danger'>kein Ergebnisse</div>";
    searchList.appendChild(resultDiv);
    return;
  }
  results.forEach((item) => {
    resultDiv.innerHTML += `
  <div class="border border-success m-2 p-2">
    <h5>id::${item.id}</h5>
    <p><div class='text-primary'>${item.question}</div><hr><div class='text-success'>${item.answer}</div></p>
  </div>`;
    searchSize.textContent = results.length;
    //searchList.innerText = resultDiv;
    //console.log(results);
    console.log("searching");

    searchList.appendChild(resultDiv);
  });
}
// QandA elements
let title_element = document.getElementById("title");
let question_element = document.getElementById("question");
let answer_element = document.getElementById("answer");
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
let fileformat_definition_element = document.getElementById(
  "fileformatdefinition"
);
//industrie4 elements
let industrie4_Name_element = document.getElementById("industrie4Name");
let industrie4_definition_element = document.getElementById(
  "industrie4definition"
);
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
//itGrundschutz elements
let itGrundschutz_q_element = document.getElementById("itGrundschutzq");
let itGrundschutz_a_element = document.getElementById("itGrundschutza");
//IEEE elements
let IEEE_Name_element = document.getElementById("IEEEName");
let IEEE_definition_element = document.getElementById("IEEEdefinition");
//Firewall elements
let firewall_Type_element = document.getElementById("firewallType");
let firewall_definition_element = document.getElementById("firewallDefinition");
let firewall_threats_element = document.getElementById("firewallThreats");
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
  console.log(ranID);
  let idArr = responseObj.qanda.map((item) => item.id);
  let missingIds = [];
  console.log("missing IDs: ");
  for (let i = idArr[0]; i < idArr[idArr.length - 1]; i++) {
    if (!idArr.includes(i)) {
      console.log("-- ", i, " -- ");
      missingIds.push(i);
    }
  }
  console.log("missing IDs count: ", missingIds.length);
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
function showAbkur() {
  const ranID = getRanId(responseObj.abkur);
  let ranAbkur = JSON.stringify(
    responseObj.abkur.find((obj) => obj.id === ranID).abk
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranName = JSON.stringify(
    responseObj.abkur.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.abkur.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  abkur_element.innerHTML = "";
  abkur_element.innerHTML = `${ranAbkur}`;
  abkurName_element.innerHTML = "";
  abkurName_element.innerHTML = `${ranName}`;
  abkur_definition_element.innerHTML = "";
  abkur_definition_element.innerHTML += `${ranDefinition}`;
}
//OSI---------------------------------------------------------
function showOsi() {}
//Abk---------------------------------------------------------
function showAbk() {
  const ranID = getRanId(responseObj.abk);
  let ranName = JSON.stringify(
    responseObj.abk.find((obj) => obj.id === ranID).abk
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.abk.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  abk_element.innerHTML = "";
  abk_element.innerHTML = `${ranName}`;
  abkName_element.innerHTML = "";
  abkName_element.innerHTML += `${ranDefinition}`;
}
//Cmd---------------------------------------------------------
function showCmd() {
  const ranID = getRanId(responseObj.cmd);
  let ranName = JSON.stringify(
    responseObj.cmd.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.cmd.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  cmd_Name_element.innerHTML = "";
  cmd_Name_element.innerHTML = `${ranName}`;
  cmd_definition_element.innerHTML = "";
  cmd_definition_element.innerHTML += `${ranDefinition}`;
}
//Security----------------------------------------------------
function showSecurity() {
  const ranID = getRanId(responseObj.security);
  let ranName = JSON.stringify(
    responseObj.security.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.security.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  security_Name_element.innerHTML = "";
  security_Name_element.innerHTML = `${ranName}`;
  security_definition_element.innerHTML = "";
  security_definition_element.innerHTML += `${ranDefinition}`;
}
//fileformat----------------------------------------------------
function showFileformat() {
  const ranID = getRanId(responseObj.fileformat);
  let ranName = JSON.stringify(
    responseObj.fileformat.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.fileformat.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  fileformat_Name_element.innerHTML = "";
  fileformat_Name_element.innerHTML = `${ranName}`;
  fileformat_definition_element.innerHTML = "";
  fileformat_definition_element.innerHTML += `${ranDefinition}`;
}
//industrie4----------------------------------------------------
function showIndustrie4() {
  const ranID = getRanId(responseObj.industrie4);
  let ranName = JSON.stringify(
    responseObj.industrie4.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.industrie4.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  industrie4_Name_element.innerHTML = "";
  industrie4_Name_element.innerHTML = `${ranName}`;
  industrie4_definition_element.innerHTML = "";
  industrie4_definition_element.innerHTML += `${ranDefinition}`;
}
//IPv6----------------------------------------------------------
function showIpv6() {
  const ranID = getRanId(responseObj.ipv6);
  let ranQ = JSON.stringify(
    responseObj.ipv6.find((obj) => obj.id === ranID).frage
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranA = JSON.stringify(
    responseObj.ipv6.find((obj) => obj.id === ranID).antwort
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  ipv6_q_element.innerHTML = "";
  ipv6_q_element.innerHTML = `${ranQ}`;
  ipv6_a_element.innerHTML = "";
  ipv6_a_element.innerHTML += `${ranA}`;
}
//ki----------------------------------------------------------
function showKi() {
  const ranID = getRanId(responseObj.ki);
  let ranQ = JSON.stringify(
    responseObj.ki.find((obj) => obj.id === ranID).question
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranA = JSON.stringify(
    responseObj.ki.find((obj) => obj.id === ranID).answer
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  ki_q_element.innerHTML = "";
  ki_q_element.innerHTML = `${ranQ}`;
  ki_a_element.innerHTML = "";
  ki_a_element.innerHTML += `${ranA}`;
}
//pm----------------------------------------------------------
function showPm() {
  const ranID = getRanId(responseObj.pm);
  let ranQ = JSON.stringify(
    responseObj.pm.find((obj) => obj.id === ranID).question
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranA = JSON.stringify(
    responseObj.pm.find((obj) => obj.id === ranID).answer
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  pm_q_element.innerHTML = "";
  pm_q_element.innerHTML = `${ranQ}`;
  pm_a_element.innerHTML = "";
  pm_a_element.innerHTML += `${ranA}`;
}
//paradigm----------------------------------------------------
function showParadigm() {
  const ranID = getRanId(responseObj.paradigm);
  let ranParadigm = JSON.stringify(
    responseObj.paradigm.find((obj) => obj.id === ranID).paradigma
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranLanguages = responseObj.paradigm.find(
    (obj) => obj.id === ranID
  ).sprachen;
  paradigm_paradigm_element.innerHTML = "";
  paradigm_paradigm_element.innerHTML = `${ranParadigm}`;
  paradigm_languages_element.innerHTML = "";
  for (var i = 0; i < ranLanguages.length; i++) {
    paradigm_languages_element.innerHTML += `<li>${ranLanguages[i]}</li>`;
  }
}
//sql-----------------------------------------------------------
function showSql() {
  const ranID = getRanId(responseObj.sql);
  let ranName = JSON.stringify(
    responseObj.sql.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.sql.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  sql_Name_element.innerHTML = "";
  sql_Name_element.innerHTML = `${ranName}`;
  sql_definition_element.innerHTML = "";
  sql_definition_element.innerHTML += `${ranDefinition}`;
}
//vgm-----------------------------------------------------------
function showVgm() {
  const ranID = getRanId(responseObj.vgm);
  let ranName = JSON.stringify(
    responseObj.vgm.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.vgm.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  vgm_Name_element.innerHTML = "";
  vgm_Name_element.innerHTML = `${ranName}`;
  vgm_definition_element.innerHTML = "";
  vgm_definition_element.innerHTML += `${ranDefinition}`;
}
//Wkp---------------------------------------------------------
function showWkp() {
  const ranID = getRanId(responseObj.wkp);
  let ranPort = JSON.stringify(
    responseObj.wkp.find((obj) => obj.id === ranID).port
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranProtocol = JSON.stringify(
    responseObj.wkp.find((obj) => obj.id === ranID).protocol
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  port_element.innerHTML = "";
  port_element.innerHTML = `${ranPort}`;
  protocol_element.innerHTML = "";
  protocol_element.innerHTML += `${ranProtocol}`;
}
//itGrundschutz----------------------------------------------------------
function showItGrundschutz() {
  const ranID = getRanId(responseObj.itGrundschutz);
  let ranQ = JSON.stringify(
    responseObj.itGrundschutz.find((obj) => obj.id === ranID).question
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranA = JSON.stringify(
    responseObj.itGrundschutz.find((obj) => obj.id === ranID).answer
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  itGrundschutz_q_element.innerHTML = "";
  itGrundschutz_q_element.innerHTML = `${ranQ}`;
  itGrundschutz_a_element.innerHTML = "";
  itGrundschutz_a_element.innerHTML += `${ranA}`;
}
//IEEE-----------------------------------------------------------
function showIeee() {
  const ranID = getRanId(responseObj.IEEE);
  let ranName = JSON.stringify(
    responseObj.IEEE.find((obj) => obj.id === ranID).name
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.IEEE.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  IEEE_Name_element.innerHTML = "";
  IEEE_Name_element.innerHTML = `${ranName}`;
  IEEE_definition_element.innerHTML = "";
  IEEE_definition_element.innerHTML += `${ranDefinition}`;
}
//firewall-------------------------------------------------------
function showFirewall() {
  const ranID = getRanId(responseObj.firewall);
  let ranType = JSON.stringify(
    responseObj.firewall.find((obj) => obj.id === ranID).type
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranDefinition = JSON.stringify(
    responseObj.firewall.find((obj) => obj.id === ranID).definition
  ).replace(/^["'](.+(?=["']$))["']$/, "$1");
  let ranThreats = responseObj.firewall.find((obj) => obj.id === ranID).threats;
  firewall_Type_element.innerHTML = "";
  firewall_Type_element.innerHTML = `${ranType}`;
  firewall_definition_element.innerHTML = "";
  firewall_definition_element.innerHTML += `${ranDefinition}`;
  firewall_threats_element.innerHTML = "";
  for (var i = 0; i < ranThreats.length; i++) {
    firewall_threats_element.innerHTML += `<li>${ranThreats[i]}</li>`;
  }
}

showQandA();
