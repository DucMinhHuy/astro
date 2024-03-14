//テキストエリア自動サイズ変更
(() => {

  const targets = [...document.querySelectorAll(".js-autoResize-textarea")];

  if(!targets) return
  
  targets.forEach(textarea => {
    textarea.addEventListener("input", (event) => {
      resizeTextarea(textarea)
    });
  })
  
  window.addEventListener("resize", (event) => {
    targets.forEach(textarea => {
      resizeTextarea(textarea)
    })
  });
  
  function resizeTextarea(textarea) {
    const textareaHeight = getTextareaHeight(textarea, textarea.value)
    const textareaMaxHeight = textarea.dataset.maxHeight
    if(textareaMaxHeight) {
      if(textareaMaxHeight <= textareaHeight) {
        textarea.style.minHeight = textareaMaxHeight + "px"
        textarea.style.overflowY = "scroll"
      } else {
        textarea.style.minHeight = textareaHeight + "px"
        textarea.style.overflowY = ""
      }

    } else {
      textarea.style.minHeight = textareaHeight + "px"
    }
  }
  
  function getTextareaHeight(textarea, input)  {
    const textareaClassName = textarea.getAttribute("class")
    const ghostElement = document.createElement("div");
    ghostElement.className = textareaClassName;
    ghostElement.setAttribute("aria-hidden", true);
    ghostElement.textContent = input;
    
    // パネルの親ノードに挿入
    textarea.parentNode.appendChild(ghostElement);
    // ひとまずみえなくする
    ghostElement.style.cssText = "display:block; height:auto; visibility: hidden; white-space: pre-wrap;";
    // コピーの高さを調べる
    var textareaHeight = ghostElement.offsetHeight;
    // コピーした要素を削除する
    textarea.parentNode.removeChild(ghostElement);
    // console.log(textareaHeight)
    return textareaHeight
  }

})();


//モーダル内のチェックボックス、ラジオのvalueを取得して表示
(() => {
  const targets = [...document.querySelectorAll(".js-getCheckValue")];
  
  if(!targets) return
  
  function getValue(target) {
    const value = [];
    let inputs = target.querySelectorAll("input");
  
    inputs.forEach((input) => {
      if(input.checked) {
        value.push(input.value)
      }
    })
    return value;
  
  }
  
  function addEvent() {
    targets.forEach((target) => {
      let buttons = target.querySelectorAll('[data-simplemodal-trigger]');
  
      buttons.forEach((button) => {
        button.addEventListener('click', function(){
          const p = document.createElement("p");
          let postElement = target.parentNode.querySelector('.js-postCheckValue');
          let inputValue = getValue(target)
          
          while( postElement.firstChild ){
            postElement.removeChild( postElement.firstChild );
          }
  
          if(inputValue.length > 0) {
            p.textContent = inputValue.join(',');
            postElement.appendChild(p);
          }
  
          // console.log(getValue(target))
        });
      })
  
    
    });
  
  }
  
  addEvent();
})();


//ファイル名を出力
(() => {
  const targets = [...document.querySelectorAll(".js-flie-output-fileName")];

  if(!targets) return

  targets.forEach((target) => {
    const input = target.querySelector('input[type="file"]');
    const nameElement = document.createElement("p");
    nameElement.className = "__js-fileName";
    
    input.addEventListener("input", (event) => {
      target.insertBefore(nameElement, null);
      nameElement.innerHTML = event.target.files[0].name;
    });

  })
})();
