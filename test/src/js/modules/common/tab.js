import Tab from '../../plugins/tab.js';
const elements = document.querySelectorAll(".js-tab");
for (const element of elements) {
  new Tab(element, {
    defaultOpenPanel: 1
  });
}



// accordion.init();
// new Tab($(".js-tab"), {
//   defaultOpenPanel: 0
// });

// $(".js-tab").each(function(i, v){
//   var $that = $(this);
//   new Tab($that, {
//     defaultOpenPanel: 0
//   });
// })