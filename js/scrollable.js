// get the scroll-nav element
var scrollNav = document.querySelector(".scroll-nav");

// get the scroll-tabs element
var scrollTabs = document.querySelector(".scroll-tabs");

// get the nested tab panes
var nestedTabPanes = document.querySelectorAll(".nested-tab-pane");

// add a scroll event listener to the tab container
document.querySelector(".tab-container").addEventListener("scroll", function() {
  // loop through the nested tab panes
  for (var i = 0; i < nestedTabPanes.length; i++) {
    // get the current nested tab pane
    var nestedTabPane = nestedTabPanes[i];
    // get the bounding rectangle of the nested tab pane
    var rect = nestedTabPane.getBoundingClientRect();
    // get the bounding rectangle of the scroll-tabs element
    var parentRect = scrollTabs.getBoundingClientRect();
    // check if the nested tab pane is visible in the scroll-tabs element
    if (rect.x >= parentRect.x && rect.x < parentRect.x +parentRect.width) {

        var text = nestedTabPane.textContent;
      
      // set the text content of the scroll-nav element to the text content of the nested tab pane or its first child element
      scrollNav.textContent = text;
      // break the loop
      break;
    }
  }
});