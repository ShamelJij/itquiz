let request = new XMLHttpRequest();
request.open("GET", "test.json", false);
request.send(null);
let myArray = JSON.parse(request.responseText);
console.log(myArray);
console.log(myArray.forEach( o => console.log(o.id,": ", o.title)));
let title_element = document.getElementById("title");
let question_element = document.getElementById("question");
let answer_element = document.getElementById("answer");
let ranMax = myArray.length;
console.log(ranMax);

function getRanId(arr){
  const randomIndex = Math.round(Math.random() * arr.length);
  if (randomIndex === 0 ){
    return arr[randomIndex].id;
  }
  return arr[(randomIndex) - 1].id;
}
function showEle(){
  const ranID = getRanId(myArray);
  console.log(ranID);
  let ranTitle = (JSON.stringify(myArray.find((obj) => obj.id === ranID).title));
  let ranAnswer = (JSON.stringify(myArray.find((obj) => obj.id === ranID).answer).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranQuestion = (JSON.stringify(myArray.find((obj) => obj.id === ranID).question).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranAnswer, ranQuestion);
  title_element.innerHTML = "";
  if (ranTitle === "1"){
    title_element.innerHTML = "<small>Beurteilen marktgängiger IT-Systeme und Lösungen</small>";
  } else if (ranTitle === "2"){
    title_element.innerHTML = "<small>Entwickeln, Erstellen und Betereuen von IT-Lösungen</small>";
  } else if (ranTitle === "3"){
    title_element.innerHTML = "<small>Planen, Vorbreiten und Durchführen von Arbeitsaufgaben</small>";
  }
  console.log("title number: ",ranTitle);
  question_element.innerHTML = "";
  question_element.innerHTML = `${ranQuestion}`;
  answer_element.innerHTML = "";
  answer_element.innerHTML += `${ranAnswer}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
showEle();
console.log("random ID: ",getRanId(myArray));
