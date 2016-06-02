angular.module('starter.setPassWordControllers', [])

.controller('SetPassWordCtrl', function($scope, $state) {
	$scope.setPassWordTyped = false;
  $scope.onGoToCongratlation = function(){
    $state.go("congratlation");
  }
  $scope.PassWordChanged = function(text){
  	//console.log(element);
    if (text == "") {
    	$scope.setPassWordTyped = false;
    }
    else {
    	$scope.setPassWordTyped = true;
    }
  }
});