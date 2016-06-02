angular.module('starter.ktbProductBoxesControllers', [])

.controller('KtbProductBoxesCtrl', function($scope, $state) {
  $scope.onGoToKtbAddingProduct = function(){
    $state.go("ktbAddingProduct");
  }
});
