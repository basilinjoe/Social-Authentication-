(function() {
    'use strict';

    angular
        .module('feeder')
        .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'toastr'];

    /* @ngInject */
    function homeCtrl($scope, toastr) {
      $scope.pop = function(){
      toastr.success('Hello world!', 'Toastr fun!');
  };
    }
})();
