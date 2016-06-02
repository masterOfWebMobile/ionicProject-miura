angular.module('starter.loginControllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.onGoToTerms = function(){
    $state.go("terms");
  }
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});