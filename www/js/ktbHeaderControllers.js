angular.module('starter.ktbHeaderControllers', [])

.controller('KtbHeaderCtrl', function($scope, $state, $ionicModal) {
	$scope.currentSubView = "templates/ktbProductBoxes.html";
	$scope.productCatelogButtonSelected = "selectedButton";
	$scope.inventoryManagerButtonSelected = "unselectedButton";
	$scope.dashboardButtonSelected = "unselectedButton";
	$scope.transactionManagerButtonSelected = "unselectedButton";
  $scope.tabName = "Products";
  $scope.iKTBPayButtonSelected = "selectedPaymentButton";
  $scope.miuraTerminalButtonSelected = "unselectedPaymentButton";
  $scope.byCashButtonSelected = "unselectedPaymentButton";
  $scope.TypeOfPaymentModalChipAndPinButtonSelected = "TypeOfPaymentModalChipAndPinButtonUnselected";
  $scope.TypeOfPaymentModalCardSwipeButtonSelected = "TypeOfPaymentModalCardSwipeButtonUnselected";
  $scope.quantityValue = 2;


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

  $scope.onGoToKtbProductDetail = function(){
    $state.go("ktbProductDetail");
  }

  $scope.onGoToKtbAddingProduct = function(){
    $state.go("ktbAddingProduct");
  }

  $scope.productCatelogButtonClicked = function(){
  	$scope.currentSubView = "templates/ktbProductBoxes.html";
  	$scope.productCatelogButtonSelected = "selectedButton";
	  $scope.inventoryManagerButtonSelected = "unselectedButton";
	  $scope.dashboardButtonSelected = "unselectedButton";
	  $scope.transactionManagerButtonSelected = "unselectedButton";
    $scope.tabName = "Products";
  }

  $scope.inventoryManagerButtonClicked = function(){
  	$scope.currentSubView = "templates/ktbInventoryManager.html";
  	$scope.productCatelogButtonSelected = "unselectedButton";
	  $scope.inventoryManagerButtonSelected = "selectedButton";
	  $scope.dashboardButtonSelected = "unselectedButton";
	  $scope.transactionManagerButtonSelected = "unselectedButton";
    $scope.tabName = "Inventory Manager";
  }

  $scope.dashboardButtonClicked = function(){
  	$scope.currentSubView = "templates/ktbCheckOut.html";
  	$scope.productCatelogButtonSelected = "unselectedButton";
	  $scope.inventoryManagerButtonSelected = "unselectedButton";
	  $scope.dashboardButtonSelected = "selectedButton";
	  $scope.transactionManagerButtonSelected = "unselectedButton";
    $scope.tabName = "CheckOut";
  }

  $scope.transactionManagerButtonClicked = function(){
  	$scope.currentSubView = "templates/ktbCheckOut.html";
  	$scope.productCatelogButtonSelected = "unselectedButton";
	  $scope.inventoryManagerButtonSelected = "unselectedButton";
	  $scope.dashboardButtonSelected = "unselectedButton";
	  $scope.transactionManagerButtonSelected = "selectedButton";
  }
  $scope.logout = function(){
    $state.go("login");
  }

  $scope.iKTBPayButtonClick = function(){
    console.log("clicked");
    $scope.iKTBPayButtonSelected = "selectedPaymentButton";
    $scope.miuraTerminalButtonSelected = "unselectedPaymentButton";
    $scope.byCashButtonSelected = "unselectedPaymentButton";
  }

  $scope.miuraTerminalButtonClick = function(){
    console.log("clicked");
    $scope.iKTBPayButtonSelected = "unselectedPaymentButton";
    $scope.miuraTerminalButtonSelected = "selectedPaymentButton";
    $scope.byCashButtonSelected = "unselectedPaymentButton";
  }

  $scope.byCashButtonClick = function(){
    console.log("clicked");
    $scope.iKTBPayButtonSelected = "unselectedPaymentButton";
    $scope.miuraTerminalButtonSelected = "unselectedPaymentButton";
    $scope.byCashButtonSelected = "selectedPaymentButton";
  }

  $scope.chargeButtonClick = function() {
    if($scope.iKTBPayButtonSelected == "selectedPaymentButton") {
      $scope.MerchantAndTransactionCodeModal.show();
    }
    if($scope.miuraTerminalButtonSelected == "selectedPaymentButton") {
      $scope.TypeOfPaymentModal.show();
    }
    if($scope.byCashButtonSelected == "selectedPaymentButton") {
      $scope.EnterCashAmountReceivedModal.show();
    }
  }

  $scope.TypeOfPaymentModalChipAndPinButtonClick = function() {
    if($scope.TypeOfPaymentModalChipAndPinButtonSelected == "TypeOfPaymentModalChipAndPinButtonSelected") {
      $scope.TypeOfPaymentModalChipAndPinButtonSelected = "TypeOfPaymentModalChipAndPinButtonUnselected";
      $scope.TypeOfPaymentModal.hide();
    }
    else if($scope.TypeOfPaymentModalChipAndPinButtonSelected == "TypeOfPaymentModalChipAndPinButtonUnselected") {
      $scope.TypeOfPaymentModalChipAndPinButtonSelected = "TypeOfPaymentModalChipAndPinButtonSelected";
      $scope.TypeOfPaymentModal.hide();
      $scope.currentSubView = "templates/ktbInsertCard.html";
    }
  }

  $scope.TypeOfPaymentModalCardSwipeButtonClick = function() {
    if($scope.TypeOfPaymentModalCardSwipeButtonSelected == "TypeOfPaymentModalCardSwipeButtonSelected") {
      $scope.TypeOfPaymentModalCardSwipeButtonSelected = "TypeOfPaymentModalCardSwipeButtonUnselected";
      $scope.TypeOfPaymentModal.hide();
    }
    else if($scope.TypeOfPaymentModalCardSwipeButtonSelected == "TypeOfPaymentModalCardSwipeButtonUnselected") {
      $scope.TypeOfPaymentModalCardSwipeButtonSelected = "TypeOfPaymentModalCardSwipeButtonSelected";
      $scope.TypeOfPaymentModal.hide();
      $scope.currentSubView = "templates/ktbCardCheckOut.html";
    }
  }

  $scope.InventoryManagerProductSubMenuModalShow = function() {
    $scope.InventoryManagerProductSubMenuModal.show();
    $scope.InventoryManagerProductSubMenuModalViewStyle = {'left' : '360px', 'top': '200px'};
  }

  $ionicModal.fromTemplateUrl('templates/MerchantAndTransactionCodeModal.html', {
    scope: $scope
  }).then(function(MerchantAndTransactionCodeModal) {
    $scope.MerchantAndTransactionCodeModal = MerchantAndTransactionCodeModal;
  });

  $ionicModal.fromTemplateUrl('templates/ProcessingValidatingPaymentModal.html', {
    scope: $scope
  }).then(function(ProcessingValidatingPaymentModal) {
    $scope.ProcessingValidatingPaymentModal = ProcessingValidatingPaymentModal;
  });

  $ionicModal.fromTemplateUrl('templates/ProcessingPaymentProcessedModal.html', {
    scope: $scope
  }).then(function(ProcessingPaymentProcessedModal) {
    $scope.ProcessingPaymentProcessedModal = ProcessingPaymentProcessedModal;
  });

  $ionicModal.fromTemplateUrl('templates/PaymentSuccessfulModal.html', {
    scope: $scope
  }).then(function(PaymentSuccessfulModal) {
    $scope.PaymentSuccessfulModal = PaymentSuccessfulModal;
  });

  $ionicModal.fromTemplateUrl('templates/PaymentReceiptModal.html', {
    scope: $scope
  }).then(function(PaymentReceiptModal) {
    $scope.PaymentReceiptModal = PaymentReceiptModal;
  });

  $ionicModal.fromTemplateUrl('templates/EmailSentModal.html', {
    scope: $scope
  }).then(function(EmailSentModal) {
    $scope.EmailSentModal = EmailSentModal;
  });

  $ionicModal.fromTemplateUrl('templates/PaymentUnsuccessfulModal.html', {
    scope: $scope
  }).then(function(PaymentUnsuccessfulModal) {
    $scope.PaymentUnsuccessfulModal = PaymentUnsuccessfulModal;
  });

  $ionicModal.fromTemplateUrl('templates/TypeOfPaymentModal.html', {
    scope: $scope
  }).then(function(TypeOfPaymentModal) {
    $scope.TypeOfPaymentModal = TypeOfPaymentModal;
  });

  $ionicModal.fromTemplateUrl('templates/PinCodeErrorModal.html', {
    scope: $scope
  }).then(function(PinCodeErrorModal) {
    $scope.PinCodeErrorModal = PinCodeErrorModal;
  });

  $ionicModal.fromTemplateUrl('templates/SwipeCardErrorModal.html', {
    scope: $scope
  }).then(function(SwipeCardErrorModal) {
    $scope.SwipeCardErrorModal = SwipeCardErrorModal;
  });

  $ionicModal.fromTemplateUrl('templates/SignatureModal.html', {
    scope: $scope
  }).then(function(SignatureModal) {
    $scope.SignatureModal = SignatureModal;
  });

  $ionicModal.fromTemplateUrl('templates/EnterCashAmountReceivedModal.html', {
    scope: $scope
  }).then(function(EnterCashAmountReceivedModal) {
    $scope.EnterCashAmountReceivedModal = EnterCashAmountReceivedModal;
  });

  $ionicModal.fromTemplateUrl('templates/ChangeToCustomerModal.html', {
    scope: $scope
  }).then(function(ChangeToCustomerModal) {
    $scope.ChangeToCustomerModal = ChangeToCustomerModal;
  });

  $ionicModal.fromTemplateUrl('templates/TransactionDetailModal.html', {
    scope: $scope
  }).then(function(TransactionDetailModal) {
    $scope.TransactionDetailModal = TransactionDetailModal;
  });

  $ionicModal.fromTemplateUrl('templates/EditProductModal.html', {
    scope: $scope
  }).then(function(EditProductModal) {
    $scope.EditProductModal = EditProductModal;
  });

  $ionicModal.fromTemplateUrl('templates/MarkAsDamagedModal.html', {
    scope: $scope
  }).then(function(MarkAsDamagedModal) {
    $scope.MarkAsDamagedModal = MarkAsDamagedModal;
  });

  $ionicModal.fromTemplateUrl('templates/DeleteProductModal.html', {
    scope: $scope
  }).then(function(DeleteProductModal) {
    $scope.DeleteProductModal = DeleteProductModal;
  });

  $ionicModal.fromTemplateUrl('templates/InventoryManagerProductSubMenuModal.html', {
    scope: $scope
  }).then(function(InventoryManagerProductSubMenuModal) {
    $scope.InventoryManagerProductSubMenuModal = InventoryManagerProductSubMenuModal;
  });

});