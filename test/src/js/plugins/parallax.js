// import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
import _ua from './is-ua.js';
import parallax_m from './parallax-m';
import ScrollMagic from "scrollmagic";
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
// import luxy from 'luxy.js';

// 使い方
// htmlに以下のclassとdata属性を指定
// class="m-parallax"
// data-speed="15" data-limit="250" data-selector="top-search__background" data-reverse="true"

// data-speed 値が大きいほど遅くなる
// data-limit 可動範囲 250だと250pxまで動く
// data-selector 基準にするセレクターを変更
// data-reverse trueで動きが反転


function transform3d_value(e) {
  var values = e.split('(')[1];
  values = values.split(')')[0];
  values = values.split(', ');
  var matrix = {
    'scale-x': values[0],
    'rotate-z-p': values[1],
    'rotate-y-p': values[2],
    'perspective1': values[3],
    'rotate-z-m': values[4],
    'scaleY': values[5],
    'rotate-x-p': values[6],
    'perspective2': values[7],
    'rotate-y-m': values[8],
    'rotate-x-m': values[9],
    'scale-z': values[10],
    'perspective3': values[11],
    'translate-x': values[12],
    'translate-y': values[13],
    'translate-z': values[14],
    'perspective4': values[15]
  };
  return matrix;
}

var controller = new ScrollMagic.Controller();

// console.log(document.querySelectorAll(".m-parallax"));
const parallax = (() => {

  class Parallax {

    constructor() {
      this.inertiaScrollFlag = !_ua().Mobile && !_ua().Tablet ? true : false,
      this.targets = document.querySelectorAll(".m-parallax"),
      this.offset = 0
      this.settings = {
        inertiaEffect: false,
        inertiaScrollWrap: $('#js-inertiaScroll'),
        inertiaScrollSpeed: 0.08
      }
    }

    // offset:""

    init(options) {
      this.setup(options);
      for (const target of this.targets) {
        this.parallaxItem(target);
      }
      this.inertiaScroll();
    }

    setup(options) {
      // this.settings = $.extend({
      //   inertiaScrollWrap: this.settings.inertiaScrollWrap,
      //   inertiaScrollSpeed: this.settings.inertiaScrollSpeed
      // }, options || {});
      this.settings = Object.assign( {
        inertiaEffect: this.settings.inertiaEffect,
        inertiaScrollWrap: this.settings.inertiaScrollWrap,
        inertiaScrollSpeed: this.settings.inertiaScrollSpeed
      }, options || {});
    }

    parallaxItem(target) {
      let speed = target.getAttribute('data-speed');
      let limit = target.getAttribute('data-limit');
      let reverse = target.getAttribute('data-reverse');
      let horizontal = target.getAttribute('data-horizontal');
      let selector = target.getAttribute('data-selector') ? target.closest( "." + target.getAttribute('data-selector')) : target;
      // console.log(target);

      var parallax = new ScrollMagic.Scene({
        triggerElement: selector,
        triggerHook: 'onEnter',
        // duration: 800,
        offset: 0
      })
        // .addIndicators()
        .addTo(controller);


      parallax.on('enter', () => {
        // console.log(parallax.scrollOffset());
        // console.log($(window).scrollTop());
        var flag = $("#js-inertiaScroll").length > 0 ? $("#js-inertiaScroll").css("transform") : "none";
        var props = flag == "none" ? "none" : transform3d_value($("#js-inertiaScroll").css("transform"));
        // console.log(props);
        var transform3dScaleY = props == "none" ? 0 : props.scaleY;
        var scrollTop = parallax.scrollOffset() < 0 ? 0 : parallax.scrollOffset();
        var offset_ex = parallax.scrollOffset() > transform3dScaleY * -1 ? transform3dScaleY * -1 : scrollTop;
        var offset = flag == "none" ? scrollTop : offset_ex;
        parallax_m(target, offset, speed, limit, flag, reverse, horizontal, this.settings.inertiaEffect);
        // TweenMax.to('.top-spa', 2, {opacity:0});
        // console.log(scene_spa.scrollOffset());
      });
    }

    inertiaScroll() {
      if (this.inertiaScrollFlag) {
        requestAnimationFrame(this.inertiaScroll.bind(this));

        $('body').css({
          'height': this.settings.inertiaScrollWrap.height()
        })

        this.settings.inertiaScrollWrap.css({
          'width': '100%',
          'position': 'fixed'
        })
        this.offset += ($(window).scrollTop() - this.offset) * this.settings.inertiaScrollSpeed;
        // this.scroll();
        // console.log(offset)
        this.settings.inertiaScrollWrap.css({
          'transform': `translate3d(0,${Math.round(-this.offset * 100) / 100}px ,0)`
        })
      }
      // i++
      // console.log(i)
    }
  }

  return new Parallax();

})();

export default parallax;


