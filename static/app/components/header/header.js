(function(angular) {

  'use strict';

  function HeaderController() {

  }

  angular
    .module('mortgageApp')
    .component('header', {
      bindings: {
        desc: '=',
        title: '='
      },
      controller: HeaderController,
      controllerAs: 'header',
      templateUrl: 'app/components/header/header.html'
    });

})(window.angular);
