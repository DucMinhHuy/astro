// import {TweenMax} from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


var controller = new ScrollMagic.Controller();

var scene_hero = new ScrollMagic.Scene({
  triggerElement: "body" ,
  triggerHook: 'onEnter',
  // duration: 800,
  offset :0
})
// .addIndicators()
.addTo(controller);

scene_hero.on('enter', ()=>{
//triggerElementを過ぎたとき
});
scene_hero.on('leave', ()=>{
//triggerElementを抜けたとき
});
