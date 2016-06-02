angular.module('starter.ktbInsertCardControllers', [])

.controller('KtbInsertCardCtrl', function($scope, $state) {
  $scope.onGoToKtbInsertCardCtrl = function(){
    $state.go("ktbInsertCard");
  }
});