angular.module('myApp.controllers', [])
.controller('MainController', 
  ['$scope','$http',
  function($scope,$http) {
    // including mine for now, until we get logins to work.
    var modhash = 

    $http({
        method: 'JSONP',
        url: 'http://www.reddit.com/hot.json?jsonp=JSON_CALLBACK'
      }).success(function(data, status, headers, config) {
        // data contains the response
        // status is the HTTP status
        // headers is the header getter function
        // config is the object that was used to create the HTTP request
        console.log('success',data.data.children);
        $scope.articles = data.data.children;
      }).error(function(data, status, headers, config) {
        console.log('error',data);
      });

    $scope.upvoteArticle = function(articleId) {
      $http({
        method: 'POST',
        url: 'http://www.reddit.com/api/vote',
        data: {
          dir: 1,
          id: articleId,
          uh: 
        }
      }).success(function(data, status, headers, config) {
        // data contains the response
        // status is the HTTP status
        // headers is the header getter function
        // config is the object that was used to create the HTTP request
        console.log('success',data.data.children);
        $scope.articles = data.data.children;
      }).error(function(data, status, headers, config) {
        console.log('error',data);
      });
    };

}]);