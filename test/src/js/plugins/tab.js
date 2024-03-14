const tab = (() => {
  return class Tab {
    constructor(rootElement = ".js-tab", options) {
      // console.log(isElement(rootElement[0]))
      this.tabRootElement = convertElement(rootElement);
      this.options = {
        tabWrapper: ".js-tab-list",
        tabs: ".js-tab-button",
        panelWrapper: ".js-tab-panel-wrapper",
        panels: ".js-tab-panel",
        defaultOpenPanel: 0
      }
      this.tabEvent = [];

      this.initialized = false;

      //外部から入力された設定をマージ
      this.mergedOptions(options);

      //タブの親要素がない場合は終了
      if(!this.tabRootElement) return;

      this.init()

    }

    init() {
      this.options.tabWrapper = this.tabRootElement.querySelector(this.options.tabWrapper);
      this.options.tabs = [...this.tabRootElement.querySelectorAll(this.options.tabs)];
      this.options.panelWrapper = this.tabRootElement.querySelector(this.options.panelWrapper);
      this.options.panels = [...this.tabRootElement.querySelectorAll(this.options.panels)];

      //トリガーとパネルに属性を付与
      this.setUpAttribute(this.options.tabs, this.options.panels)

      if (!(this.tabEvent.length == this.options.tabs.length)) {
        //トリガーをクリックしたときのイベント設定
        this.options.tabs.forEach((tab, index) => {
          this.tabEvent.push(this.attachEvent(tab, 'click', this.switchContent.bind(this)))
          this.tabEvent[index].addEvent();
        });
      }

      this.initialized = true;
    }

    mergedOptions(options) {
      this.options = Object.assign(this.options, options || {});
    }

    setUpAttribute(tabs, panels) {
      const randomId = Math.random().toString(36).slice(2);
      this.options.tabWrapper.setAttribute("role", "tab-list")
      tabs.forEach((tab, index) => {
        tab.setAttribute("id", `tab-button-${randomId}-${index}`);
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-controls", `tab-panel-${randomId}-${index}`);
        tab.setAttribute("aria-selected", "false");
      });
      panels.forEach((panel, index) => {
        panel.setAttribute("id", `tab-panel-${randomId}-${index}`);
        panel.setAttribute("role", "tab-panel");
        panel.setAttribute("aria-hidden", "true");
        panel.style.display = "none";
      });
      //最初に開きたいパネルを開く
      this.defaultOpenPanel(this.options.defaultOpenPanel)
    }

    switchContent(e) {
      e.preventDefault();
      const tab = e.target;
      const panel = document.querySelector(`#${e.target.getAttribute('aria-controls')}`)

      if (tab.getAttribute('aria-selected') == "false") {
        this.hideContents();
        this.showContent(tab, panel);
      }

    }

    showContent(tab, panel) {
      tab.setAttribute("aria-selected", "true");
      panel.setAttribute("aria-hidden", "false");
      panel.style.display = "";
    }

    hideContents() {
      this.options.tabs.forEach((tab, index) => {
        tab.setAttribute("aria-selected", "false");
      });
      this.options.panels.forEach((panel, index) => {
        panel.setAttribute("aria-hidden", "true");
        panel.style.display = "none";
      });
    }

    defaultOpenPanel(index) {
      const tab = this.options.tabs[index];
      const panel = this.options.panels[index]
      this.showContent(tab, panel);
    }

    attachEvent(element, type, listener, options) {
      return {
        addEvent() {
          element.addEventListener(type, listener, options);
        },
        removeEvent() {
          element.removeEventListener(type, listener);
        }
      }
    }
  }

  function convertElement(obj) {
    if(obj instanceof HTMLElement) {
      return obj
    }
    if(obj instanceof jQuery) {
      return obj[0]
    }
    return document.querySelector(obj);
  }

})();

export default tab;
