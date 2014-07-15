$(document).ready(function(){

  // dedicate function to sort tabs
  function sortTabs () {
    // query all tabs
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      // initialize some variables
      var sorted_tabs = {};
      // iterate through tabs and examine url
      for (var k=0; k<tabs.length; k++) {
        // get the tab first
        var tab = tabs[k];
        // get the root url of the tab url
        var root_url = tab.url.substring(0, nthOccurrence(tab.url, '/', 3));
        // check if the root is there already
        if (!(root_url in sorted_tabs)) {
          sorted_tabs[root_url] = [];
        }
        sorted_tabs[root_url].push(tab);
      }
      // iterate through sorted tabs for listing
      for (var key in sorted_tabs) {
        // for inner panel value
        var inner = "";
        for (var k=0; k<sorted_tabs[key].length; k++) {
          inner += "<div class='panel'><a href='#' id='" + sorted_tabs[key][k].id + "'>" + sorted_tabs[key][k].title + "</a></div>";
        }
        // print root url and favicon
        if (sorted_tabs[key][0].favIconUrl === undefined || key.indexOf('chrome://') > -1) {
          $("#list").append("<div class='label'><p><img src='favicon.png'/>" + key + "</p>" + inner + "</div>");
        } else {
          $("#list").append("<div class='label'><p><img src='" + sorted_tabs[key][0].favIconUrl + "'/>" + key + "</p>" + inner + "</div>");
        }
      }
      // set a click listener for each tab link
      for (var k=0; k<tabs.length; k++) {
        // get the tab id
        var tab_id = tabs[k].id;
        $("#" + tab_id).click(function() {
          chrome.tabs.update(parseInt($(this).attr('id')), {"active":true, "highlighted":true}, function(tab) {
            window.close();
          });
        });
      }
    });
  }

  // helper function to return the position of the nth occurrence
  function nthOccurrence (str, s, n) {
    var pos = 0;
    for (var k=0; k<n; k++) {
      pos = str.indexOf(s, pos+1);
    }
    return pos;
  }

  // main function
  sortTabs();

});
