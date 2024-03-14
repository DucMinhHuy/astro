// 1. 必要ライブラリ
const gulp = require("gulp");
const sass = require("gulp-dart-sass");
// const sassGlob = require("gulp-sass-glob");
const sassGlob = require("gulp-sass-glob-use-forward");
const sassUnicode = require("gulp-sass-unicode");
const plumber = require("gulp-plumber");
const purgecss = require("gulp-purgecss");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");
const webp = require("gulp-webp");
const imageminJpg = require("imagemin-jpeg-recompress");
const imageminPng = require("imagemin-pngquant");
const imageminGif = require("imagemin-gifsicle");

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssGapProperties = require("postcss-gap-properties");

const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const cheerio = require("gulp-cheerio");
const temp = require("gulp-template");

//webpack
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

//アイコンフォント作成用
const iconfont = require("gulp-iconfont");
const consolidate = require("gulp-consolidate");
const iconFontOutputDirectory = "assets/";
const runTimestamp = Math.round(Date.now() / 1000);
const fontName = "myfont"; // シンボルフォント名

// 2. タスク

//sassコンパイル
const task_sass = () => {
  return (
    gulp
      .src("src/sass/*scss")
      .pipe(plumber())
      .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
      //圧縮なしはexpanded 圧縮compressed
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(sassUnicode())
      .pipe(
        postcss([
          postcssGapProperties(),
          autoprefixer({
            // ☆IEは11以上、Androidは4.4以上
            // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
            // 対応ブラウザはpackege.jsonに記載
            grid: true,
            cascade: false,
          }),
        ])
      )
      .pipe(gulp.dest("assets/css/"))
  );
};

//js & ts webpack
const task_js_bundle = () => {
  return webpackStream(webpackConfig, webpack)
    .on("error", function (e) {
      this.emit("end");
    })
    .pipe(gulp.dest("./assets/js"));
};

//アイコンフォント ジェネレーター
const task_iconfont = () => {
  return gulp
    .src(["src/iconfont/svg/*.svg"])
    .pipe(
      iconfont({
        fontName: fontName, // required
        timestamp: runTimestamp,
        formats: ["ttf", "eot", "woff", "svg"],
      })
    )
    .on("glyphs", function (glyphs, options) {
      (engine = "lodash"),
        (consolidateOptions = {
          glyphs: glyphs,
          fontName: fontName,
          fontPath: "../fonts/", // フォントパスをCSSからの相対パスで指定
          className: "myfont", // CSSのフォントのクラス名を指定
        });
      gulp
        .src("src/iconfont/templates/myfont.scss")
        .pipe(consolidate(engine, consolidateOptions))
        .pipe(rename({ basename: "_" + fontName }))
        .pipe(gulp.dest("src/sass/foundation/base/")); // SCSSの吐き出し先を指定
      gulp
        .src("src/iconfont/templates/myfont.css")
        .pipe(consolidate(engine, consolidateOptions))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest("src/iconfont/")); // CSSの吐き出し先を指定
      // シンボルフォント一覧のサンプルHTMLを作成
      gulp
        .src("src/iconfont/templates/myfont.html")
        .pipe(consolidate(engine, consolidateOptions))
        .pipe(rename({ basename: "sample" }))
        .pipe(gulp.dest("src/iconfont/")); // サンプルHTMLの吐き出し先を指定
    })
    .pipe(gulp.dest(iconFontOutputDirectory + "fonts/"));
};

//スプライトsvg ジェネレーター
const task_sprite_svg = () => {
  return gulp
    .src("./src/sprite_svg/svg/*.svg")
    .pipe(
      svgmin({
        plugins: [
          {
            removeTitle: false, //titleは削除しない
          },
          {
            removeDesc: false, //descは削除しない
          },
        ],
      })
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(
      cheerio({
        run: function ($, file) {
          // 不要なタグを削除
          $("style,defs").remove();
          // symbolタグ以外のid属性を削除
          // $('[id]:not(symbol)').removeAttr('id');
          // Illustratorで付与される「st」または「cls」ではじまるclass属性を削除
          $('[class^="st"],[class^="cls"]').removeAttr("class");
          // svgタグ以外のstyle属性を削除
          $("[style]:not(svg)").removeAttr("style");
          // data-name属性を削除
          $("[data-name]").removeAttr("data-name");
          // fill属性を削除
          $("[fill]").removeAttr("fill");
          // svgタグにdisplay:noneを付与（読み込み時、スプライト全体を非表示にするため）
          $("svg").attr({
            style: "display:none;",
          });

          // _base.htmlに渡すid
          var symbols = $("svg > symbol")
            .map(function (idx, item) {
              console.log(item.attribs);
              // var viewBoxArr = $(item).attr('viewBox').match(/\d+/g);
              return {
                id: $(this).attr("id"),
              };
            })
            .get();
          gulp
            .src("./src/sprite_svg/templates/_base.html")
            .pipe(
              temp({
                inlineSvg: $("svg"),
                symbols: symbols,
              })
            )
            .pipe(rename("_sample.html"))
            .pipe(gulp.dest("./src/sprite_svg/"));
        },
        parserOptions: {
          xmlMode: true,
        },
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./assets/svg/"));
};

const img_paths = {
  img_before: "./src/img",
  img: "./assets/img",
};
const task_imagemin = () => {
  let srcGlob = img_paths.img_before + "/**/*.+(jpg|jpeg|png|gif)";
  let dstGlob = img_paths.img;
  return gulp
    .src(srcGlob)
    .pipe(changed(dstGlob))
    .pipe(
      imagemin([
        imageminPng(),
        imageminJpg(),
        imageminGif({
          interlaced: false,
          optimizationLevel: 3,
          colors: 180,
        }),
      ])
    )
    .pipe(gulp.dest(dstGlob));
};

//webp変換
const task_imageWebp = () => {
  return gulp
    .src(["assets/img/*.{jpg,gif}", "assets/img/**/*.{jpg,gif}"], {
      base: "assets/img",
    })
    .pipe(
      rename(function (path) {
        path.basename += path.extname;
      })
    )
    .pipe(
      webp({
        quality: 75,
        method: 6,
      })
    )
    .pipe(gulp.dest("assets/img/webp"));
};

//HTML、PHPで使用していないcssを削除
const task_perge = () => {
  return gulp
    .src("./assets/css/*.css")
    .pipe(
      purgecss({
        content: ["./**/*.html", "./**/*.php"], 
        // 構築ファイルで使用される可能性のあるファイルを全て指定
      })
    )
    .pipe(gulp.dest("assets/css/"))
};

const task_watch = () => {
  const watches = [
    gulp.watch("src/sass/**/*scss", task_sass),
    gulp.watch("src/js/**/*.js", task_js_bundle),
    gulp.watch("src/ts/**/*.ts", task_js_bundle),
    gulp.watch("src/iconfont/svg/*.svg", task_iconfont),
    gulp.watch("src/sprite_svg/svg/*.svg", task_sprite_svg),
    gulp.watch("src/img/**/*.+(jpg|jpeg|png|gif)", task_imagemin),
  ];
  watches.forEach((v) => {
    return v;
  });
};

exports.default = gulp.series(task_watch);
exports.task_imageWebp = task_imageWebp;
exports.task_perge = task_perge;
