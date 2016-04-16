angular
  .module('cHome')
  .controller('ClientController', ClientController);

  ClientController.$inject = ['$scope','$rootScope','$route','$location','$uibModal','$log','ClientService'];

  function ClientController($scope,$rootScope,$route,$location,$uibModal,$log,ClientService, $modalInstance) {

    var vm = this;

    vm.animationsEnabled = true;

    // vm.clientData;

    // $scope.$watch(
    //   'vm.clientData',
    //   function handleChange( newVal, oldVal) {
    //     console.log('vm.clientData', newVal);
    //   }
    // );
    //
    // $scope.$watch(
    //   'CliCtrl.clientData',
    //   function handleChange( newVal, oldVal) {
    //     console.log('CliCtrl.clientData', newVal);
    //   }
    // );
    //
    // $scope.$watch(
    //   'ClientController.clientData',
    //   function handleChange( newVal, oldVal) {
    //     console.log('ClientController.clientData', newVal);
    //   }
    // );


    // THIS OPENS JOB POST FORM MODAL
      // vm.openMatchModal = function (size) {
      //
      //   var modalInstance = $uibModal.open({
      //     animation: vm.animationsEnabled,
      //     templateUrl: './goOnline/tmpls/goOnline.html',
      //     controller: 'JobInstanceCtrl as JobCtrl',
      //     size: size,
      //     resolve: {
      //       items: function () {
      //         return vm.items;
      //       }
      //     }
      //   });
      // };

    //logout button
    vm.logout = function(){
      console.log('data inside logout function',window.localStorage);
      ClientService.logoutNow().then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
    }

    //to load the page after changes
    vm.loadPage = function(){
      //getting data from the login and register
      ClientService.getClient(window.JSON.parse(window.localStorage.getItem('theclient')).id)
      .then(function(data){
        vm.clientData =  data.data;
        console.log('vm clientData from chome controller',vm.clientData);
      })
    }
    vm.loadPage();


    //PHOTO UPLOAD
    vm.empty = true;
    vm.uploadCFile = function(){
        var file = vm.myFile;
        console.log('photo file is ',file );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        ClientService.uploadFileToCUrl(file, uploadUrl);
        vm.editInfo = !vm.editInfo;
        console.log('page should have reloaded',vm.clientData);
        ClientService.getClient(window.JSON.parse(window.localStorage.getItem('theclient')).id)
        .then(function(data){
          vm.clientData =  data.data;
          console.log('vm clientData inside upload file',vm.clientData);
        })
    };

    //PHOTO EDIT ROUTE
    // vm.changeCFile = function(){
    //   var file = vm.myFile;
    //   console.log('photo file is ',file );
    //   console.dir(file);
    //   var uploadUrl = "/fileUpload";
    //   ClientService.editFile(file, uploadUrl);
    //   vm.editInfo = !vm.editInfo;
    //   console.log('page should have reloaded');
    //   vm.loadPage();
    // }

    //edit profile content
    vm.editInfo = false;
    vm.editBtn = function(){
      vm.editInfo = !vm.editInfo;
    }

    // vm.master = {};
    vm.saveEdit = function(user){
      // vm.master = angular.copy(user);
      console.log('should be new profile info obj',user);
      ClientService.editClient(user).then(function(data){
        vm.edittedData =  data.data;
        console.log('client after edit',vm.edittedData);
        vm.editInfo = !vm.editInfo;
        console.log('page should have reloaded');
        vm.loadPage();
      })
    }

    //delete client account
    vm.deleteC = function(){
      console.log('data inside delete function',window.localStorage);
      ClientService.deleteClient(window.JSON.parse(window.localStorage.getItem('theclient')).id).then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
    }

    //the rating stars
    vm.rate = 0;
    vm.max = 5;
    vm.isReadonly = false;

    vm.hoveringOver = function(value) {
      vm.overStar = value;
      vm.percent = 100 * (value / vm.max);
    };

    vm.ratingStates = [
      {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
      {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
      {stateOn: 'glyphicon-heart'},
      {stateOff: 'glyphicon-off'}
    ];

    //temporary accordion history data injecting the page

    vm.historyData = ClientService.historyData;



       $scope.animationsEnabled = true;
    $scope.openMatchModal = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: './matches/tmpls/match-modal.html',
        controller: 'MatchModalController',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }

  }
