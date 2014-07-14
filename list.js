$(document).ready(function(){

  // dedicate function to get all tabs
  function getTabs () {
    // query all tabs
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      // iterate through tabs
      for (var k=0; k<tabs.length; k++) {
        $("#list").append("<p><img src='" + tabs[k].favIconUrl + "' />");
        $("#list").append("<a href='" + tabs[k].url + "' id='" + k + "'>" + tabs[k].title + "</a></p>");
      }
      len = tabs.length;
    });
  }

  // main function
  getTabs();ß
});
