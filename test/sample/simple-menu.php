<!doctype html>
<html lang="ja">

<head>

	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/meta.html"); ?>

	<title></title>

	<link href="/assets/css/dev.css" rel="stylesheet">
	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/other.html"); ?>

	<style media="screen">
		#l-header {
			height: 65px;
			background: #ddd;
		}

		.js-megamenu {
			display: flex;
		}
		.c-simplemenu-button {
			position: fixed;
			right: 20px;
			top: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px;
			background: #ccc;
		}
	</style>

</head>

<body>


	<div id="l-contents" class="is-col--1 is-top">

		<div id="l-contents-detail">

			<main id="l-main">

				<section class="l-section">
					<div class="l-section__inner">

					<button data-hoge="hoge">
					sampleボタン
					</button>

					<div id="hoge">
					ああああああ
					</div>

					<nav class="l-navigation">
						<button class="l-navigation-button" type="button" data-simplemenu-trigger="js-simplemenu-content" aria-label="メニューを開く" aria-haspopup="true">
							<span class="l-navigation-button__line"></span>
							<span class="l-navigation-button__line"></span>
							<span class="l-navigation-button__line"></span>
						</button>
						<!-- <button class="l-navigation-button is2" type="button" data-simplemenu-trigger="js-simplemenu-content2" aria-label="メニューを開く" aria-haspopup="true">
							<span class="l-navigation-button__line"></span>
							<span class="l-navigation-button__line"></span>
							<span class="l-navigation-button__line"></span>
						</button> -->
						<div id="js-simplemenu-content" class="l-navigation-content">
							<div class="l-navigation-content__inner">
								メニュー内容
								<ul>
									<li><a href="">リンク</a></li>
									<li><a href="">リンクB</a></li>
									<li><a href="">リンクC</a></li>
									<li><a href="">リンクD</a></li>
									<li><a href="">リンクE</a></li>
									<li><a href="">リンクF</a></li>
									<li><a href="">リンクG</a></li>
									<li><a href="">リンクH</a></li>
								</ul>
								<button class="" type="button" data-simplemenu-trigger="js-simplemenu-content">
									閉じる
								</button>
								<div>
								<button type="button" data-simplemenu-trigger="js-simplemenu-content2" aria-label="メニューを開く" aria-haspopup="true">
									モーダル2を開く
								</button>
								</div>
							</div>
						</div>
						<div id="js-simplemenu-content2" class="l-navigation-content -ex">
							<div class="l-navigation-content__inner">
								メニュー内容2
								<ul>
									<li><a href="">リンク</a></li>
									<li><a href="">リンクB</a></li>
									<li><a href="">リンクC</a></li>
									<li><a href="">リンクD</a></li>
									<li><a href="">リンクE</a></li>
									<li><a href="">リンクF</a></li>
									<li><a href="">リンクG</a></li>
									<li><a href="">リンクH</a></li>
								</ul>
								<button class="" type="button" data-simplemenu-trigger="js-simplemenu-content2">
									閉じる
								</button>
							</div>
						</div>
					</nav>





						<div class="js-accordion c-accordion">
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン1
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン2
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン3
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン4
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
									</div>
								</div>
							</section>
						
						</div>
						<div class="js-accordion c-accordion hoge">
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン1
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン2
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン3
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン4
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
									</div>
								</div>
							</section>
						
						</div>


						<div class="js-accordion2 c-accordion -type2">
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン1
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン2
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン3
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
										<p>あああああああああああああああ</p>
									</div>
								</div>
							</section>
							<section class="c-accordion__item">
								<h2 class="c-accordion__header">
									<button type="button" class="c-accordion__trigger js-accordion-trigger">
										アコーディオン4
									</button>
								</h2>
								<div class="c-accordion__panel js-accordion-panel">
									<div class="c-accordion__panel-content">
										<p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
									</div>
								</div>
							</section>
						
						</div>

					

					</div>
				</section>





			</main><!-- l-main -->

		</div><!-- /l-contents-detail -->

	</div><!-- /l-contents -->


	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/footer.html"); ?>

	<div class="js-load">

	</div>



	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/js.html"); ?>

</body>

</html>