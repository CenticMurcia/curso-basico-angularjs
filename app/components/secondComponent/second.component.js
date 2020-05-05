'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado secondSubModule.
 */
angular.module('myApp.secondSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html
 */
.controller("MathController", ['$scope',function($scope){
    $scope.double = function(value) { return value * 2; };
}]);