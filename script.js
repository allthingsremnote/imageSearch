searchScript.onload = function(){
  document.getElementsByClassName("gsc-input")[2].value = location.hash.slice(1);
document.getElementsByClassName("gsc-search-button gsc-search-button-v2")[0].click();
  

  window.__gcse || (window.__gcse = {});
window.__gcse.searchCallbacks = {
  web: {
    rendered: 'myWebResultsRenderedCallback',
  },
    image: {
    rendered: 'myWebResultsRenderedCallback',
  },
};  
}
function myWebResultsRenderedCallback(x){
console.log(document.getElementsByClassName("gsc-imageResult gsc-imageResult-popup gsc-result"));
  window.open(document.getElementsByClassName("gsc-imageResult gsc-imageResult-popup gsc-result")[5].children[0].children[0].children[0].children[0].children[0].src);
};
