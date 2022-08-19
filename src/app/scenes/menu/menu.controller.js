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
        },10)
        //Game.resizeWindow();
        //Game.showMenu(true);
        //Game.lockAvancar();
        //Game.lockVoltar();

        vm.trilhas = Game.data.trilhas;
        vm.trilhaSelected = -1;
        vm.finalScreen = false//Game.data.trilhas.trilha7.completed;
        //vm.preFinalScreen = Game.data.trilhas.trilha7.completed && !Game.data.preFinal;

        vm.currentTrack = 'track1';

        if(!vm.trilhas.trilha1.completed){
          vm.currentTrack = 'track1';
        }else if(!vm.trilhas.trilha2.completed){
          vm.currentTrack = 'track2';
        }else if(!vm.trilhas.trilha3.completed){
          vm.currentTrack = 'track3';
        }else if(!vm.trilhas.trilha4.completed){
          vm.currentTrack = 'track4';
        }/*else if(!vm.trilhas.trilha5.completed){
          vm.currentTrack = 'track5';
        }else if(!vm.trilhas.trilha6.completed){
          vm.currentTrack = 'track6';
        }else if(!vm.trilhas.trilha7.completed){
          vm.currentTrack = 'track7';
        }else if(!vm.trilhas.trilha8.completed){
          vm.currentTrack = 'track8';
        }else if(!vm.trilhas.trilha9.completed){
          vm.currentTrack = 'track9';
        }else if(!vm.trilhas.trilha10.completed){
          vm.currentTrack = 'track10';
        }else if(!vm.trilhas.trilha11.completed){
          vm.currentTrack = 'track11';
        }else if(!vm.trilhas.trilha12.completed){
          vm.currentTrack = 'track12';
        }else if(!vm.trilhas.trilha13.completed){
          vm.currentTrack = 'track13';
        }*/

        vm.order = [1,2,3,4,5,6,7,8,9,10,11,12,13]

        /*$timeout(function(){
          var scale = (0.24 * angular.element(window).width()) / 477;
          angular.element('.menu-item').css("transform", 'scale(' + scale + ')');
        })*/

        vm.goto = function(id, evt){
          if(evt){
            if(evt.shiftKey && evt.altKey){
              Game.gotoTela(0,(id - 1));
              //vm.trilhaSelected = (id - 1);
              return;
            }
          }

          /*var ind = vm.order.indexOf(id);

          if(ind > 0){
            var pre = ind - 1;
            if(!Game.data.trilhas['trilha' + vm.order[pre]].completed) return;
          }*/

          Game.gotoTela(0,(id - 1));
        }


        vm.iniciar = function(){
          $timeout(function(){
            Game.data.iniciated = true;
            Game.save();
          })
        }


    }
    MenuController.$inject = ['$log', '$timeout', '$window', 'Game', '$rootScope', 'Sprites', 'Util'];
})();
