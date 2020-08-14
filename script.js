searchScript.onload = function(){
       window.__gcse || (window.__gcse = {});
window.__gcse.searchCallbacks = {
  web: {
    rendered: 'myWebResultsRenderedCallback',
  },
    image: {
    rendered: 'myWebResultsRenderedCallback',
  },
};
  setTimeout(function(){
   
  document.getElementsByClassName("gsc-input")[2].value = location.hash.slice(1);
document.getElementsByClassName("gsc-search-button gsc-search-button-v2")[0].click();
  



},900);
  

}
  
  
function myWebResultsRenderedCallback(x){
       var urlList = [];
       [...document.getElementsByClassName("gsc-imageResult gsc-imageResult-popup gsc-result")].forEach(function(j){
       urlList.push(x.children[0].children[0].children[0].children[0].children[0].src);
       })
       console.log(urlList);
top.postMessage(urlList,"*");
};
