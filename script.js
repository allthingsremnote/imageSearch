searchScript.onload = function(){
       var page = 0;
             var urlList = [];
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
 if (page<4){
       [...document.getElementsByClassName("gsc-imageResult gsc-imageResult-popup gsc-result")].forEach(function(j){
       urlList.push(j.children[0].children[0].children[0].children[0].children[0].src);
       });
page++;
document.getElementsByClassName("gsc-cursor")[0].children[page].click();
 }else{
       console.log(urlList);
top.postMessage(urlList,"*");
 }
};
