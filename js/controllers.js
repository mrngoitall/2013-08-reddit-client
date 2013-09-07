angular.module('myApp.controllers',['myApp.services'])
.controller('MainController', 
  ['$scope','$http','RedditService',
  function($scope,$http,RedditService) {
    // including mine for now, until we get logins to work.
    var modhash = 'e1az0eqvdcfaa9090449b8057f6b53e14ebb91b7554ee9d24a';

    var articles = [];
    $scope.articles = RedditService.getArticles();

    $http({
        method: 'JSONP',
        url: 'http://www.reddit.com/api/me.json?jsonp=JSON_CALLBACK'
      }).success(function(data, status, headers, config) {
        // data contains the response
        // status is the HTTP status
        // headers is the header getter function
        // config is the object that was used to create the HTTP request
        console.log('success with me.json',data);
       // $scope.me = data.data.children;
      }).error(function(data, status, headers, config) {
        console.log('error with me.json',data);
      });

    $scope.upvoteArticle = function(ngModel) {
      $http({
        method: 'POST',
        url: '/api/vote',
        data: {
          dir: 1,
          id: ngModel.id,
          uh: modhash
        }
      }).success(function(data, status, headers, config) {
        console.log('success',data.data.children);
      }).error(function(data, status, headers, config) {
        console.log('error',data);
        ngModel.score++;
      });
    };

    $scope.downvoteArticle = function(ngModel) {
      $http({
        method: 'POST',
        url: 'http://www.reddit.com/api/vote',
        data: {
          dir: -1,
          id: ngModel.id,
          uh: modhash
        }
      }).success(function(data, status, headers, config) {
        console.log('success',data.data.children);
      }).error(function(data, status, headers, config) {
        console.log('error',data);
        ngModel.score--;
      });
    };

    $scope.unvoteArticle = function(ngModel) {
      $http({
        method: 'POST',
        url: 'http://www.reddit.com/api/vote',
        data: {
          dir: 0,
          id: ngModel.id,
          uh: modhash
        }
      }).success(function(data, status, headers, config) {
        console.log('success',data.data.children);
      }).error(function(data, status, headers, config) {
        console.log('error',data);
      });
    };

    $scope.isNotNSFW = function(ngModel) {
      return ngModel.thumbnail !== "nsfw";
    };

}])
.controller('LoginController',
  ['$scope','$http', function($scope, $http) {

    $scope.login = function(ngModel) {
      console.log('running login process');
      console.log(ngModel);

      $http({
        method: 'POST',
        url: '/api/vote',
        data: {
          id: ngModel.username,
          uh: modhash
        }
      }).success(function(data, status, headers, config) {
        console.log('success',data.data.children);
      }).error(function(data, status, headers, config) {
        console.log('error',data);
      });
    };

}]);
