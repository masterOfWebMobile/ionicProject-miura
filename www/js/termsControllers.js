angular.module('starter.termsControllers', [])

.controller('TermsCtrl', function($scope, $state) {
  	$scope.acceptSelected = 'termsUnselected';	
  $scope.onGoToSetPassWord = function(){
    $state.go("setPassWord");
  }

  $scope.onAcceptSelected = function(){
  	if ($scope.acceptSelected == 'termsSelected') {
  		$scope.acceptSelected = 'termsUnselected';
  	}
    else {
  		$scope.acceptSelected = 'termsSelected';
  	}  
  }
});

