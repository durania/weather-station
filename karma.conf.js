// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        frameworks: ['jasmine'],


        reporters: ['spec', 'junit'],

        junitReporter: {
            outputFile: 'reports/spec.xml',
            suite: 'Unit Tests'
        },
        // list of files / patterns to load in the browser
        files: [

            'client/bower_components/jquery/dist/jquery.js',
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'client/bower_components/angular-ui-router/release/angular-ui-router.js',
            'client/app/app.js',
            'test/mocks/*.js',
            'client/app/**/*.js',
            'client/components/**/*.js',
            'client/app/**/*.html',
            'client/components/**/*.spec.js'

        ],

        preprocessors: {
            '**/*.html': 'html2js'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'client/'
        },

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        autoWatch: true,

        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};