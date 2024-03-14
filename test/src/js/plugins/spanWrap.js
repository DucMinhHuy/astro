const spanWrap = (() => {
  class SpanWrap {
    constructor() {
      this.settings = {
        target: ".js-spnaWrap"
      }
      this.targets = "";
      this.targetLength = 0;
      this.nodes = [];
      this.convertContents = [];
    }

    init(options) {
      this.setup(options);
      this.getNodes();
      this.convert();
      this.set();
    }

    setup(options) {
      this.settings = Object.assign({
        target: this.settings.target
      }, options || {});
      this.targets = document.querySelectorAll(this.settings.target);
      this.targetLength = this.targets.length;
    }

    getNodes() {
      for (target of this.targets) {
        let nodes = target.childNodes;
        this.nodes.push(nodes);
      }
    }

    convert() {
      for (let i = 0; i < this.targetLength; i++) {
        this.convertContents.push([]);//カラの配列を追加
        for (node of this.nodes[i]) {
          if (node.nodeType == 3) {//テキストの場合
            let text = node.textContent.replace(/\r?\n/g, '');//テキストから改行コード削除
            text.split('').forEach((v) => {
              this.convertContents[i].push("<span>" + v + "</span>");
            });

          } else {//テキスト以外
            this.convertContents[i].push(node.outerHTML);
          }
        }
      }
    }

    set() {
      for (let i = 0; i < this.targetLength; i++) {
        console.log(this.convertContents[i])
        this.targets[i].innerHTML = this.convertContents[i].join("");
      }
    }

  }
  return new SpanWrap();
})();

//使い方
// import spanWrap from "/path/to/spanWrap.js";
// spanWrap.init();

// spanWrap.init({
//   target: ".js-spnaWrap"
// });





