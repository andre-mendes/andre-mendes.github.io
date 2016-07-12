/*
var scrollObject = {};
window.onscroll = getScrollPosition;

function getScrollPosition(){
    scrollObject = {
       x: window.pageXOffset,
       y: window.pageYOffset
    }
    // If you want to check distance
    if(scrollObject.y > 200) {
        // add class
        document.querySelector('#header-main').classList.remove('transformScroll');
        document.querySelector('#header-main').classList.add('active');
    } else {
        // remove class
        document.querySelector('#header-main').classList.remove('active');
        document.querySelector('#header-main').classList.add('transformScroll');
    }
    if(scrollObject.y == 0) {
      document.querySelector('#header-main').classList.remove('transformScroll');
    }
}*/

var scrollObject = {},
    lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop,
      mainHeader = document.querySelector('#header-main');

  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset
  }

  if (st > lastScrollTop) {
    mainHeader.classList.remove('active');
    mainHeader.classList.add('transformScroll');
  } else {
    mainHeader.classList.add('active');
    mainHeader.classList.remove('transformScroll');
  }
  lastScrollTop = st;

  if(scrollObject.y == 0) {
    mainHeader.classList.remove('active');
  }
}, false);
