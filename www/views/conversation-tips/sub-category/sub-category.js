(function (angular) {
  'use strict';

  angular
    .module('youper.conversationTips')
    .controller('ConversationTipsSubCategoryCtrl', ['$scope', '$window', '$ionicScrollDelegate',
      function ($scope, $window, $ionicScrollDelegate) {

        const screenWidth = $window.innerWidth;
        const cardSize = screenWidth * 0.8;

        $scope.cards = [{
            title: 'Would you like to dance?',
            styles: {
              size: cardSize,
              sizeUnit: 'px',
              backgroundColor: '#6aa84f'
            },
            likes: 0
          },
          {
            title: 'Hi! Are you enjoying the party?',
            styles: {
              size: cardSize,
              sizeUnit: 'px',
              backgroundColor: '#d5a6bd'
            },
            likes: 0
          },
          {
            title: 'Have you seen the moon?',
            styles: {
              size: cardSize,
              sizeUnit: 'px',
              backgroundColor: '#4a86e8'
            },
            likes: 0
          }
        ];

        $scope.titleStyles = {
          titleFontSize: 32,
          fontWeight: 'bold',
          titleColor: 'white',
          lineHeight: 44
        }

        $scope.like = {
          icon: {
            name: 'ion-thumbsup',
            styles: {
              iconColor: 'white',
              iconFontSize: 55
            }
          },
          styles: {
            size: 100,
            sizeUnit: 'px',
            backgroundColor: '#ffab40'
          },
          animation: 'circle-scale'
        }

        $scope.currentCardIndex = 0;

        $scope.setCurrentCard = () => {
          const xy = $ionicScrollDelegate.$getByHandle('cardsScroll').getScrollPosition();
          // 80% (circle percentage) + 10% (margin on one side) - 6.25% (visible edge of a neighbor circle) = 83.75
          const visibleCardIndex = Math.floor((xy.left) / (screenWidth * 0.8375));

          if ($scope.currentCardIndex !== visibleCardIndex) updateCardsStyles(visibleCardIndex);
        }

        let updateCardsStyles = newIndex => {
          const currentIndex = $scope.currentCardIndex;

          let currentCircle = Object.assign({}, $scope.cards[currentIndex]);
          delete currentCircle.styles.borderWidth;
          delete currentCircle.styles.borderColor;
          $scope.cards[currentIndex].styles = currentCircle.styles;


          let newCircle = Object.assign({}, $scope.cards[newIndex]);
          newCircle.styles.borderWidth = 10;
          newCircle.styles.borderColor = 'white';
          $scope.cards[newIndex].styles = newCircle.styles;

          $scope.currentCardIndex = newIndex;
        }

        $scope.toggleLike = () => {
          const index = $scope.currentCardIndex;
          $scope.cards[index].likes++;
        }
      }
    ]);
})(window.angular);
