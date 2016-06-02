angular.module('starter.ktbAddingProductControllers', [])

.controller('KtbAddingProductCtrl', function($scope, $state) {
  $scope.onGoToKtbGallery = function(){
    $state.go("ktbGallery");
  }
});