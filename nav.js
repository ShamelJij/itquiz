let tabsArray = ['startNav', 'osiNav', 'abkNav'];
function activateTab(tabId){
  for(let i = 0; i < tabsArray.length; i++){
    if(tabId === tabsArray[i]){
      document.getElementById(tabId).className = "nav-link active";
    } else {
      document.getElementById(tabsArray[i]).className = "nav-link";
    }
  }
}
