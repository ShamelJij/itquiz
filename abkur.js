let request = new XMLHttpRequest();
request.open("GET", "abk.json", false);
request.send(null);
let myArray = JSON.parse(request.responseText);
console.log(myArray);
console.log(myArray.forEach( o => console.log(o.id,": ", o.abk)));
let abk_element = document.getElementById("abk");
let abkName_element = document.getElementById("abkName");
let definition_element = document.getElementById("definition");
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
  let ranAbk = (JSON.stringify(myArray.find((obj) => obj.id === ranID).abk).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranName = (JSON.stringify(myArray.find((obj) => obj.id === ranID).name).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let ranDefinition = (JSON.stringify(myArray.find((obj) => obj.id === ranID).definition).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  console.log(ranDefinition, ranName);
  abk_element.innerHTML = "";
  abk_element.innerHTML = `${ranAbk}`;
  abkName_element.innerHTML = "";
  abkName_element.innerHTML = `${ranName}`;
  definition_element.innerHTML = "";
  definition_element.innerHTML += `${ranDefinition}`;
console.log("ranID: " , ranID , " ranMax: " , ranMax);
}
showEle();
console.log("random ID: ",getRanId(myArray));
