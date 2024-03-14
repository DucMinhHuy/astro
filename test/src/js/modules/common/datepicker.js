import 'whatwg-fetch';
require('jquery-ui/ui/widgets/datepicker');


var dateFormat   = 'yy/mm/dd';
// var holidays = [];

async function getHoliday() {
  const response = await fetch('https://holidays-jp.github.io/api/v1/date.json')

  var holidays = []
  try {
    const holidayOriginal = await response.json() // パース

    // 日付のみにして / 区切り
    holidays = $.map( holidayOriginal, function(v, i){
      var reg = new RegExp("-", "g");
      return i.replace(reg, '/');
    });
    // console.log(holidays)
  } catch (e) {
    console.log("Holidays are not found.")
  }

  await promiseDatepicker(holidays)
}

getHoliday();



function promiseDatepicker(holidays) {
  $.datepicker.setDefaults({
    // 日本語へローカライズ
    // Cf. //jquery.nj-clucker.com/jquery-ui-datepicker/
    closeText: '閉じる',
    prevText: '',
    nextText: '',
    currentText: '今日',
    monthNames: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    dayNamesMin: ['日','月','火','水','木','金','土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'
  });
  $(".js-datepicker").datepicker({
    showOtherMonths: true,
    showButtonPanel: true,
    minDate: '+3d',
    maxDate: '+6m',
    // dateFormat: 'yy/mm/dd',
    beforeShow: function(input, inst) {
      var date = new Date();
      // debugger
      // GCalHolidays.datepicker(date.getFullYear(), date.getMonth() + 1, inst);
      // console.log(input);
      // debugger
      if($(window).width() <= 640) {
        $("body").append('<div id=.js-datepicker-overlay" data-handler="hide"></div>');
        var ScrTop = $(document).scrollTop();
        setTimeout(function() {
          $("#ui-datepicker-div").offset( { top : ScrTop + ($(window).height() / 2) - ($("#ui-datepicker-div").outerHeight() /2 )} );
          // console.log($("#ui-datepicker-div").outerHeight());
        }, 1);

        // $("#ui-datepicker-div").offset( { top : ScrTop + ($(window).height() / 2) - 170} );
      }
    },
    beforeShowDay: function(date) {
      var holiday = $.datepicker.formatDate(dateFormat, date);
      // console.log(holidays.indexOf(holiday) == -1);
      return [( holidays.indexOf(holiday) ), (holidays.indexOf(holiday) == -1 ? "" : "gcal-holiday")];
      // var holidayList = ["20171114", "20171128", "20171212", "20171226", "20171229", "20171230", "20171231"];
      // var result;
      // var dtDay = $.format.date( day, "yyyyMMdd" );
      // if( $.inArray( dtDay, holidayList ) != -1 ){
        // 	result = [false];
        // } else {
          // 	result = [true];
          // }
          // return result;
          // // 日曜日
          // if (date.getDay() == 0) {
            //     return [true, 'gcal-sunday'];
            // }
            // // 土曜日
            // if (date.getDay() == 6) {
              //     return [true, 'gcal-saturday'];
              // }
              // // 火曜日
              // if (date.getDay() == 2) {
                //     var holidays = GCalHolidays.get(2017, 3)
                //     // debugger
                //     return [false, ''];
                // }
                // // 平日
                // return [true, ''];

              },
              onClose: function(dateText) {
                $('.js-datepicker-overlay').fadeOut("500",function(){
                  $('.js-datepicker-overlay').remove();
                });
              }
            });

}
