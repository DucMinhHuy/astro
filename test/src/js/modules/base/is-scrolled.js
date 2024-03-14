// import '../../plugins/jquery.hasClasses.js';

//スクロールしたらbodyにis-scrolledを付与
window.addEventListener("scroll", () => {
  if(window.scrollY >= 1) {
    document.querySelector('body').classList.add("is-scrolled");

    // console.log($(window).scrollTop());
  } else {
    document.querySelector('body').classList.remove("is-scrolled");
    // setTimeout(function() {
    //   // if(!$('body').hasClass('is-open')) {
    //   //   $('body').removeClass("is-scrolled");
    //   // }
    //   if(!$('body').hasClasses(['is-open', 'is-searchContent--showPage'], true)) {
    //     $('body').removeClass("is-scrolled");
    //   }

    // }, 100);
  }
  
})


// $(window).scroll(function() {
//   if($(window).scrollTop() >= 1) {

//     $('body').addClass("is-scrolled");
//     // console.log($(window).scrollTop());
//   } else {
//     // setTimeout(function() {
//     //   // if(!$('body').hasClass('is-open')) {
//     //   //   $('body').removeClass("is-scrolled");
//     //   // }
//     //   if(!$('body').hasClasses(['is-open', 'is-searchContent--showPage'], true)) {
//     //     $('body').removeClass("is-scrolled");
//     //   }

//     // }, 100);
//     $('body').removeClass("is-scrolled");
//   }
// });


