$(document).ready(function(){

  var len;

  // dedicate function to get all tabs
  function getTabs () {
    // query all tabs
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      // iterate through tabs
      for (var k=0; k<tabs.length; k++) {
        $("#list").append("<p><a href='#' id='" + k + "'>" + tabs[k].title + "</a></p>");
      }
      len = tabs.length;
    });
  }

  // set tab click event
  function setTabOnClick() {
    for (var k=0; k<len; k++) {
      console.debug(k);
    }
  }

  // main function
  getTabs();
  setTabOnClick();

});
