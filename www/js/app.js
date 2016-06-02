// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic-color-picker', 'starter.ktbHeaderControllers' ,'starter.sideMenuController' ,'starter.loginControllers', 'starter.congratlationControllers', 'starter.ktbLoginControllers' , 'starter.ktbLoginSuccessControllers','starter.ktbAddingProductControllers', 'starter.ktbGalleryControllers', 'starter.ktbGalleryLoadingControllers', 'starter.ktbProductAddControllers', 'starter.splashControllers', 'starter.ktbProductDetailControllers', 'starter.setPassWordControllers', 'starter.termsControllers', 'starter.ktbProductBoxesControllers', 'starter.ktbInventoryManagerControllers', 'starter.ktbCheckOutControllers', 'starter.ktbCardCheckOutControllers', 'starter.ktbInsertCardControllers'])

.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('splash', {
      url: '/splash',
      templateUrl: 'templates/splash.html',
      controller: 'SplashCtrl'
  })

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

  .state('terms', {
      url: '/terms',
      templateUrl: 'templates/terms.html',
      controller: 'TermsCtrl'
  })

  .state('setPassWord', {
      url: '/setPassWord',
      templateUrl: 'templates/setPassWord.html',
      controller: 'SetPassWordCtrl'
  })

  .state('congratlation', {
      url: '/congratlation',
      templateUrl: 'templates/congratlation.html',
      controller: 'CongratlationCtrl'
  })

  .state('ktbLogin', {
      url: '/ktbLogin',
      templateUrl: 'templates/ktbLogin.html',
      controller: 'KtbLoginCtrl'
  })

  .state('ktbLoginSuccess', {
      url: '/ktbLoginSuccess',
      templateUrl: 'templates/ktbLoginSuccess.html',
      controller: 'KtbLoginSuccessCtrl'
  })

  .state('ktbProductBoxes', {
      url: '/ktbProductBoxes',
      templateUrl: 'templates/ktbProductBoxes.html',
      controller: 'KtbProductBoxesCtrl'
  })

  .state('ktbAddingProduct', {
      url: '/ktbAddingProduct',
      templateUrl: 'templates/ktbAddingProduct.html',
      controller: 'KtbAddingProductCtrl'
  })

  .state('ktbGallery', {
      url: '/ktbGallery',
      templateUrl: 'templates/ktbGallery.html',
      controller: 'KtbGalleryCtrl'
  })

  .state('ktbGalleryLoading', {
      url: '/ktbGalleryLoading',
      templateUrl: 'templates/ktbGalleryLoading.html',
      controller: 'KtbGalleryLoadingCtrl'
  })

  .state('ktbProductDetail', {
      url: '/ktbProductDetail',
      templateUrl: 'templates/ktbProductDetail.html',
      controller: 'KtbProductDetailCtrl'
  })

  .state('ktbProductAdd', {
      url: '/ktbProductAdd',
      templateUrl: 'templates/ktbProductAdd.html',
      controller: 'KtbProductAddCtrl'
  })

  .state('ktbInventoryManager', {
      url: '/ktbInventoryManager',
      templateUrl: 'templates/ktbInventoryManager.html',
      controller: 'KtbInventoryManagerCtrl'
  })

  .state('ktbCheckOut', {
      url: '/ktbCheckOut',
      templateUrl: 'templates/ktbCheckOut.html',
      controller: 'KtbCheckOutCtrl'
  })

  .state('ktbCardCheckOut', {
      url: '/ktbCardCheckOut',
      templateUrl: 'templates/ktbCardCheckOut.html',
      controller: 'KtbCardCheckOutCtrl'
  })

  .state('ktbInsertCard', {
      url: '/ktbInsertCard',
      templateUrl: 'templates/ktbInsertCard.html',
      controller: 'KtbInsertCardCtrl'
  })

  .state('ktbHeader', {
      url: '/ktbHeader',
      templateUrl: 'templates/ktbHeader.html',
      controller: 'KtbHeaderCtrl'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/splash');
});
