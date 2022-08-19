(function() {
  'use strict';

  angular
    .module('einstein-cursos', ['einstein-cursos.external']);

   angular.module('einstein-cursos.external',
    [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        //'ngAudio',
        //'ngRoute',
        'ui.router',
        'ui.bootstrap',
        'toastr',
        //'sn.skrollr',
        'angularModalService',
        'LZW',
        'ngScrollbars',
        'swipe'
    ])

})();
