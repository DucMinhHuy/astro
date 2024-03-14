const hoge = (() => {

  class Hoge {
    static aaaa: string = "あああ";
    bbbb: string;
    constructor() {
      this.bbbb = "abc"
    }

    static classMethod() {
      console.log(this.aaaa)
    }

    fuga() {
      return this.bbbb
      // console.log(this.bbbb)
    }
  }
  return new Hoge();

})();

export default hoge;