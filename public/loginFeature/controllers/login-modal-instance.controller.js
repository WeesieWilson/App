angular
.module('login')
.controller('ModalInstanceController', function ($rootScope,$scope, $uibModalInstance, LoginService, $location) {

// SWITCHES THE SECTIONS OF THE MODAL


  $scope.showModalSection = 'login';

  $scope.showRegisterSection = function () {
      $scope.showModalSection = 'register';
  };

  $scope.showLoginSection = function () {
    $scope.showModalSection = 'login';
  };


// SIGNS IN CLIENT AND PROVIDER FROM REGISTER BUTTON



  $scope.registerClientPath = function (client) {
    LoginService.postClient(client)
    .success(function(data) {
      window.localStorage.setItem('theclient', window.JSON.stringify(data));
      $uibModalInstance.dismiss();
      $location.path('/clienthome/' + data.id);
    })
    .error(function(err) {
      $scope.registerError = err;
    })
  };


  $scope.registerSpPath = function (provider) {
    LoginService.postSp(provider)
    .success(function(data) {
      window.localStorage.setItem('theprovider', window.JSON.stringify(data));
      $uibModalInstance.dismiss();
      $location.path('/sphome/' + data.id);
    })
    .error(function(err) {
      $scope.registerError = err;

    })
  };



// SIGNS IN CLIENT AND PROVIDER FROM LOGIN BUTTON




  $scope.loginSpPath = function (provider) {
    LoginService.providerLogin(provider)
    .success(function(data) {
      window.localStorage.setItem('theprovider', window.JSON.stringify(data));
      $uibModalInstance.dismiss();
      $location.path('/sphome/' + data.id);
    })
    .error(function(err) {
      $scope.errorMsg = err
    })
  };

  $scope.loginClientPath = function (client) {
    LoginService.clientLogin(client)
    .success(function(data) {
      window.localStorage.setItem('theclient', window.JSON.stringify(data));
      $uibModalInstance.dismiss();
      $location.path('/clienthome/' + data.id);
    })
    .error(function(err) {
      $scope.errorMsg = err
    })
  };


});
