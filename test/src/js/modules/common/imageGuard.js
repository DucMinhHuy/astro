function imageGuard(selector){

  var guard_selector = document.querySelectorAll(selector);

  for(var n = 0; n < guard_selector.length; n++){
    guard_selector[n].addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
  }

  var guard_style = {
    'pointer-events':'none',
    '-webkit-touch-callout':'none',
    '-moz-touch-callout':'none',
    'touch-callout':'none',
    '-webkit-user-select':'none',
    '-moz-user-select':'none',
    'user-select':'none'
  }

  Object.keys(guard_style).forEach(function(v, i, a){
    for(var n = 0; n < guard_selector.length; n++){
      guard_selector[n].style[v] = guard_style[v];
    }
  });

}

//実行
// document.addEventListener("DOMContentLoaded", function() {
//   imageGuard('img');
// });



// var selector = [
//   '.photo-layout',//写真詳細
//   '.articleDetail-content'//記事詳細
// ]

//特定のclassがあれば右クリック禁止
// selector.map(function(v) {
//   if($(v).length) {
//     imgGuard('img');
//   }
// });
