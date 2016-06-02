angular.module('starter.ktbLoginControllers', [])

.controller('KtbLoginCtrl', function($scope, $state) {
	$scope.rememberMeSelected ='ktbLoginRememberMeUnselected';
  $scope.onGoToKtbLoginSuccess = function(){
    $state.go("ktbLoginSuccess");
  }

  $scope.onRememberMe = function(){
  	if ($scope.rememberMeSelected == 'ktbLoginRememberMeUnselected') {
  		$scope.rememberMeSelected ='ktbLoginRememberMeSelected';
  	}
    else {
    	$scope.rememberMeSelected ='ktbLoginRememberMeUnselected';
    }
  }
});