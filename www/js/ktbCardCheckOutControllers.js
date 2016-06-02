angular.module('starter.ktbCardCheckOutControllers', [])

.controller('KtbCardCheckOutCtrl', function($scope, $state) {
  $scope.onGoToKtbInsertCard = function(){
    $state.go("ktbInsertCard");
  }
});
