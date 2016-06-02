angular.module('starter.ktbProductAddControllers', [])

.controller('KtbProductAddCtrl', function($scope, $state) {
  $scope.onGoToKtbInventoryManager = function(){
    $state.go("ktbInventoryManager");
  }
});
