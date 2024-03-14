import isMobile from '../../plugins/is-mobile.js';
import addEventListenerMultiType from './multiEventLister.js';

class MegaMenu {
  constructor(options) {
    this.body = document.querySelector('body');
    this.targets = document.querySelectorAll('.megamenu-wrapper');
    this.autoClose = options.autoClose;
  }
  
  init() {
    this.attachEvent();
  }

  toggle(target) {
    target.classList.toggle('is-megaMenu--show');
    this.body.classList.add('is-megaMenu--showPage');
  }
  toggleSP(target) {
    if(target.classList.contains('is-megaMenu--show')) {
      target.classList.remove('is-megaMenu--show');
    } else {
      if(this.autoClose) {
        for (let target of this.targets) {
          target.classList.remove('is-megaMenu--show');
        }
      }
      target.classList.add('is-megaMenu--show');
    }
  }

  attachEvent() {
    for (let target of this.targets) {
      if(!isMobile(768)){
        addEventListenerMultiType(target,'mouseenter touchstart', () => {
          this.toggle(target);
          target.nextElementSibling.lastElementChild.style.zIndex = '500';
          target.previousElementSibling.lastElementChild.style.zIndex = '500';
        },
        false);
        addEventListenerMultiType(target,'mouseleave touchend', () => {
          this.toggle(target);
          this.body.classList.remove('is-megaMenu--showPage');
          target.nextElementSibling.lastElementChild.removeAttribute('style');
          target.previousElementSibling.lastElementChild.removeAttribute('style');
        },
        false);
      } else {
        addEventListenerMultiType(target,'click', (e) => {
          this.toggleSP(target);
          if((e.target.classList.contains("megamenu-main-link"))) {
            e.preventDefault()
          }
        },
        false);
      }
    }
  }
}

const options = {
  'autoClose': 1
}
const megaMenu = new MegaMenu(options);
megaMenu.init();

