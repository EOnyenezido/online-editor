var editorApp = angular.module("editorApp", ["ngRoute", "editorControllers"]);

editorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/editor', {
      templateUrl: 'editor.html',
      controller: 'editorCtrl'
    }).
    when('/preview', {
      templateUrl: 'preview.html',
      controller: 'previewCtrl'
    }).
    otherwise({
      redirectTo: '/editor'
    });
}]);