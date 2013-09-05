angular.module('myApp.directives', [])
.directive('myArticle', function() {
  return { 
    templateUrl: '/templates/newsItem.html',
    link: function(scope, ele, attrs, ctrl) {
      scope.$watch(attrs.ngModel,
        function(v) {
          scope.ngModel = v.data;
        });
    }
  };
});