import hljs from "highlight.js/lib/highlight";

import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("xml", xml);



// highlightingResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される

function highlightingResolve() {
  return new Promise(resolve => {
    resolve(hljs.initHighlighting());
    // setTimeout(() => {
    // }, 2000);
  })
}

 async function highlightingAsync() {
   await highlightingResolve();
 }


highlightingAsync().then(abc => {
  // console.log(abc)
  $('code.hljs').each(function() {
    var code_lang = $(this).attr('data-lang') != undefined ? $(this).attr('data-lang') : $(this).attr("class").split(' ').splice(1, 1)
    // var code_lang = $(this).attr("class").split(' ').splice(1, 1)
    // console.log(code_lang)
    $(this).before('<div class="c-code__lang"><span>' + code_lang + '</span></div>')
  })
});


// hljs.initHighlighting();
// $('code.hljs').each(function() {
//   var code_lang = $(this).attr('data-lang') != undefined ? $(this).attr('data-lang') : $(this).attr("class").split(' ').splice(1, 1)
//   // var code_lang = $(this).attr("class").split(' ').splice(1, 1)
//   // console.log(code_lang)
//   $(this).before('<div class="c-code__lang"><span>' + code_lang + '</span></div>')
// })
