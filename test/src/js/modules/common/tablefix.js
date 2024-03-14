import '../../plugins/jquery.tablefix_1.0.1.js';
import isMobile from '../../plugins/is-mobile.js';


$(window).on("resize", function(){
  if(!$(".js-tablefix").length && isMobile(768)) {
    $('.js-fixedTable').tablefix({width: $(".js-fixedTable-wrap").width(), fixCols: 1});
  } else if(!isMobile(768)) {
    $(".js-tablefix").contents().unwrap();
    $(".js-tablefix-data").remove();
  }
}).trigger("resize");

//使い方html
//tableタグを.js-fixedTable-wrapで囲む
//tableタグに.js-fixedTableを付与
