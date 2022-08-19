(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela1Controller', Modulo1_Tela1Controller);

  /** @ngInject */
  function Modulo1_Tela1Controller($log, $timeout, Game) {
    var vm = this;

    vm.game = Game;

    vm.next = function(){
      Game.finishScreen();
      Game.next();
    }



    $timeout(function(){
      Game.data.currentModule = 0;
      //Game.finishScreen();
    })

  }
  Modulo1_Tela1Controller.$inject = ['$log', '$timeout', 'Game'];
})();
