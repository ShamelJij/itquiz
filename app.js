let request = new XMLHttpRequest();
request.open("GET", "answersArray.json", false);
request.send(null);
let myArray = JSON.parse(request.responseText);
let title_element = document.getElementById("title");
let question_element = document.getElementById("question");
let answer_element = document.getElementById("answer");
let ranMax = myArray.length;

function getRanId(arr){
  const randomIndex = Math.round(Math.random() * arr.length);
  if (randomIndex === 0 ){
    return arr[randomIndex].id;
  }
  return arr[(randomIndex) - 1].id;
}
function showEle(){
  const ranID = getRanId(myArray);
  console.log("Q_ID: ",ranID);
  let ranTitle = (JSON.stringify(myArray.find((obj) => obj.id === ranID).title));
  let ranAnswer = (JSON.stringify(myArray.find((obj) => obj.id === ranID).answer).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranQuestion = (JSON.stringify(myArray.find((obj) => obj.id === ranID).question).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  title_element.innerHTML = "";
  if (ranTitle === "1"){
    title_element.innerHTML = "<small>Beurteilen marktgängiger IT-Systeme und Lösungen</small>";
  } else if (ranTitle === "2"){
    title_element.innerHTML = "<small>Entwickeln, Erstellen und Betereuen von IT-Lösungen</small>";
  } else if (ranTitle === "3"){
    title_element.innerHTML = "<small>Planen, Vorbreiten und Durchführen von Arbeitsaufgaben</small>";
  } else if (ranTitle === "4"){
    title_element.innerHTML = "<small>Auftragsabschluss und Leistungserbringung</small>";
  } else if (ranTitle === "5"){
    title_element.innerHTML = "<small>Qualitätssichernde Maßnahmen</small>";
  } else if (ranTitle === "6"){
    title_element.innerHTML = "<small>Informieren und Beraten von Kunden und Kundinnen</small>";
  } else if (ranTitle === "7"){
    title_element.innerHTML = "<small>IT-Sicherheit und Datenschutz, Ergonomie</small>";
  }
  question_element.innerHTML = "";
  question_element.innerHTML = `${ranQuestion}`;
  answer_element.innerHTML = "";
  answer_element.innerHTML += `${ranAnswer}`;
}
showEle();
