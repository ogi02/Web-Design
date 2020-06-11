const 
	gulp = require('gulp')
	sass = require('gulp-sass') // Sass plugin for Gulp
	sourcemaps = require('gulp-sourcemaps') // Write inline source maps
	rename = require('gulp-rename') // gulp-rename is a gulp plugin to rename files easily.
	del = require('del') // Delete files and directories using globs
	browserSync = require('browser-sync').create() // Live CSS Reload & Browser Syncing
	postcss = require('gulp-postcss') // PostCSS gulp plugin to pipe CSS through several plugins, but parse CSS only once.
	autoprefixer = require('autoprefixer') // PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
	cssnano = require('cssnano') // cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.
	replace = require('gulp-replace') // A string replace plugin for gulp 3
	imagemin = require('gulp-imagemin') // Minify PNG, JPEG, GIF and SVG images with imagemin
	plumber = require('gulp-plumber') // Prevent pipe breaking caused by errors from gulp plugins
	babelify = require('babelify') // Babel browserify transform
	browserify = require('browserify') // require('modules') in the browser
	buffer = require('vinyl-buffer') // Convert streaming vinyl files to use buffers
	source = require('vinyl-source-stream') // Use conventional text streams at the start of your gulp or vinyl pipelines
	uglify = require('gulp-uglify') // Uglify is a simple tool to uglify javascript & css files

// Paths to source and build files
const paths = {
	base: {
		src: './src',
		dest: './build'
	},
	html: {
		src: './src/**/*.html',
		dest: './build'
	},
	styles: {
		src: './src/scss/**/*.scss',
		dest: './build/assets/css'
	},
	scripts: {
		src: './src/js/**/*.js',
		dest: './build/assets/js'
	},
	images: {
		src: './src/images/**/*',
		dest: './build/assets/images'
	},
	favicon: {
		src: './src/favicon.ico',
		dest: './build'
	}
};

const jsFiles = ['./src/js/timer.js', './src/js/times.js']

// Remove everything from ./build folder
const clean = () => del(['./build']);

// Cache busting to prevent browser caching issues
const curTime = new Date().getTime();
const cacheBust = () =>
	gulp
		.src(paths.html.src)
		.pipe(plumber())
		.pipe(replace(/cb=\d+/g, 'cb=' + curTime))
		.pipe(gulp.dest(paths.html.dest));

// Copies all html files
const html = () =>
	gulp
		.src(paths.html.src)
		.pipe(plumber())
		.pipe(gulp.dest(paths.html.dest));

// Convert scss to css, auto-prefix and rename into styles.min.css
const styles = () =>
	gulp
		.src(paths.styles.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());

// Minify all javascript files and concat them into a single app.min.js
const scripts = () => {
	return browserify({
		entries: jsFiles
	})
	.transform(babelify.configure({
		presets: ['@babel/preset-env']
	}))
	.bundle()
	.pipe(source('app.min.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(paths.scripts.dest));
}

// Copy and minify images
const images = () =>
	gulp
		.src(paths.images.src)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest(paths.images.dest));

// Copy the fonts
const fonts = () =>
	gulp
		.src(paths.fonts.src)
		.pipe(plumber())
		.pipe(gulp.dest(paths.fonts.dest))

// Copy the favicon
const favicon = () =>
	gulp
		.src(paths.favicon.src)
		.pipe(plumber())
		.pipe(gulp.dest(paths.favicon.dest));

// Watches all .scss, .js and .html changes and executes the corresponding task
function watchFiles() {
	browserSync.init({
		server: {
			baseDir: paths.base.dest
		},
		notify: false
	});

	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.favicon.src, favicon).on('change', browserSync.reload);
	gulp.watch(paths.scripts.src, scripts).on('change', browserSync.reload);
	gulp.watch(paths.images.src, images).on('change', browserSync.reload);
	gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}

const build = gulp.series(
	clean,
	gulp.parallel(styles, scripts, images, favicon),
	cacheBust
);

const watch = gulp.series(build, watchFiles);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.favicon = favicon;
exports.watch = watch;
exports.build = build;
exports.default = build;