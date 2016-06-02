angular.module('starter.ktbGalleryLoadingControllers', [])

.controller('KtbGalleryLoadingCtrl', function($scope, $state) {
  $scope.onGoToKtbProductDetail = function(){
    $state.go("ktbProductDetail");
  }
});