angular.module('myApp.directives', [])
.directive('myArticle', function() {
  return { 
    //replace: true,
    //require: 'ngModel',
    //template: '{{ ngModel.title }}',
    templateUrl: '/templates/newsItem.html',
    link: function(scope, ele, attrs, ctrl) {
      scope.$watch(attrs.ngModel,
        function(v) {
          scope.ngModel = v.data;
        });
    }
  };
});