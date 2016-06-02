angular.module('starter.sideMenuController', [])

.controller('sideMenuController', function($scope, $state) {
  $scope.data = {
    items : []
  };
  
  for(var i = 0; i < 25; i++) {
    $scope.data.items.push({
      id : i,
      label : "Item " + i
    })
  }
});

