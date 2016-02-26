(function(angular) {

  'use strict';

  function FormBasicController ($scope) {

    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();

  }

  angular
  .module('mortgageApp')
  .component('formBasic', {
    templateUrl: 'app/components/form-basic/form-basic.html',
    controller: FormBasicController
  });

})(window.angular);
