import Accordion from '../../plugins/accordion.js';
const elements = document.querySelectorAll(".js-accordion");
for (const element of elements) {
  let accordion2 = new Accordion(element, {
    defaultOpenPanels: [0],
    multipleOpen: true,
    onOpen: test,
    onClose: fuga
  });
}


// let accordion = new Accordion(".js-accordion2", {
//   defaultOpenPanels: [0],
//   onOpen: hoge,
//   onClose: fuga
// });

function test(trigger, panel){
  trigger.style.color = '#f00'
}
function fuga(trigger, panel){
  trigger.style.color = '#000'
  
}

// accordion.destroy()
// accordion.init()
