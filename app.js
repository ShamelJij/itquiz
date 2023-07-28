let request = new XMLHttpRequest();
request.open("GET", "test.json", false);
request.send(null);
let myObj = JSON.parse(request.responseText);
console.log(myObj);
let element = document.getElementById("foodtitle");
let ranMax = myObj.length;

function getRanId(min,max){
  return Math.round(Math.random() * (max - min) ) + min;
}
function showEle(){
  const ranNum = getRanId(1, ranMax);
  let ranObj = (JSON.stringify(myObj.find((obj) => obj.id === ranNum).a).replace(/^["'](.+(?=["']$))["']$/, '$1'));
  let apar = JSON.parse(ranObj);
  console.log(JSON.parse(ranObj));
  element.innerHTML = "";
  apar.forEach( e => element.innerHTML += `<p><small>${e}</small></p>`);
  //element.innerHTML = apar;
console.log("ranNum: " , ranNum , " ranMax: " , ranMax);
}
showEle();
