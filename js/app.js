angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives', 'myApp.services', 'myApp.filters'])
.config(function ($routeProvider) {
  // Setup our routes here
  $routeProvider
  .when('/',
    {
      controller: 'MainController',
      templateUrl: '../templates/home.html'
    })
  .when('/login',
    {
      controller: 'MainController',
      templateUrl: '../templates/login.html'
    })
  .otherwise({ redirectTo: '/' });
});