module.exports = function (config) {
    config.set({
        autoWatch: false,
        frameworks: ['jasmine'],
        //                basePath: '../',
        reporters: ['mocha'],
        files: [
                    '../bower_components/angular/angular.js',
                    '../bower_components/angular-mocks/angular-mocks.js',
                    '../src/**/*.js',
                    '../test/**/*.js'
                ],
        browsers: [
                    'PhantomJS'
                ],
        plugins: [
                    'karma-phantomjs-launcher',
                    'karma-jasmine',
                    'karma-mocha-reporter'
                ],
        colors: true,
        singleRun: true
    });
};