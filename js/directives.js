angular.module('myApp.directives', [])
.directive('myArticle', function() {
  return { 
    //replace: true,
    require: 'ngModel',
    template: '<img ng-src="{{ article.data.thumbnail }}" />',
    //templateURL: 'article.html',
    link: function(scope, ele, attrs, ctrl) {
      scope.$watch(attrs.ngModel,
        function(v) {
          scope.ngModel = v.data;
        });
    }
  };
});