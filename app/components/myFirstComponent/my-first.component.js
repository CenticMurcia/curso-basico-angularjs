'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado firstSubModule.
 */
angular.module('myApp.firstSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html
 */
.controller("HelloController", ['$scope',function($scope){
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
}]);