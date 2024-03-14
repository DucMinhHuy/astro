import ScrollMagic from "scrollmagic";
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';

//使い方

//読み込み
// import pagePositionNav from '../../plugins/pagePositionNav.js';
// pagePositionNav.init();

//HTML
//対象のセクションにdata-page-section="hoge"
//対象のナビにdata-page-nav="hoge"

const pagePositionNav = (() => {
  class PagePositionNav {

    constructor() {
      this.controller = new ScrollMagic.Controller();
      this.sections = "[data-page-section]";
      this.settings = {
        addClassName: "is-current"
      }
    }

    init(options) {
      this.setup(options);
      this.attachEvent(this.controller);
    }

    //外部から入力された設定をマージ
    setup(options) {
      this.settings = Object.assign({
        addClassName: this.settings.addClassName
      }, options || {});
    }

    //ScrollMagicを実行
    attachEvent(controller) {
      let sections = document.querySelectorAll(this.sections);

      for (let section of sections) {
        let scene_pagePositionNav = new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: "onCenter",
          duration: section.clientHeight,
          offset: 0
        })
          // .addIndicators()
          .addTo(controller);

        scene_pagePositionNav.on("enter", () => {
          let targetElement = scene_pagePositionNav.triggerElement();
          this.removeNavActiveClass();
          document.querySelector(`[ data-page-nav = ${targetElement.getAttribute("data-page-section")}]`).classList.add(this.settings.addClassName);
        });

        scene_pagePositionNav.on("leave", () => {
          this.removeNavActiveClass();
        });

        //リサイズやスクロールでアップデート
        scene_pagePositionNav.on("update", function(event) {
          this.duration(section.clientHeight);
        });
      }
    }

    removeNavActiveClass() {
      let navElements = document.querySelectorAll("[data-page-nav]");
      for (let navElement of navElements) {
        navElement.classList.remove(this.settings.addClassName);
      }
    }

  }

  return new PagePositionNav();
})();

export default pagePositionNav;

