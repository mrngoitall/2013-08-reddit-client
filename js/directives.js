angular.module('myApp.directives', [])
.directive('myArticle', function() {
  return { 
    //replace: true,
    require: 'ngModel',
    //template: '{{ ngModel.title }}',
    template: '<a href="{{ ngModel.url }}">'+
    '<h4>{{ ngModel.title }}</h4>'+
    '<img ng-src="{{ ngModel.thumbnail }}" /></a><br />'+
    '{{ ngModel.score }} <br />'+
    //'{{ ngModel.ups }} up, {{ ngModel.downs }} down <br />'+
    '<button ng-click="upvoteArticle({{ ngModel.id}})">awesome!</button>' +
    '<button ng-click="unvoteArticle()">meh</button>' +
    '<button ng-click="downvoteArticle()">booo-urns!</button>' +
    '{{ ngModel.num_comments }} comments',
    //templateURL: 'article.html',
    link: function(scope, ele, attrs, ctrl) {
      scope.$watch(attrs.ngModel,
        function(v) {
          if (v) {
            scope.ngModel = v.data;
          }
        });
    }
  };
});