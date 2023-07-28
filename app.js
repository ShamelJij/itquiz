let request = new XMLHttpRequest();
request.open("GET", "test.json", false);
request.send(null);
let myObj = JSON.parse(request.responseText);
console.log(myObj);
console.log(myObj.forEach( o => console.log(o.id)));
let element = document.getElementById("foodtitle");
let ranMax = myObj.length;

function getRanId(min,max){
  return Math.round(Math.random() * (max - min + 1) ) + min;
}
const ranNum = getRanId(16, ranMax);
//ranNum === 10 ? console.log('matches!!') : console.log('doesnt match');
let ranInquery = "";
function getInquery(obj){
ranInquery = JSON.stringify(obj.find((o) => o.id === ranNum ? (ranInquery = o.id.replace(/^["'](.+(?=["']$))["']$/, '$1') ,console.log('mat!!')) : console.log("object number doesn't match")));
console.log(ranInquery);
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
//showEle();
getInquery(myObj);
