// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('youper', [
    'ionic',
    'youper.home',
    'youper.conversationTips',
    'youper.components'
  ])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html'
      })
      .state('conversationTips', {
        abstract: true,
        template: `
          <ion-pane>
            <ion-nav-bar class="bar-stable" no-border>
              <ion-nav-back-button class="button-icon icon ion-ios-arrow-back energized"></ion-nav-back-button>
            </ion-nav-bar>
            <ion-nav-view></ion-nav-view>
          <ion-pane>
        `
      })
      .state('conversationTips.index', {
        url: '/conversation-tips',
        templateUrl: 'views/conversation-tips/conversation-tips.html',
        controller: 'ConversationTipsCtrl'
      })
      .state('conversationTips.category', {
        url: '/conversation-tips/:categoryId',
        templateUrl: 'views/conversation-tips/category/category.html',
        controller: 'ConversationTipsCategoryCtrl'
      })
      .state('conversationTips.subCategory', {
        url: '/conversation-tips/:categoryId/:subCategoryId',
        templateUrl: 'views/conversation-tips/sub-category/sub-category.html',
        controller: 'ConversationTipsSubCategoryCtrl'
      });

    $urlRouterProvider.otherwise('/home');

    $ionicConfigProvider.backButton.text('').previousTitleText(false);
  });
