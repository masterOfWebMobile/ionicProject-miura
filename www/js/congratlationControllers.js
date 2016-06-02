angular.module('starter.congratlationControllers', [])

.controller('CongratlationCtrl', function($scope, $state) {
  $scope.onGoToKtbLogin = function(){
    $state.go("ktbLogin");
  }
});