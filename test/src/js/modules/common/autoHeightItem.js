//import autoHeightItem from '../../plugins/autoHeightItem.js';

/*
    autoHeightItem
    高さ揃え（レスポンシブ対応）のプラグインです

    autoHeightParentsClass   高さを揃えたい要素が全て内包されている親のユニークなclass名
    autoHeightClass   高さを揃えたい要素のユニークなclass名
    column   デフォルトで揃えたい数
    breakpoints   設定したポイントで揃えたいカラム数を再指定

    ※カラム数を1以下に設定した場合は高さ揃えは行われません。
    ※１を設定しない限り高さ揃えは行われるので注意してください。
*/


let options = [
  {
    autoHeightParentsClass: "c-card-list",
    autoHeightClass: "c-card-list__item-box-title",
    column: 3,
    breakpoints: {
      // breakPoint1
      768: {
        column: 2
      },
      // breakPoint2
      375: {
        column: 1
      }
    }
  },
  {
    autoHeightParentsClass: "c-card-list2",
    autoHeightClass: "c-card-list__item-box-title2",
    column: 4,
    breakpoints: {
      // breakPoint1
      768: {
        column: 3
      },
      // breakPoint2
      375: {
        column: 2
      }
    }
  }
];

// window.addEventListener('load', function() {
//   autoHeightItem.init(
//     options
//   );
// })


/* 
    デフォルト 
    js-autoHeightItem-parents   高さを揃えたい要素が全て内包されている親につける
    js-autoHeightItem   揃えたい要素につける
    768px以上はカラム数2、以下（スマホ時）は高さ揃えなし
*/
// window.addEventListener('load', function() {
//   autoHeightItem.init({});
// })
