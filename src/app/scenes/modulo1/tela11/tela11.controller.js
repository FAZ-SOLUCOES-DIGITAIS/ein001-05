(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela11Controller', Modulo1_Tela11Controller);

  /** @ngInject */
  function Modulo1_Tela11Controller($log, $timeout, Game, $rootScope) {
    var vm = this;

    vm.game = Game;

    if(!vm.game.data.outros.modulo1.tela11){
      vm.game.data.outros.modulo1.tela11 = {
        items:[false, false, false, false, false, false]
      }
    }

    vm.items = vm.game.data.outros.modulo1.tela11.items;
    vm.quiz = vm.game.data.outros.modulo1.tela11.quiz;
    vm.currentItem = -1;

    vm.select = function(item){
      $timeout(function(){
        vm.items[item] = true;
        vm.currentItem = item;

        if(vm.items.every(function(_item){
          return _item
        })){
          Game.finishScreen();
        }

      })
    }


  }
  Modulo1_Tela11Controller.$inject = ['$log', '$timeout', 'Game', '$rootScope'];
})();
