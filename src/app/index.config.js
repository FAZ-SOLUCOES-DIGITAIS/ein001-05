(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
