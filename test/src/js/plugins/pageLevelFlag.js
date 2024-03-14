//現在のページとリンク先のページの階層を比較

var store = require('store');

export default class PageLevelFlag {
  constructor() {
    this.fromOutside = !document.referrer.match(location.host)
    this.flag = ""
    this.targets = document.querySelectorAll('a:not([href^="#"]):not([target])')
    this.pathname = location.pathname
    this.pathLevel = this.pathname.split("/").length
    this.linkLevel = 0

  }

  init() {

    let flag = this.updateFlag();
    this.load(flag);

    for (const target of this.targets) {
      target.addEventListener('click', (e) => {
        e.preventDefault();
        const url = target.getAttribute("href")
        this.linkLevel = url.split("/").length
        this.setStore()
        flag = this.updateFlag();
        console.log(flag)
        this.next(flag)
        if (url !== '') {
          setTimeout(() => {
            window.location = url;  // 1秒後に取得したURLに遷移
          }, 1000);
        }
      })
    }

  }

  load(flag) {
    if("normal" == flag) {
      // console.log('動いてない')
      $('body').addClass('js-load-normal')
    }
    if("down" == flag) {
      // console.log('下がってきた')
      $('body').addClass('js-load-down')
    }
    if("up" == flag) {
      // console.log('上がってきた')
      $('body').addClass('js-load-up')
    }
    store.set('pathLevel', 0)
    store.set('linkLevel', 0)
  }

  next(flag){
    if("normal" == flag) {
      // console.log('同じ階で移動')
      $('body').addClass('js-next-normal')
    }
    if("down" == flag) {
      // console.log('下に参ります！')
      $('body').addClass('js-next-down')
    }
    if("up" == flag) {
      // console.log('上に参ります！')
      $('body').addClass('js-next-up')
    }
  }


  updateFlag() {
    // if(this.fromOutside) {
    //   return "normal"
    // }
    if(store.get('pathLevel') < store.get('linkLevel')) {
      return "down"
    }
    if(store.get('pathLevel') > store.get('linkLevel')) {
      return "up"
    }
    return "normal"
  }


  setStore() {
    store.set('pathLevel', this.pathLevel)
    store.set('linkLevel', this.linkLevel)
    this.updateFlag()
  }

}

// const pageLevelFlag = new PageLevelFlag()
// pageLevelFlag.init()