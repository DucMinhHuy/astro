import ua from '../../plugins/userAgent.js';

//電話番号スマホのみ掛ける
// document.querySelector("a[href*='tel:']")

// $("a[href*='tel:']").on("click", function(e){
//   if(ua.getDevice() == 'pc'){
//     e.preventDefault();
//   }
// });

const targets = document.querySelectorAll("a[href*='tel:']");

for(let target of targets) {
  target.addEventListener("click", (e) => {
    if(ua.getDevice() == 'pc'){
      e.preventDefault();
    }
  });
}
