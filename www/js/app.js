// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('youper', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "views/home.html"
      })
      .state("conversationTips.index", {
        url: "/conversation-tips",
        templateUrl: "views/tools/conversation-tips/index.html"
      })
      .state("conversationTips.category", {
        url: "/conversation-tips/:categoryId",
        templateUrl: "views/tools/conversation-tips/category.html"

      })
      .state("conversationTips.subCategory", {
        url: "/conversation-tips/:categoryId/:subCategoryId",
        templateUrl: "views/tools/conversation-tips/sub-category.html"
      });

    $urlRouterProvider.otherwise("/home");
  });
