// Hey, go look at boxmagic.scss for attribution!

params = { sep: 0, randOffset: 0 };

var randInt = function (min, max) {
  return min + Math.floor(Math.random() * (max - min));
};
var getBound = function (elem, isRoot) {
  var b = elem.getBoundingClientRect();
  return {
    x: isRoot ? b.width >> 1 : (parseInt(elem.style.left) || 0),
    y: isRoot ? b.height >> 1 : (parseInt(elem.style.top) || 0),
    w: b.width,
    h: b.height,
    hw: b.width >> 1, // half-width
    hh: b.height >> 1 // half-height
  };
};
var boxCollides = function (box, boxes, parBound, sep) {
  var b1 = getBound(box);
  if (parBound) {
    if ((b1.x - b1.hw) < (parBound.x - parBound.hw)
      || (b1.x + b1.hw) > (parBound.x + parBound.hw)
      || (b1.y - b1.hh) < (parBound.y - parBound.hh)
      || (b1.y + b1.hh) > (parBound.y + parBound.hh))
      return true;
  }

  for (var i = 0; i < boxes.length; i++) {
    var b2 = getBound(boxes[i]);

    var sepX = Math.max(b1.x, b2.x) - Math.min(b1.x, b2.x);
    var sepY = Math.max(b1.y, b2.y) - Math.min(b1.y, b2.y);

    if (sepX < (b1.hw + b2.hw + sep) && sepY < (b1.hh + b2.hh + sep)) return true;
  }
  return false;
};
var reposition = function (boxes, sep, randOffset) {
  // `sep` defines the separation between elements
  sep = sep || 0;

  boxes = Array.prototype.slice.call(boxes);

  // Awesome (and probably bad) `shuffle` implementation
  boxes.sort(function () { return Math.random() - 0.5; });

  var parBound = getBound(boxes[0].parentNode, true);

  // Consider the 1st box "ready"; position it
  var numReady = 1;
  boxes[0].style.left = randInt(parBound.x, parBound.x + randOffset) + 'px';
  boxes[0].style.top = randInt(parBound.y, parBound.y + randOffset) + 'px';

  while (numReady < boxes.length) {

    var box = boxes[numReady];
    var bound = getBound(box);

    var x = 0;
    var y = 0;
    var attempts = 0;
    var collisionBoxes = boxes.slice(0, numReady);

    do {

      // Choose a random, "ready" box to align to
      var randInd = randInt(0, numReady);
      var alignBound = getBound(boxes[randInd]);

      // Choose a random side to align to
      var side = randInt(0, 4);
      if (side === 0) { // Align to the left
        x = alignBound.x - (alignBound.hw + bound.hw + sep);
        y = alignBound.y + randInt(-randOffset, randOffset);
      } else if (side === 1) { // Align to the right
        x = alignBound.x + (alignBound.hw + bound.hw + sep);
        y = alignBound.y + randInt(-randOffset, randOffset);
      } else if (side === 2) { // Align to the top
        y = alignBound.y - (alignBound.hh + bound.hh + sep);
        x = alignBound.x + randInt(-randOffset, randOffset);
      } else if (side === 3) { // Align to the bottom
        y = alignBound.y + (alignBound.hh + bound.hh + sep);
        x = alignBound.x + randInt(-randOffset, randOffset);
      }

      box.style.left = x + 'px';
      box.style.top = y + 'px';

    } while (attempts++ < 100 && boxCollides(box, collisionBoxes, parBound, sep));
    

    numReady++;
    box.style.display = "block"
  }

};

// window.onload = function () {
//   var boxes = document.getElementsByClassName('box');
//   reposition(boxes, 0, 0);
// };