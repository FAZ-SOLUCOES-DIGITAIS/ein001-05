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

      vm.checkFinished();

      setInterval(function(){
        AOS.init();
      },2000)

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

        ,{
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
        {
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
        }
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

        /*if(vm.items.every(function(_item){
          return _item
        })){
          if(vm.quiz[0].completed){
            Game.finishScreen();
          }
        }*/

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

        if(final) vm.checkFinished();

        $timeout(function(){
          AOS.init();
        },10)

      })
    }

    vm.checkFinished = function(){
      vm.finalPoints = 0;

      $timeout(function(){
        if(vm.finalQuiz.every(function(_item){
          vm.finalPoints += _item.points;
          return _item.completed;
        })){
          Game.finishGame(Math.round((vm.finalPoints / 5) * 100));
          vm.finishedAll = true;
        }
      })
    }

    vm.retryQuiz = function(){
      if(vm.game.data.currentTry < 2){
        $timeout(function(){
          vm.game.data.outros.finalQuiz = [
            {
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
            }
          ]
          vm.game.data.currentTry++;
          vm.finalQuiz = vm.game.data.outros.finalQuiz;
          vm.finishedAll = false;

          vm.game.save();

          angular.element(window).scrollTop(angular.element('section.screen-24').position().top)
        })
      }
    }

    vm.retry = function(){
      if(vm.game.data.currentTry < 2){
        $timeout(function(){
          vm.game.data.outros.finalQuiz = [
            {
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
            }
          ]

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

          ,{
            completed: false,
            selected: -1,
            answer: 0,
            points:0,
            feedback: false
          }

        ]
          vm.game.data.currentTry++;
          vm.finalQuiz = vm.game.data.outros.finalQuiz;
          vm.quiz = vm.game.data.outros.quiz;
          vm.finishedAll = false;
          //vm.game.data.currentTry = 0;

          vm.game.save();

          angular.element(window).scrollTop(0);
        })
      }else{
        angular.element(window).scrollTop(0);
      }
    }


  }
  MenuController.$inject = ['$log', '$timeout', '$window', 'Game', '$rootScope', 'Sprites', 'Util'];
})();
