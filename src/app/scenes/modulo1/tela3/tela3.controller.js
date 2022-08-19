(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela3Controller', Modulo1_Tela3Controller);

  /** @ngInject */
  function Modulo1_Tela3Controller($log, $timeout, Game) {
    var vm = this;

    vm.game = Game;

    $timeout(function(){
      Game.finishScreen();
    },500)


  }
  Modulo1_Tela3Controller.$inject = ['$log', '$timeout', 'Game'];
})();
