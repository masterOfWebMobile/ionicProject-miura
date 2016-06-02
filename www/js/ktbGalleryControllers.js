angular.module('starter.ktbGalleryControllers', [])

.controller('KtbGalleryCtrl', function($scope, $state) {
  $scope.onGoToKtbGalleryLoading = function(){
    $state.go("ktbGalleryLoading");
  }
});