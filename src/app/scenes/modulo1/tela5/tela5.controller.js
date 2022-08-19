(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela5Controller', Modulo1_Tela5Controller);

  /** @ngInject */
  function Modulo1_Tela5Controller($log, $timeout, Game, $rootScope) {
    var vm = this;

    vm.game = Game;

    if(!vm.game.data.outros.modulo1.tela5){
      vm.game.data.outros.modulo1.tela5 = {
        items:[true, false, true, false, false, false],
        quiz:[{
          completed: false,
          selected: -1,
          answer: 0,
          points:0,
          feedback: false
        }]
      }
    }

    vm.items = vm.game.data.outros.modulo1.tela5.items;
    vm.quiz = vm.game.data.outros.modulo1.tela5.quiz;
    vm.currentItem = 0;

    vm.select = function(item){
      $timeout(function(){
        vm.items[item] = true;
        vm.currentItem = item;

        if(vm.items.every(function(_item){
          return _item
        })){
          if(vm.quiz[0].completed){
            Game.finishScreen();
          }
        }

      })
    }

    vm.selectQuiz = function(id, sel){
      var quiz = vm.quiz[id];
      if(quiz.completed) return;

      $timeout(function(){
        quiz.selected = sel;

        if(quiz.selected === quiz.answer){
          quiz.points = 1;
        }
        quiz.completed = true;
        quiz.feedback = true;

        if(vm.items.every(function(_item){
          return _item
        })){
          if(vm.quiz[0].completed){
            Game.finishScreen();
          }
        }
      })
    }



  }
  Modulo1_Tela5Controller.$inject = ['$log', '$timeout', 'Game', '$rootScope'];
})();
