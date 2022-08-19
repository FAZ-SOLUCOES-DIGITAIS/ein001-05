(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela16Controller', Modulo1_Tela16Controller);

  /** @ngInject */
  function Modulo1_Tela16Controller($log, $timeout, Game) {
    var vm = this;

    vm.game = Game;

    if(!vm.game.data.outros.modulo1.tela16){
      vm.game.data.outros.modulo1.tela16 = {
        items:[true, true, false, false]
      }
    }

    vm.items = vm.game.data.outros.modulo1.tela16.items;
    vm.currentItem = 1;

    vm.select = function(item){
      $timeout(function(){
        vm.items[item] = true;
        vm.currentItem = item;

        if(vm.items[1] && vm.items[2] && vm.items[3]){
          Game.finishScreen();
        }
      })
    }

    /*$timeout(function(){
      Game.finishScreen();
    },500)*/

  }
  Modulo1_Tela16Controller.$inject = ['$log', '$timeout', 'Game'];
})();
