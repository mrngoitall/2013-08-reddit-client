angular.module('myApp.services', [])
.factory('SessionService', ['serverRoute', 
  function(serverRoute) {
    
}])
.factory('RedditService', ['$http', '$q', function($http, $q) {
    return {
        getArticles: function() {
          var d = $q.defer();
          $http({
            method: 'JSONP',
            url: 'http://www.reddit.com/hot.json?jsonp=JSON_CALLBACK'
          }).success(function(data, status, headers, config) {
            // data contains the response
            // status is the HTTP status
            // headers is the header getter function
            // config is the object that was used to create the HTTP request
            console.log('success with articles',data.data.children);
            d.resolve(data.data.children);
          }).error(function(data, status, headers, config) {
            console.log('error with articles',data);
            d.reject(data);
          });
          return d.promise;
        }
    }
}]);