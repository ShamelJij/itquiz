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
let myPages = {};
for (var i = 0; i < myJsons.length; i++) {
  myPages[myJsons[i]] = myJsons[i] + ".json";
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
      if(tabContentIds[i] === "abkurTabContent"){
        showAbkur();
      }
    } else {
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
let abk_element = document.getElementById("abkur");
let abkName_element = document.getElementById("abkName");
let definition_element = document.getElementById("definition");
function getRanId(arr) {
  const randomIndex = Math.round(Math.random() * arr.length);
  if (randomIndex === 0) {
    return arr[randomIndex].id;
  }
  return arr[randomIndex - 1].id;
}

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
function showAbkur(){
  const ranID = getRanId(responseObj.abkur);
  console.log(ranID);
  let ranAbk = (JSON.stringify(responseObj.abkur.find((obj) => obj.id === ranID).abk).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranName = (JSON.stringify(responseObj.abkur.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(responseObj.abkur.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  abk_element.innerHTML = "";
  abk_element.innerHTML = `${ranAbk}`;
  abkName_element.innerHTML = "";
  abkName_element.innerHTML = `${ranName}`;
  definition_element.innerHTML = "";
  definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
showQandA();
