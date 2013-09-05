angular.module('myApp.directives', [])
.directive('myArticle', function() {
  return { 
    //replace: true,
    //require: 'ngModel',
    //template: '{{ ngModel.title }}',
    template: '<a href="{{ ngModel.url }}">'+
    '<h4>{{ ngModel.title }}</h4>'+
    '<img ng-src="{{ ngModel.thumbnail }}" /></a><br />'+
    'Score: {{ ngModel.score }} <br />'+
    //'{{ ngModel.ups }} up, {{ ngModel.downs }} down <br />'+
    '<button ng-click="upvoteArticle(ngModel)">awesome!</button>' +
    '<button ng-click="unvoteArticle(ngModel)">meh</button>' +
    '<button ng-click="downvoteArticle(ngModel)">booo-urns!</button>' +
    '{{ ngModel.num_comments }} comments',
    //templateURL: 'article.html',
    link: function(scope, ele, attrs, ctrl) {
      scope.$watch(attrs.ngModel,
        function(v) {
          scope.ngModel = v.data;
        });
    }
  };
});