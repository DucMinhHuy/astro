$(window).on("resize", function(){
  var w = $(window).width();
  $(".js-screenWidth").each(function(){
    $(this).css({
      'margin-right': (-(w - $(this).outerWidth(true)) / 2) + 'px',
      'margin-left': (-(w - $(this).outerWidth(true)) / 2) + 'px'
    })
  })
}).trigger("resize");
