module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'assets/angular/angular.min.js',
      'assets/angular/angular-route.min.js',
      'assets/jquery/jquery-2.1.1.min.js',
      'assets/ace/*.js',
      'js/app.js',
      'editor.html',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};