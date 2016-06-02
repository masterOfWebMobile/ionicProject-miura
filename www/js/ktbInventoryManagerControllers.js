angular.module('starter.ktbInventoryManagerControllers', [])

.controller('KtbInventoryManagerCtrl', function($scope, $state) {
  $scope.onGoToKtbCheckOutCtrl = function(){
    $state.go("ktbCheckOut");
  }
});
