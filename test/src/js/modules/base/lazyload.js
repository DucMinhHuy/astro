// import 'nodelist-foreach-polyfill';
import 'lazyload';

let images = document.querySelectorAll(".lazyload");
lazyload(images, {
  rootMargin: "300px"
});

//ajax後に実行
$(document).ajaxSuccess(function (event, xhr, settings) {
  let images = document.querySelectorAll(".lazyload");
  lazyload(images, {
    rootMargin: "300px"
  });
});