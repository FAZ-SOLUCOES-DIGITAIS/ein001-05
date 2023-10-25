(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($log, $timeout, $window, Game, $rootScope, Sprites, Util) {
    var vm = this;

    vm.game = Game;

    vm.checkFinal = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 20
      ) {
        // you're at the bottom of the page
        console.log("final");
        /*if (
          vm.items.every(function (_item) {
            return _item;
          })
        ) {*/
          //Game.finishScreen();
          Game.finishGame(100);
          window.onscroll = null;
        //}
      }
    };


    $timeout(function(){
      Game.hideMenu();

      AOS.init();

      var fwidth = angular.element('.screen.screen-4').width() / 1200;
      document.querySelector(':root').style.setProperty('--fwidth', fwidth);

      vm.checkFinished();

      setInterval(function(){
        AOS.init();
      },2000)

      window.onscroll = vm.checkFinal;

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
        },

        {
          completed: false,
          selected: -1,
          answer: 0,
          points:0,
          feedback: false
        }

      ]
    }

    if(!vm.game.data.outros.finalQuiz){
      vm.game.data.outros.finalQuiz = [
        /*{
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
        }*/
      ]
    }

    if(!vm.game.data.outros.items){
      vm.game.data.outros.items = [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false
      ]
    }

    vm.items = vm.game.data.outros.items;
    vm.quiz = vm.game.data.outros.quiz;
    vm.finalQuiz = vm.game.data.outros.finalQuiz;
    vm.currentItem = 0;

    vm.select = function(item){
      $timeout(function(){
        vm.items[item] = true;
        vm.currentItem = item;

        if(vm.items.every(function(_item){
          return _item
        })){
          //if(vm.quiz[0].completed){
            Game.finishScreen();
            Game.finishGame(100);
          //}
        }

      })
    }

    vm.finalPoints = 0;
    vm.finishedAll = false;


    vm.selectQuiz = function(id, sel, final){
      var quiz;
      if(final){
        quiz = vm.finalQuiz[id]
      }else{
        quiz = vm.quiz[id];
      }
      if(quiz.completed) return;

      $timeout(function(){
        quiz.selected = sel;

        if(quiz.selected === quiz.answer){
          quiz.points = 1;
        }
        quiz.completed = true;
        quiz.feedback = true;

        //if(final) vm.checkFinished();

        $timeout(function(){
          AOS.init();
        },10)

      })
    }

    vm.checkFinished = function(){
      vm.finalPoints = 0;

      $timeout(function(){
        /*if(vm.finalQuiz.every(function(_item){
          vm.finalPoints += _item.points;
          return _item.completed;
        })){
          Game.finishGame(Math.round((vm.finalPoints / 5) * 100));
          vm.finishedAll = true;
        }*/
      })
    }


  }
  MenuController.$inject = ['$log', '$timeout', '$window', 'Game', '$rootScope', 'Sprites', 'Util'];
})();
