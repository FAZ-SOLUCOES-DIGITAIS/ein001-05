(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela12Controller', Modulo1_Tela12Controller);

  /** @ngInject */
  function Modulo1_Tela12Controller($log, $timeout, Game) {
    var vm = this;

    vm.game = Game;

    $timeout(function(){
      Game.finishScreen();
    },500)

  }
  Modulo1_Tela12Controller.$inject = ['$log', '$timeout', 'Game'];
})();
