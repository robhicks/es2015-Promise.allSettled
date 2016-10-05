const babel = require("rollup-plugin-babel");
const commonjs = require('rollup-plugin-commonjs');
const del = require('del');
const gulp = require("gulp");
const rollup = require('rollup').rollup;
const uglify = require('rollup-plugin-uglify');

const buildTasks = [
  "build:es2015",
  "build:global",
  "build:nodeEs5"
];

const babelConf = {
  babelrc: false,
  presets: ['es2015-rollup']
};

let es2015Cache, globalCache, nodeEs5Cache;

gulp.task('clean', function() {
  return del(["./dist"]);
});

gulp.task('build:es2015', () => rollup({
  cache: es2015Cache,
  entry: './src/es2015.js',
  }).then((bundle) => {
    cache = bundle;
    return bundle.write({
      format: 'es',
      dest: './dist/es2015-Promise.allSettled.js'
    })
  }));

gulp.task('build:global', () => rollup({
  cache: es2015Cache,
  entry: './src/es2015.js',
  plugins: [
    babel(babelConf)
  ]
  }).then((bundle) => {
    cache = bundle;
    return bundle.write({
      format: 'iife',
      dest: './dist/es2015.Promise.allSettled.ponyfill.js'
    })
  }));


gulp.task('build:ngIdxUtils', () => rollup({
    cache: ngIdxUtilsCache,
    entry: './src/ng/ng-idx-utils.js',
    external: [],
    plugins: [
      babel(babelConf),
      uglify()
    ]
  }).then((bundle) => {
    cache = bundle;
    return bundle.write({
      format: 'iife',
      dest: './assets/js/ng-idx-utils.min.js',
      sourceMap: true
    })
  }));

gulp.task('build:nodeEs5', () => rollup({
    cache: nodeEs5Cache,
    entry: './src/es2015.js',
    plugins: [
      commonjs(),
      babel(babelConf)
    ]
  }).then((bundle) => {
    cache = bundle;
    return bundle.write({
      format: 'cjs',
      dest: './index.js'
    })
  }));

gulp.task("watch", function() {
  return gulp.watch(['./src/**/*.*'], gulp.parallel(buildTasks));
});

gulp.task("build", gulp.series('clean', gulp.parallel(buildTasks)));

gulp.task("default", gulp.series('clean', gulp.parallel(buildTasks), 'watch'));
