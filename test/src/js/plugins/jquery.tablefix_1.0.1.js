/*
 * jQuery TableFix plugin ver 1.0.1
 * Copyright (c) 2010 Otchy
 * This source file is subject to the MIT license.
 * http://www.otchy.net
 */
(function($){
	$.fn.tablefix = function(options) {
		return this.each(function(index){
			// 処理継続の判定
			var opts = $.extend({}, options);
			var baseTable = $(this);
			var baseWidth = opts.width;

			var withWidth = (baseWidth > 0);
			var withHeight = (opts.height > 0);
			if (withWidth) {
				withWidth = (baseWidth < baseTable.width());
			} else {
				baseWidth = baseTable.width();
			}
			if (withHeight) {
				withHeight = (opts.height < baseTable.height());
			} else {
				opts.height = baseTable.height();
			}
			if (withWidth || withHeight) {
				if (withWidth && withHeight) {
					baseWidth -= 40;
					opts.height -= 40;
				} else if (withWidth) {
					baseWidth -= 20;
				} else {
					opts.height -= 20;
				}
			} else {
				return;
			}
			// 外部 div の設定
			baseTable.wrap('<div class="js-tablefix"></div>');
			var div = baseTable.parent();
			div.css({position: "relative"});


			// テーブルの分割と初期化
			var crossTable = baseTable.wrap('<div class="js-tablefix js-tablefix-cross"></div>');
			var rowTable = baseTable.clone().wrap('<div class="js-tablefix js-tablefix-row"></div>');
			var colTable = baseTable.clone().wrap('<div class="js-tablefix js-tablefix-col"></div>');
			var bodyTable = baseTable.clone().wrap('<div class="js-tablefix js-tablefix-body"></div>');
			var crossDiv = crossTable.parent().css({position: "absolute", overflow: "hidden"});
			var rowDiv = rowTable.parent().css({position: "absolute", overflow: "hidden"});
			var colDiv = colTable.parent().css({position: "absolute", overflow: "hidden", "z-index": "1000"});
			var bodyDiv = bodyTable.parent().css({position: "absolute", overflow: "auto"});
			div.append(rowDiv).append(colDiv).append(bodyDiv);


			$(window).on("resize", function(){
				// スクロール部オフセットの取得
				var fixRows = (opts.fixRows > 0) ? opts.fixRows : 0;
				var fixCols = (opts.fixCols > 0) ? opts.fixCols : 0;
				var offsetX = 0;
				var offsetY = 0;
				baseTable.find('tr').each(function(indexY) {
					$(this).find('td,th').each(function(indexX){
						if (indexY == fixRows && indexX == fixCols) {
							var cell = $(this);
							offsetX = cell.position().left;
							offsetY = cell.parent('tr').position().top;
							return false;
						}
					});
					if (indexY == fixRows) {
						return false;
					}
				});

				baseWidth = $(".js-fixedTable-wrap").width();
				// クリップ領域の設定
				var bodyWidth = baseWidth - offsetX;
				var bodyHeight = opts.height - offsetY;
				crossDiv.width(offsetX).height(offsetY);
				rowDiv
				.width(bodyWidth + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.height(offsetY)
				.css({left: offsetX + 'px'});
				rowTable.css({
					marginLeft: -offsetX + 'px',
					marginRight: (withWidth ? 20 : 0) + (withHeight ? 20 : 0) + 'px'
				})
				.addClass("js-tablefix-data");
				colDiv
				.width(offsetX + 2)
				.height(bodyHeight + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.css({top: offsetY + 'px'});
				colTable.css({
					marginTop: -offsetY + 'px',
					marginBottom: (withWidth ? 20 : 0) + (withHeight ? 20 : 0) + 'px'
				})
				.addClass("js-tablefix-data");
				bodyDiv
				.width(bodyWidth + (withWidth ? 0 : 0) + (withHeight ? 20 : 0) + offsetX)
				.height(bodyHeight + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.css({left: '0px', top: offsetY + 'px'});
				bodyTable.css({
					marginLeft: '0px',
					marginTop: -offsetY + 'px',
					marginRight: (withWidth ? 20 : 0) + 'px',
					marginBottom: (withHeight ? 20 : 0) + 'px'
				})
				.addClass("js-tablefix-data");
				if (withHeight) {
					rowTable.width(bodyTable.width());
				}
			}).trigger("resize");

			// スクロール連動
			bodyDiv.scroll(function() {
				rowDiv.scrollLeft(bodyDiv.scrollLeft());
				colDiv.scrollTop(bodyDiv.scrollTop());
			});
			// 外部 div の設定
			div
			.width(baseWidth + (withWidth ? 0 : 0) + (withHeight ? 20 : 0))
			.height(opts.height + (withWidth ? 20 : 0) + (withHeight ? 20 : 0));
		});
	}
})(jQuery);
