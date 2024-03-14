<!doctype html>
<html lang="ja">

<head>

	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/meta.html"); ?>

	<title></title>

	<link href="/assets/css/dev.css" rel="stylesheet">
	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/other.html"); ?>

	<style media="screen">
		.box {
			height: 300px;
		}
		.box.-colored-1 {
			background: #357C53;
		}
		.box.-colored-2 {
			background: #82C99F;
		}
		.box.-colored-3 {
			background: #163523;
		}
		.box.-colored-4 {
			background: #5EBA84;
		}
		.box.-colored-5 {
			background: #DBEFE3;
		}

	</style>

</head>

<body>


	<div id="l-contents" class="is-col--1 is-top">

		<div id="l-contents-detail">

			<main id="l-main">

				<section class="l-section u-mt_m">
					<div class="l-section__inner">

						<p class="u-fw_b u-mb_xxs">タブレット(1024px)以上 6 : 6</p>

						<div class="p-row -margin-sp-20">
							<div class="p-col-sp-5 box -colored-1"></div>
							<div class="p-col-sp-7 box -colored-2"></div>
						</div>

					</div>
				</section>

				<section class="l-section u-mt_m">
					<div class="l-section__inner">

						<p class="u-fw_b u-mb_xxs">タブレット(1024px)以上 6 : 6</p>
						<p class="u-fw_b u-mb_xxs">タブレット(1024px)未満 下マージン20px</p>

						<div class="p-row -margin-tb-y-20">
							<div class="p-col-tb-6 box -colored-3"></div>
							<div class="p-col-tb-6 box -colored-4"></div>
						</div>

					</div>
				</section>

				<section class="l-section">
					<div class="l-section__inner">

						<p class="u-fw_b u-mb_xxs">スマホ(768px)以上 4 : 8</p>

						<div class="p-row">
							<div class="p-col-sp-4 box -colored-3"></div>
							<div class="p-col-sp-8 box -colored-5"></div>
						</div>

					</div>
				</section>


				<section class="l-section">
					<div class="l-section__inner">

						<p class="u-fw_b u-mb_xxs">スマホ(768px)以上 2 : 8 : 2 横マージン20px</p>

						<div class="p-row -margin-sp-20">
							<div class="p-col-sp-2 box -colored-1"></div>
							<div class="p-col-sp-8 box -colored-4"></div>
							<div class="p-col-sp-2 box -colored-2"></div>
						</div>

					</div>
				</section>


				<section class="l-section">
					<div class="l-section__inner">

						<p class="u-fw_b u-mb_xxs">スマホ(768px)以上 上段3 : 3 : 6 下段6 : 6 横マージン50px</p>
						<p class="u-fw_b u-mb_xxs">スマホ(768px)未満 下マージン20px</p>

						<div class="p-row -margin-sp-50 -margin-sp-y-20">
							<div class="p-col-sp-3 box -colored-1"></div>
							<div class="p-col-sp-3 box -colored-3"></div>
							<div class="p-col-sp-6 box -colored-4"></div>
							<div class="p-col-sp-6 box -colored-1"></div>
							<div class="p-col-sp-6 box -colored-4"></div>
						</div>

					</div>
				</section>


				<section class="l-section">
					<div class="l-section__inner">

						<p class="u-fw_b u-mb_xxs">スマホ小(599px)以上 6 : 6 横マージン20px</p>
						<p class="u-fw_b u-mb_xxs">スマホ小(599px)未満 下マージン30px</p>

						<div class="p-row -margin-sp-s-20 -margin-sp-s-y-30">
							<div class="p-col-sp-s-6 box -colored-5"></div>
							<div class="p-col-sp-s-6 box -colored-2"></div>
						</div>

					</div>
				</section>



			</main><!-- l-main -->

		</div><!-- /l-contents-detail -->

	</div><!-- /l-contents -->


	<?php //include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/footer.html"); ?>

	<div class="js-load">

	</div>



	<?php include($_SERVER["DOCUMENT_ROOT"] . "/assets/inc/js.html"); ?>

</body>

</html>