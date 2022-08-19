(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela15Controller', Modulo1_Tela15Controller);

  /** @ngInject */
  function Modulo1_Tela15Controller($log, $timeout, Game) {
    var vm = this;

    vm.game = Game;

    vm.quiz = vm.game.data.outros.modulo1.tela14.quiz;

    vm.totalPoints = vm.quiz[0].points + vm.quiz[1].points + vm.quiz[2].points + vm.quiz[3].points + vm.quiz[4].points;

    $timeout(function(){
      if(vm.totalPoints >= vm.quiz.length * 0.7){
        vm.screenStatus = 'approved';
        Game.finishScreen();
      }else{
        if(vm.game.data.currentTry < 2){
          //Não aprovado com retry
          vm.screenStatus = 'not-approved';
        }else{
          vm.screenStatus = 'reproved';
        }
      }
    })

    vm.retry = function(){

      if(vm.screenStatus === 'not-approved'){
        vm.game.data.currentTry++;
        vm.game.data.telas[0]['tela14'] = false;
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
        vm.game.gotoTela(13);
      }
    }

    vm.reiniciate = function(){
      vm.game.data.currentTry = 0;
      //vm.game.data.telas[0]['tela14'] = false;
      for (var j = 0; j < vm.game.modules.length; j++) {
        vm.game.data.telas[j] = {};

        for (var i = 0; i < vm.game.modules[j].length; i++) {
          vm.game.data.telas[j]['tela' + vm.game.modules[j][i]] = false;
        }
      }
      vm.game.data.outros.modulo1 = {}
      vm.game.gotoTela(0);
    }

  }
  Modulo1_Tela15Controller.$inject = ['$log', '$timeout', 'Game'];
})();
