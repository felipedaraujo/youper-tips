(function (angular) {
  'use strict';

  angular
    .module('youper.conversationTips')
    .controller('ConversationTipsCategoryCtrl', ['$scope', '$stateParams', '$http',
      function ($scope, $stateParams, $http) {

        let init = () => {
          const categoryTitle = $stateParams.categoryId.split('-').map(capitalize).join(' ');

          $http.get('data/sub-categories.json').then(response => {
            $scope.subCategories = response.data
            $scope.subCategories[0]['title'] = categoryTitle;
          });
        }

        let capitalize = el => el.charAt(0).toUpperCase() + el.slice(1);

        // initialize controller
        init();
      }
    ]);

})(window.angular);
