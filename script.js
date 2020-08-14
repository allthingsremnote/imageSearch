  var page = 0;
  var urlList = [];
  
searchScript.onload = function() {
        window.__gcse.searchCallbacks = {
      web: {
        rendered: "myWebResultsRenderedCallback"
      },
      image: {
        rendered: "myWebResultsRenderedCallback"
      }
    };
window.addEventListener("message", function(x){
    if (x.data.split(".")[0]=="q"){
getImages(x.data.split(".")[1]);
    }
});
  function getImages(term) {
  

    page = 0;
    urlList = [];

    setTimeout(function() {
      document.getElementsByClassName("gsc-input")[2].value = term;
      document
        .getElementsByClassName("gsc-search-button gsc-search-button-v2")[0]
        .click();
    }, 900);
  }


};
  function myWebResultsRenderedCallback(x) {

    if (page < 4) {

      [
        ...document.getElementsByClassName(
          "gsc-imageResult gsc-imageResult-popup gsc-result"
        )
      ].forEach(function(j) {
        urlList.push(
          j.children[0].children[0].children[0].children[0].children[0].src
        );
      });

      page++;
      document.getElementsByClassName("gsc-cursor")[0].children[page].click();
    }else {

      top.postMessage({list:urlList,msg:"imageList"}, "*");
    }
  }
