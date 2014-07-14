// deligate function when a link is clicked
function onTabClick (id) {
  chrome.tabs.update(id, {hightlighted: true}, function(tab) {
    // noting
  });
}
