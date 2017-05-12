(function (angular) {
  'use strict';

  angular
    .module('youper.conversationTips', [])
    .controller('ConversationTipsCtrl', ['$scope', '$http', function ($scope, $http) {
      $http.get('data/categories.json').then(response => $scope.categories = response.data);
    }]);

})(window.angular);
