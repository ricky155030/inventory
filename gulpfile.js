'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const webpack = require('webpack-stream');

const path = {
  HTML: 'public/index.html',
  CSS: {
    FILES: [
      'node_modules/react-grid-layout/css/styles.css',
      'node_modules/react-resizable/css/styles.css'
    ],
    SRC: __dirname + '/app/css/',
    DEST: __dirname + '/public/css/'
  },
  JS: {
    SRC: __dirname + '/app/js/',
    DEST: __dirname + '/public/js/',
    OUTPUT: 'bundle.js',
    ENTRY: 'index.js'
  }
}

const webpack_config = {
  entry: {
    app: path.JS.SRC + path.JS.ENTRY
  },
  output: {
    path: path.JS.DEST,
    filename: path.JS.OUTPUT
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: { presets: ['es2015', 'react', 'babel-preset-stage-0'] }},
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style!css?modules', include: /flexboxgrid/ }
    ],
    plugins: [["babel-plugin-antd", {style: "css"}]]
  }
}

gulp.task('build-css', function() {
  gulp.src(path.CSS.FILES)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(path.CSS.DEST))
})

gulp.task('build-js', function() {
  var start = new Date().getTime();
  gulp.src(path.JS.SRC + path.JS.ENTRY)
    .pipe(webpack(webpack_config))
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(gulp.dest(path.JS.DEST))
    .on('end', function() {
      var elapsed_time = new Date().getTime() - start;
      gutil.log(gutil.colors.cyan('build'), 'cost', gutil.colors.magenta(elapsed_time, 'ms'));
    })
})

gulp.task('build-js-production', function() {
  var start = new Date().getTime();
  gulp.src(path.JS.SRC + path.JS.ENTRY)
    .pipe(webpack(webpack_config))
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(uglify())
    .pipe(gulp.dest(path.JS.DEST))
    .on('end', function() {
      var elapsed_time = new Date().getTime() - start;
      gutil.log(gutil.colors.cyan('build'), 'cost', gutil.colors.magenta(elapsed_time, 'ms'));
    })
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([path.JS.SRC + '**/*'], ['build-js'])
    .on('change', function(event) {
      gutil.log(gutil.colors.magenta(event.path), event.type)
    })
  gulp.watch([path.HTML], function(event) {
    livereload.changed(event.path);
  })
  gulp.watch([path.JS.DEST + path.JS.OUTPUT], function(event) {
    livereload.changed(event.path);
  })
  gulp.watch(path.CSS.FILES, function(event) {
    livereload.changed(event.path);
  })
})

gulp.task('default', ['watch']);
