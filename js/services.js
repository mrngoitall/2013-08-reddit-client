angular.module('myApp.services', [])
.factory('RedditService', ['$http', function($http) {
    return {
        getArticles: function($scope) {
          $http({
            method: 'JSONP',
            url: 'http://www.reddit.com/hot.json?jsonp=JSON_CALLBACK'
          }).success(function(data, status, headers, config) {
            // data contains the response
            // status is the HTTP status
            // headers is the header getter function
            // config is the object that was used to create the HTTP request
            console.log('success with articles',data.data.children);
            $scope.articles = data.data.children;
          }).error(function(data, status, headers, config) {
            console.log('error with articles',data);
          });
        }
    }
}]);