(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($log, $timeout, $window, Game, $rootScope, Sprites, Util) {
    var vm = this;

    vm.game = Game;

    $timeout(function(){
      Game.hideMenu();

      AOS.init();

      var fwidth = angular.element('.screen.screen-4').width() / 1200;
      document.querySelector(':root').style.setProperty('--fwidth', fwidth);

    },10)


    vm.iniciar = function(){
      $timeout(function(){
        Game.data.iniciated = true;
        Game.save();
      })
    }

    if(!vm.game.data.outros.quiz){
      vm.game.data.outros.quiz = [
        {
          completed: false,
          selected: -1,
          answer: 0,
          points:0,
          feedback: false
        },{
          completed: false,
          selected: -1,
          answer: 0,
          points:0,
          feedback: false
        },{
          completed: false,
          selected: -1,
          answer: 0,
          points:0,
          feedback: false
        }
      ]
    }

    //vm.items = vm.game.data.outros.items;
    vm.quiz = vm.game.data.outros.quiz;
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

        /*if(vm.items.every(function(_item){
          return _item
        })){
          if(vm.quiz[0].completed){
            Game.finishScreen();
          }
        }*/
      })
    }


  }
  MenuController.$inject = ['$log', '$timeout', '$window', 'Game', '$rootScope', 'Sprites', 'Util'];
})();
