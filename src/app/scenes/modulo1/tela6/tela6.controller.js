(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela6Controller', Modulo1_Tela6Controller);

  /** @ngInject */
  function Modulo1_Tela6Controller($log, $timeout, Game, $rootScope) {
    var vm = this;

    vm.game = Game;

    $timeout(function(){
      Game.finishScreen();
    },500)



  }
  Modulo1_Tela6Controller.$inject = ['$log', '$timeout', 'Game', '$rootScope'];
})();
