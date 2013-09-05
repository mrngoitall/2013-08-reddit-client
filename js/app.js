angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives'])
.config(function ($routeProvider) {
  // Setup our routes here
  $routeProvider
  .when('/',
    {
      controller: 'MainController',
      templateUrl: '../templates/home.html'
    })
  .otherwise({ redirectTo: '/' });
});