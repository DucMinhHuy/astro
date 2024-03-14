import ScrollMagic from "scrollmagic";

const scrollAddClass = (() => {
	class ScrollAddClass {

		//初期値を設定
		constructor() {
			this.controller = new ScrollMagic.Controller();
			this.settings = {
				target: ".js-scrollAnimation",//アニメーションさせたい要素
				addClassName: "is-animated",//アニメーションさせたい要素に付与するclass
				triggerHook: "onEnter",//発火タイミング：画面下"onEnter"、画面中央"onCenter"、画面上"onLeave""
				offset: 0,//100だと100px早く発火-100だと-100px遅く発火
				leave: false//抜けたとき（逆スクロール時）に付与したclassを消す
			}
		}

		//実行
		init(options) {
			this.setup(options);
			this.attachEvent(this.controller);
		}

		//外部から入力された設定をマージ
		setup(options) {
			this.settings = Object.assign({
				target: this.settings.target,
				addClassName: this.settings.addClassName,
				triggerHook: this.settings.triggerHook,
				offset: this.settings.offset,
				leave: this.settings.leave
			}, options || {});
		}

		//ScrollMagicを実行
		attachEvent(controller) {
			let targets = document.querySelectorAll(this.settings.target);
			if (targets.length == 0) {
				return;
			}
			for (let target of targets) {

				let scene = new ScrollMagic.Scene({
					triggerElement: target,
					triggerHook: this.settings.triggerHook,
					offset: this.settings.offset
				})
					.addTo(controller);

				scene.on('enter', () => {
					target.classList.add(this.settings.addClassName);
				});

				if(this.settings.leave) {
					scene.on('leave', () => {
						target.classList.remove(this.settings.addClassName);
					});
				}

			}
		}
	}
	return new ScrollAddClass();
})();

export default scrollAddClass;

//使い方
// import scrollAnimation from "../../plugins/scrollAddClass.js";
// scrollAnimation.init();

// scrollAnimation.init({
//   target: '.js-hoge',
//   addClassName: "is-hoge",
//   triggerHook: "onCenter",
//   offset: 100,
//   leave: false
// });