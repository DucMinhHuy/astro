import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

export default function parallax_m(selector, offset, speed, limit, inertia, reverse, horizontal, inertiaEffect) {

  class ParallaxModule {
    constructor(horizontal){
      this.scroll = "",
      this.limited = "",
      this.propertyType = !horizontal ? 'translateY' : 'translateX'
    }

    init() {
      this.attachEvent();
    }
    parallax() {
      if (inertia == "none" && !inertiaEffect) {
        $(selector).css({
          'transform': this.propertyType + '(' + (this.scroll) + 'px)'
        })
      } else {
        if (!horizontal) {
          TweenMax.to(selector, 1.08, { y: (this.scroll), ease: Power1.easeOut });
        } else {
          TweenMax.to(selector, 1.08, { x: (this.scroll), ease: Power1.easeOut });
        }
      }
    }
    update() {
      this.limited = limit > Math.abs(($(window).scrollTop() - offset) / speed)
      if (this.limited) {
        this.scroll = (($(window).scrollTop() - offset) / speed)
        this.scroll = !reverse ? this.scroll : this.scroll * -1 //リバース判定
      }
      this.parallax();
    }
    attachEvent() {
      $(window).on('scroll load resize', () => {
        this.update();
      })
    }
  }

  const parallaxModule = new ParallaxModule(horizontal);
  parallaxModule.init();

}
