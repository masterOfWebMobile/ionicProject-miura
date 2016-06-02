angular.module('starter.ktbCheckOutControllers', [])

.controller('KtbCheckOutCtrl', function($scope, $state) {
  $scope.onGoToKtbCardCheckOutCtrl = function(){
    $state.go("ktbCardCheckOut");
  }
});
