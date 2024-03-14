const UAParser = require('ua-parser-js');

const ua = (() => {
  
  class UA {
    constructor() {
      this.uaParser = UAParser();
      this.body = document.querySelector('body');
    }

    init() {
      this.setUA();
    }

    getBrowser() {
      return this.uaParser.browser.name.replace(/\s+/g, "").toLowerCase();
    }

    getDevice() {
      const type = this.uaParser.device.type;
      let type_result = "";
      if (type == 'mobile') {
        type_result = 'sp';
      } else if (type == 'tablet') {
        type_result = 'tb';
      } else {
        type_result = 'pc';
      }
      return type_result;
    }

    getModel() {
      return this.uaParser.device.model ? this.uaParser.device.model.replace(/\s+/g, "").toLowerCase() : "";
    }

    getOS() {
      return this.uaParser.os.name.replace(/\s+/g, "").toLowerCase();
    }

    setUA() {
      this.body.classList.add(`ua-${this.getBrowser()}`);
      this.body.classList.add(`ua-${this.getDevice()}`);
      if (this.getModel()) {
        this.body.classList.add(`ua-${this.getModel()}`);
      }
      this.body.classList.add(`ua-${this.getOS()}`);
    }

  }
  return new UA();

})();

export default ua;


//使い方
// import ua from '../../plugins/userAgent.js';
// ua.init();



// var result = UAParser();
// console.log(result)
// console.log(result.browser.name.replace(/\s+/g, "").toLowerCase())


// var bs = result.browser.name.replace(/\s+/g, "").toLowerCase();
// var ua_type = function () {
//   var type = result.device.type;
//   var type_result = "";
//   if (type == 'mobile') {
//     type_result = 'sp';
//   } else if (type == 'tablet') {
//     type_result = 'tb';
//   } else {
//     type_result = 'pc';
//   }
//   return type_result;
// }
// var ua_model = result.device.model ? result.device.model.replace(/\s+/g, "").toLowerCase() : "";
// var ua_os = result.os.name.replace(/\s+/g, "").toLowerCase();

// $("body").addClass("ua-" + bs);
// $("body").addClass("ua-" + ua_type());
// if (ua_model) {
//   $("body").addClass("ua-" + ua_model);
// }
// $("body").addClass("ua-" + ua_os);

