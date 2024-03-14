



function fadeAnime(){
   // シャッ（背景色が伸びて出現）   左から右
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    // var elemPos = $(this).offset().top + 10;//要素より、10px上の
    // var scroll = $(window).scrollTop();
    // var windowHeight = $(window).height();
    // if (scroll >= elemPos - windowHeight){
    //   $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    // }else{
    //   $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    // }

    $(this).addClass('bgLRextend');
  }); 
}



function fadeAnime2(){
  // シャッ（背景色が伸びて出現）   右から左
 $('.bgRLextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  //  var elemPos = $(this).offset().top + 10;//要素より、10px上の
  //  var scroll = $(window).scrollTop();
  //  var windowHeight = $(window).height();
  //  if (scroll >= elemPos - windowHeight){
  //    $(this).addClass('bgRLextend');// 画面内に入ったらbgLRextendというクラス名を追記
  //  }else{
  //    $(this).removeClass('bgRLextend');// 画面外に出たらbgLRextendというクラス名を外す
  //  }

   $(this).addClass('bgRLextend');
 }); 
}


function fadeAnime3(){
 // じわっ
 $('.blurTrigger').each(function(){ //blurTriggerというクラス名が
  //  var elemPos = $(this).offset().top + 10;//要素より、10px上の
  //  var scroll = $(window).scrollTop();
  //  var windowHeight = $(window).height();
  //  if (scroll >= elemPos - windowHeight){
  //    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
  //  }else{
  //    $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
  //  }

   $(this).addClass('blur');
 });
}





function EachTextAnimeControl_span() {
  //spanタグを追加する
  var element = $(".text-anime01");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
}

function EachTextAnimeControl() {
  $('.text-anime01').each(function () {
    var elemPos = $(this).offset().top + 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
    }
    //  else {
    //   $(this).removeClass("appeartext");
    // }
    //$(this).addClass("appeartext");
  });
}



/*--------------------------------------
実行
----------------------------------------*/


  //画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    fadeAnime();
    fadeAnime2();
    fadeAnime3();
    //EachTextAnimeControl();
    EachTextAnimeControl_span();
  });

  // 画面をスクロールをしたら動かしたい場合はこっちに
  $(window).scroll(function (){
    // fadeAnime();
    // fadeAnime2();
    // fadeAnime3();
    EachTextAnimeControl();
  });
