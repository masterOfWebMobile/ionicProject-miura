angular.module('starter.ktbProductDetailControllers', [])

.controller('KtbProductDetailCtrl', function($scope, $state) {
	$scope.quantityValue = 1;
  $scope.onGoToKtbProductAdd = function(){
    $state.go("ktbHeader");
  }

  $scope.quantityValuePlusButtonClicked = function(){
  	console.log($scope.quantityValue);
    $scope.quantityValue = $scope.quantityValue + 1;
  }

  $scope.quantityValueMinusButtonClicked = function(){
  	console.log($scope.quantityValue);
  	if ($scope.quantityValue > 0) {
  		$scope.quantityValue = $scope.quantityValue - 1;
  	}
  }
});