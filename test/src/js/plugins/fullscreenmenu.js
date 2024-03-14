
const fullScreenMenu = (() => {

  class FullScreenMenu {

  constructor() {
    this.body = document.querySelector('body');
    this.container = document.querySelector('#js-fullScreenMenu');
    this.scrollPosition = "";
    this.openFlag = "";

    const hamburgerButton = `
    <button class="fullScreenMenu-hamburger js-fullScreenMenu-toggle" type="button">
      <span class="fullScreenMenu-hamburger__top"></span>
      <span class="fullScreenMenu-hamburger__middle"></span>
      <span class="fullScreenMenu-hamburger__bottom"></span>
    </button>`
    this.body.insertAdjacentHTML('beforeend', hamburgerButton);

    this.targets = document.querySelectorAll('.js-fullScreenMenu-toggle');
    // console.log(target)

    
  }

  init() {
    for (let target of this.targets) {
      target.addEventListener('click', () => {
        this.setFlag();
        this.show();
      })
    }
  }

  setScrollPosition() {
    this.scrollPosition = window.scrollY
  }

  setFlag() {
    // this.openFlag = true
    if (this.body.classList.contains('js-fullScreenMenu-close')) {
      this.body.classList.toggle('js-fullScreenMenu-close')
    }
    if (this.body.classList.contains('js-fullScreenMenu-open')) {
      this.body.classList.toggle('js-fullScreenMenu-close')
    }
    this.body.classList.toggle('js-fullScreenMenu-open')
    this.openFlag = this.body.classList.contains('js-fullScreenMenu-open') ? true : false
  }

  show() {
    if (this.openFlag) {
      this.scrollPosition = window.scrollY
      const openStyle = new Map([
        ["position", "fixed"],
        ["top", -1 * this.scrollPosition + "px"],
        ["height", "100%"]
      ])
      // $("#js-fullScreenMenu").fadeIn(250);
      for (const [key, value] of openStyle) {
        this.body.style[key] = value;
      }
    } else {
      const closeStyle = new Map([
        ["position", "static"],
        ["overflow", "visible"],
        ["height", "auto"]
      ]);
      // $("#js-fullScreenMenu").fadeOut(250);
      for (const [key, value] of closeStyle) {
        this.body.style[key] = value;
      }
      window.scrollTo(0, this.scrollPosition);
    }
  }

}

  return new FullScreenMenu();

})();

export default fullScreenMenu;


