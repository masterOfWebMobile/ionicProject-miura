angular.module('starter.ktbLoginSuccessControllers', [])

.controller('KtbLoginSuccessCtrl', function($scope, $state) {
  $scope.onGoToKtbProductBoxes = function(){
    //$state.go("ktbProductBoxes");
    $state.go("ktbHeader");
  }
});