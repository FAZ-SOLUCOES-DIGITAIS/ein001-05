(function() {
  'use strict';

  angular
    .module('einstein-cursos')
    .controller('Modulo1_Tela10Controller', Modulo1_Tela10Controller);

  /** @ngInject */
  function Modulo1_Tela10Controller($log, $timeout, Game, $rootScope) {
    var vm = this;

    vm.game = Game;

    vm.item = document.getElementsByClassName('horizontal-scroll')[0];

    function wheelFunction(e) {

      $timeout(function(){
        if (e.deltaY > 0) vm.item.scrollLeft += 50;
        else vm.item.scrollLeft -= 50;
      })

      checkFinish();

    }

    function checkFinish(evt){

      $timeout(function(){

        var totalWidth = angular.element('.horizontal-scroll > .table > .table-cell').width();
        var screenWidth = angular.element(window).width();
        var scrollLeft = vm.item.scrollLeft

        if(totalWidth - screenWidth - scrollLeft <= 50 && !Game.screenFinished()){
          //$timeout(function(){
            Game.finishScreen();
          //})
        }
      })
    }

    window.addEventListener('wheel', wheelFunction);
    vm.item.addEventListener('scroll', checkFinish);

    /*$timeout(function(){
      Game.finishScreen();
    },500)*/


    Game.bfFunction = function(){
      window.removeEventListener('wheel', wheelFunction);
      vm.item.removeEventListener('scroll', checkFinish);
    }

  }
  Modulo1_Tela10Controller.$inject = ['$log', '$timeout', 'Game', '$rootScope'];
})();
