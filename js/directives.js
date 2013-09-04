angular.module('myApp.directives', [])
.directive('myArticle', function() {
  return { 
    //replace: true,
    require: 'ngModel',
    template: '{{ ngModel.title }}',
    //templateURL: 'article.html',
    link: function(scope, ele, attrs, ctrl) {
      scope.$watch(attrs.ngModel,
        function(v) {
          if (v) {
            console.log('v', v);
            scope.ngModel = v.data;
          }

          //scope.ngModel = v.data;
        });
    }
  };
});