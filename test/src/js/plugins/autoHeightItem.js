const autoHeightItem = (() => {
  class autoHeightItem {

    /*********************************
      初期値設定
      該当のページに一度だけ使う時はjs-autoHeightItem-parentsとjs-autoHeightItemが使用可能
      複数使用する際は必ずそれぞれにユニークなクラス名をつけて使用する
    **********************************/
    constructor() {
       this.settings = {
        autoHeightParentsClass: "js-autoHeightItem-parents",//親のユニークなクラス名
        autoHeightClass: "js-autoHeightItem",//揃えたい要素のユニークなクラス名
        column: 2,//揃えたい要素数
        breakpoints: {//揃えたい要素数が変化するブレイクポイント
          // breakPoint1
          768: {
            column: 1
          }
       }
      }
    }

    /* ------------------------------
        init
    ---------------------------------*/
    init(options) {
      let column;

      if(Object.keys(options).length > 0){
        Object.keys(options).forEach((k) => {
          this.setup(options[k]);
          if(this.settings.breakpoints !== ''){
            let resizeChangeColumn = this.resizeAutoCalc();
            if(resizeChangeColumn !== "" && resizeChangeColumn !== undefined){
              column = resizeChangeColumn;
            }
          }
          this.autoHeightClass(column);
          this.resize();
        });
      }else{
        this.setup(options);
        if(this.settings.breakpoints !== ''){
          let resizeChangeColumn = this.resizeAutoCalc();
          if(resizeChangeColumn !== "" && resizeChangeColumn !== undefined){
            column = resizeChangeColumn;
          }
        }
        this.autoHeightClass(column);
        this.resize();
      }      
    }

    /* ------------------------------
        resize
    ---------------------------------*/
    resize() {
      
      let timeoutId;
      let column = "";
      let columnx= this.settings.column;
      let target = `.${this.settings.autoHeightParentsClass} .${this.settings.autoHeightClass}`;//対象の要素特定
      let elements = document.querySelectorAll(target);//対象の要素を配列で取得
      let breakpoints = this.settings.breakpoints;
      
      window.addEventListener( "resize", () => {
        
        // リサイズを停止して500ms後に終了とする
        clearTimeout( timeoutId ) ;
        timeoutId = setTimeout( () => {
          //高さリセット（jsで強制的につけられたstyleをリセット）
          elements.forEach((element, index) => {
            $(element).removeAttr('style');
          })

          if(breakpoints !== ''){
            let resizeChangeColumn = this.resizeAutoCalc(columnx,breakpoints);
            if(resizeChangeColumn !== "" && resizeChangeColumn !== undefined){
              column = resizeChangeColumn;
            }
          }
          
          //並べたいカラム数が2つ以上でない場合は揃えない
          if(column > 1){
            this.autoHeightClass(column,target);
          }
          
        }, 500 ) ;
      });
    }
    
    /* ------------------------------
        setup
    ---------------------------------*/
    setup(options) {
      this.settings = Object.assign({
        autoHeightParentsClass: this.settings.autoHeightParentsClass,
        autoHeightClass: this.settings.autoHeightClass,
        column: this.settings.column,
        breakpoints: this.settings.breakpoints
      }, options || {});
    }
    
    /* ------------------------------
        autoHeightClass
    ---------------------------------*/
    autoHeightClass(variableColumn,variabletarget) {

      let target = '';//対象の要素特定
      let column = '';
      let intRow = '';
      let surplusNum = '';
      let countNum = 0;//今何個目かカウントする変数
      let countRow = 1;//今何列目かカウントする変数
      let rowData = [];//列ごとに対象の数分格納する配列
      let heightObject = [];//最終的な配列
      
      if(variabletarget !== '' && variabletarget !== undefined){
        target = variabletarget;
      }else{
        target = `.${this.settings.autoHeightParentsClass} .${this.settings.autoHeightClass}`;
      }

      let elements = document.querySelectorAll(target);//対象の要素を配列で取得


      //**********************
      //リサイズによりカラム数の変動対応
      //**********************
      if(variableColumn !== '' && variableColumn !== undefined) {
        column = variableColumn - 1;//カウントが0からのため揃えたい要素数から1引いておく
        intRow = Math.floor(elements.length / variableColumn);//対象の数をMAXに満たす列の数
        surplusNum = (elements.length - (Math.floor(elements.length / variableColumn) * variableColumn));//対象の数をMAXに満たさない余りの要素数
      }else{
        column = this.settings.column - 1;//カウントが0からのため揃えたい要素数から1引いておく
        intRow = Math.floor(elements.length / this.settings.column);//対象の数をMAXに満たす列の数
        surplusNum = (elements.length - (Math.floor(elements.length / this.settings.column) * this.settings.column));//対象の数をMAXに満たさない余りの要素数
      }


      //**********************
      //高さをcolumnで指定された数ずつ配列に格納
      //**********************
      elements.forEach((element, index) => {
        let height = element.clientHeight;
        if(countNum <= column){
          rowData.push(height);
          if(countNum == column) {
            heightObject.push(rowData);
            rowData = [];
            ++countRow;
            if(variableColumn !== '' && variableColumn !== undefined){
              column += variableColumn;
            }else{
              column += this.settings.column;
            }
          }

          if(variableColumn !== '' && variableColumn !== undefined){
            if(intRow + 1 == countRow && countNum == (column + surplusNum - variableColumn)) {
              if(rowData.length >= 1) {
                heightObject.push(rowData);
              }
            }
          }else{
            if(intRow + 1 == countRow && countNum == (column + surplusNum - this.settings.column)) {
              if(rowData.length >= 1) {
                heightObject.push(rowData);
              }
            }
          }
          
          countNum++;
        }
      })

      //**********************
      //比較して最大値を求めて配列に格納する
      //**********************
      let maxHeightArry = [];
      for (const elem of heightObject) {
        let maxNum = Math.max.apply(null, elem);
        maxHeightArry.push(maxNum);
      }

      //**********************
      //最大値の高さを適用する
      //**********************
      if(variableColumn !== '' && variableColumn !== undefined){
        column = variableColumn - 1;//カウントが0からのため揃えたい要素数から1引いておく
        countNum = 0;//今何個目かカウントする変数
        countRow = 0;//今何列目かカウントする変数
        intRow = Math.floor(elements.length / variableColumn);//対象の数をMAXに満たす列の数
      }else{
        column = this.settings.column - 1;//カウントが0からのため揃えたい要素数から1引いておく
        countNum = 0;//今何個目かカウントする変数
        countRow = 0;//今何列目かカウントする変数
        intRow = Math.floor(elements.length / this.settings.column);//対象の数をMAXに満たす列の数
      }
      
      elements.forEach((element, index) => {
        if(countNum <= column){
          element.style.height = `${maxHeightArry[countRow]}px`; 
          if(countNum == column) {
            ++countRow;
            if(variableColumn !== '' && variableColumn !== undefined){
              column += variableColumn;
            }else{
              column += this.settings.column;
            }
          }
          countNum++;
        }
      })
    }//autoHeightClass

    /* ------------------------------
        resizeAutoCalc
    ---------------------------------*/
    resizeAutoCalc(columnx,breakpoints){
      let widthNum = window.innerWidth;
      let breakPointArray = [];
      let changeColumn = "";
      
      if(columnx !== undefined && breakpoints !== undefined){
        breakPointArray = breakpoints;
      }else{
        breakPointArray = this.settings.breakpoints;
      }

      if(typeof breakPointArray == 'object' && breakPointArray !== null){
        let breakPointKeyArray = Object.keys(breakPointArray);

        breakPointKeyArray.sort(function(a,b){
          if( a > b ) return -1;
          if( a < b ) return 1;
          return 0;
        });
        
        let count = 0;
        for (const key of breakPointKeyArray) {
          let breakPointColumn = breakPointArray[key]['column'];
          Number(key);
          if(key < widthNum && count == 0){
            if(columnx !== undefined && breakpoints !== undefined){
              changeColumn = columnx;
            }else{
              changeColumn = this.settings.column;
            }
            
            count++;
            break;
          }
          if(widthNum <= key){
            changeColumn = breakPointColumn;
          }
          count++;
        }
      }
      return changeColumn;
    }//resizeAutoCalc

  }

  return new autoHeightItem();
})();

export default autoHeightItem;