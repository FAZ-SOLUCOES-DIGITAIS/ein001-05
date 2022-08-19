(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela8Controller', Modulo1_Tela8Controller);

  /** @ngInject */
  function Modulo1_Tela8Controller($log, $timeout, Game, $rootScope) {
    var vm = this;

    vm.game = Game;

    $timeout(function(){
      Game.finishScreen();
    },500)

  }
  Modulo1_Tela8Controller.$inject = ['$log', '$timeout', 'Game', '$rootScope'];
})();
