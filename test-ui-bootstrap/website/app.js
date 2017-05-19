//Initial module angular
var app = angular.module('demo',['ui.bootstrap', 'ngAnimate']);

app.controller('mainController',function($scope){

  $scope.items = [];
  $scope.newitem = '';

  $scope.add = function(){
   if ($scope.items.length < 40) {
     $scope.items.push($scope.items.length);
   }
  }

 $scope.del = function(i){
     console.log(i);
     $scope.items.splice(i,1);
 }

  // create div
    //$scope.change = function(){

      // Create div
      //var newDiv = document.createElement('div')
      //newDiv.className = 'square flex-lg-19 layout-row justify-center align-center'

      // create inner div
      //var innerC = document.createElement('div')
      //innerC.className = 'inner-l'

      //fill child div
      //innerC.innerHTML = '<div class="number">1</div>'

      //newDiv.appendChild(innerC)

      // Find parent div
      //var b = document.getElementsByClassName('base-grid')
      //console.log(b)
      // Push div
      //var insert = b[0].appendChild(newDiv)
      //console.log(insert)
    //}
});
