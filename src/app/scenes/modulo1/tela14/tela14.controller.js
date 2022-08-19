(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela14Controller', Modulo1_Tela14Controller);

  /** @ngInject */
  function Modulo1_Tela14Controller($log, $timeout, Game) {
    var vm = this;

    vm.game = Game;

    if(!vm.game.data.outros.modulo1.tela14){
      vm.game.data.outros.modulo1.tela14 = {
        items:[false, false, false, false, false, false, false],
        quiz:[{
          completed: false,
          selected: -1,
          answer: 1,
          points:0,
          feedback: false
        },{
          completed: false,
          selected: -1,
          answer: 1,
          points:0,
          feedback: false
        },{
          completed: false,
          selected: -1,
          answer: 3,
          points:0,
          feedback: false
        },{
          completed: false,
          selected: -1,
          answer: 1,
          points:0,
          feedback: false
        },{
          completed: false,
          selected: -1,
          answer: 0,
          points:0,
          feedback: false
        }]
      }
    }

    vm.items = vm.game.data.outros.modulo1.tela14.items;
    vm.quiz = vm.game.data.outros.modulo1.tela14.quiz;
    vm.currentItem = -1;

    vm.select = function(item){
      if(item > 0){
        if(!vm.items[item - 1]) return;
      }
      $timeout(function(){
        vm.items[item] = true;
        vm.currentItem = item;

        if(vm.items.every(function(_item){
          return _item
        })){
          if(vm.quiz[0].completed && vm.quiz[1].completed && vm.quiz[2].completed && vm.quiz[3].completed && vm.quiz[4].completed){
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
          if(vm.quiz[0].completed && vm.quiz[1].completed && vm.quiz[2].completed && vm.quiz[3].completed && vm.quiz[4].completed){
            Game.finishScreen();
          }
        }
      })
    }


  }
  Modulo1_Tela14Controller.$inject = ['$log', '$timeout', 'Game'];
})();
