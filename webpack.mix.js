const { css } = require('jquery');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .css( 'public/css/animate/animate.css')
    .css( 'public/css/font-awesome/css/all.min.css')
    .css( 'public/css/custom/style.css')
    .css( 'public/css/custom/responsive.css')
    .css( 'https://fonts.googleapis.com/css?family=Hind:400,500,,600,700|Passion+One:400,700&amp;display=swap')
    .css( 'public/css/app.css');
