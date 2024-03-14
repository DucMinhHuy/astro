import smoothScroll from 'smooth-scroll';
let options = { 
  speed: 500,
  offset: window.innerWidth >= 1024 ? 0 : 50
};

let scroll = new smoothScroll('a[href*="#"]', options);


// var hash = location.hash;

// if ($(hash).length > 0) {
//   $(window).scrollTop(0);
//   setTimeout(function () {
//     scroll.animateScroll(document.querySelector(target), options);
//   }, 700);
// }