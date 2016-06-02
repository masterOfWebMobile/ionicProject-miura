angular.module('starter.splashControllers', [])

.controller('SplashCtrl', function($scope, $state) {
  $scope.onGoToLogin = function(){
    $state.go("login");
  }
});
