// Function to shuffle and repack elements
// Get gallery and element elements
var gallery = document.querySelector('.gallery');
var elements = Array.from(gallery.querySelectorAll('.element'));

// Shuffle elements
elements.sort(function () {
  return 0.5 - Math.random();
});

// Append elements back to gallery in shuffled order
elements.forEach(function (element) {
  gallery.appendChild(element);
});

var elem = document.querySelector('.gallery');
var pckry = new Packery(elem, {
  // options
  itemSelector: '.element',
  gutter: 10,
  percentPosition: true,
});

// Repack elements using Packery
pckry.layout();