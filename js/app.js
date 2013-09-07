angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives', 'myApp.services', 'myApp.filters'])
.constant('serverRoute', 'http://localhost:3000')
.config(function ($routeProvider) {
  // Setup our routes here
  $routeProvider
  .when('/',
    {
      controller: 'MainController',
      templateUrl: '../templates/home.html',
      resolve: {
        user: ['UserService', function(UserService) {
          return UserService.getCurrentUser();
        }]
      }
    })
  .when('/login',
    {
      controller: 'LoginController',
      templateUrl: '../templates/login.html'
    })
  .when('/settings',
    { 
      controller: 'SettingsController',
      templateUrl: '../templates/settings.html'
    })
  .otherwise({ redirectTo: '/' });
})
.config(function($httpProvider) {
  var interceptor = ['$rootScope', '$location', '$q',
  function($scope, $location, $q) {
    var success = function(resp) {return resp; };
    var err = function(resp, status) {
      if (resp.status !== 200) {
        var d = $q.defer();
        $scope.$broadcast('event:unauthorized');
        return d.promise;
      }
      return $q.reject(resp);
    };
    return function(promise) {
      return promise.then(success, err);
    };
  }];
  $httpProvider.responseInterceptors.push(interceptor);
})
.run(function($rootScope, $http, $location) {
  $rootScope.$on('event:unauthorized', function() {
    $location.path('/login');
  });
});