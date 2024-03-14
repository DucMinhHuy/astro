<!doctype html>
<html lang="ja">

<head>

	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/meta.html"); ?>

	<title></title>

	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/css.html"); ?>
	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/other.html"); ?>


</head>

<body>


	<div id="l-contents" class="is-col--1 is-top">

		<div id="l-contents-detail">

			<main id="l-main">

			<div class="l-breadcrumb">
					<div class="l-breadcrumb__inner">
						<ul class="l-breadcrumb-list">
							<li class="l-breadcrumb-list__item">
								<a href="/hospitalization/">
									<span class="l-breadcrumb-list__text">トップページ</span>
								</a>
							</li>
							<li class="l-breadcrumb-list__item">
								<a href="/hospitalization/">
									<span class="l-breadcrumb-list__text">カテゴリー名など</span>
								</a>
							</li>
							<li class="l-breadcrumb-list__item">
								<a href="/hospitalization/">
									<span class="l-breadcrumb-list__text">カテゴリー名など</span>
								</a>
							</li>
							<li class="l-breadcrumb-list__item">
								<span class="l-breadcrumb-list__text">ページタイトル</span>
							</li>
						</ul>
					</div>
				</div><!-- breadcrumb -->

				<i class="myfont myfont-sns_facebook"></i>

				<input type="text" class="js-datepicker" style="border: solid 1px #333" name="" value="">

				<a href="/sample/megamenu.php">中ページへ</a>
				<a href="tel:09059309701">電話</a>
				<a href="tel:09059309701">電話</a>


				<button type="button">ボタン</button>
				<input type="checkbox" name="a" value="0">1
				<input type="checkbox" name="a" value="1">2
				<input type="checkbox" name="a" value="2">3

				<textarea name="" id="" cols="30" rows="10"></textarea>

				<select name="" id="">
					<option value="">ああああ</option>
					<option value="">ああああ</option>
				</select>


				<div>
					<div>
						<p class="c-ui-form-text">
							<input class="c-ui-form-text__input" type="text" placeholder="テキストを入力">
						</p>
					</div>
					<div>
						<div class="c-ui-form-textarea">
							<textarea class="c-ui-form-textarea__input js-autoResize-textarea" data-max-height="300"></textarea>
						</div>
					</div>
					<div>
						<label class="c-ui-form-checkbox">
							<input class="c-ui-form-checkbox__input" type="checkbox">
							<span class="c-ui-form-checkbox__icon"></span>
							<span class="c-ui-form-checkbox__text">ラベルの文言</span>
						</label>
					</div>
					<div>
						<label class="c-ui-form-radio">
							<input class="c-ui-form-radio__input" type="radio" name="b" value="1">
							<span class="c-ui-form-radio__icon"></span>
							<span class="c-ui-form-radio__text">ラベルの文言</span>
						</label>
						<label class="c-ui-form-radio">
							<input class="c-ui-form-radio__input" type="radio" name="b" value="2">
							<span class="c-ui-form-radio__icon"></span>
							<span class="c-ui-form-radio__text">ラベルの文言</span>
						</label>
					</div>
					<div>
						<div class="c-ui-form-file js-flie-output-fileName">
							<input id="file" class="c-ui-form-file__input" type="file" name="file">
							<label class="c-ui-form-file__select" for="file">
								<span class="c-ui-form-file__select-text">ファイルを選択する</span>
							</label>
						</div>
					</div>
				</div>


				<div class="js-fixedTable-wrap">
					<table class="js-fixedTable">
						<thead>
							<tr>
								<th>タイプ</th>
								<th colspan="2">間取り</th>
								<th>お風呂</th>
								<th>トイレ</th>
								<th>客室</th>
								<th>その他設備</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>A</td>
								<td>和室</td>
								<td>10畳</td>
								<td>☓</td>
								<td>○</td>
								<td>5室</td>
								<td></td>
							</tr>
							<tr>
								<td>B</td>
								<td>和室</td>
								<td>10畳</td>
								<td>☓</td>
								<td>○</td>
								<td>5室</td>
								<td></td>
							</tr>
							<tr>
								<td rowspan="2">C</td>
								<td>和室</td>
								<td>10畳</td>
								<td>○</td>
								<td>○</td>
								<td>4室</td>
								<td></td>
							</tr>
							<tr>
								<td>和室</td>
								<td>8畳+6畳</td>
								<td>○</td>
								<td>○</td>
								<td>1室</td>
								<td class="u-ta_l">部屋の特徴や、<br>タイプ毎の違いを明記できればと思います。</td>
							</tr>
							<tr>
								<td rowspan="2">D</td>
								<td>和室</td>
								<td>12畳 + 次の間</td>
								<td>○</td>
								<td>○</td>
								<td>1室</td>
								<td></td>
							</tr>
							<tr>
								<td>和室</td>
								<td>12.5畳 + 次の間</td>
								<td>○</td>
								<td>○</td>
								<td>2室</td>
								<td></td>
							</tr>
							<tr>
								<td>E</td>
								<td>和室 2間</td>
								<td>10畳 + 次の間</td>
								<td>☓</td>
								<td>○</td>
								<td>2室</td>
								<td></td>
							</tr>
							<tr>
								<td>F</td>
								<td>和室・洋室</td>
								<td>10畳・10畳</td>
								<td>☓</td>
								<td>○</td>
								<td>5室</td>
								<td></td>
							</tr>
							<tr>
								<td>G</td>
								<td>和室</td>
								<td>12畳 + 次の間</td>
								<td>☓</td>
								<td>○</td>
								<td>5室</td>
								<td></td>
							</tr>
						</tbody>
					</table>


				</div>

				<p><a href="#link">ページ内リンク</a></p>
				<p><a href="https://www.yahoo.co.jp/" target="_blank">yahoo</a></p>
				<br>
				<br>
				<br>
				<br>
				<br>
				<!-- <p><img src="/assets/img/common/logo.png" alt="ロゴ" class="m-parallax" data-speed="15" data-limit="250"></p> -->
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>

				<p id="link">ページ内リンクポイント</p>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>
				<br>


			</main><!-- l-main -->

		</div><!-- /l-contents-detail -->

	</div><!-- /l-contents -->


	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/footer.html"); ?>

	<div class="js-load">

	</div>



	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/js.html"); ?>

</body>

</html>