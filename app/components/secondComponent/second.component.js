'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado secondSubModule.
 */
angular.module('myApp.secondSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html
 * 
 * Hemos añadido la funcionalidad de CustomFactory como ejemplo de factorización de código, tan solo se debe importar en el
 * inyector de dependencias el nombre del servicio y pasarlo como parámetro de la función para poder utilizar el objeto.
 */
.controller("MathController", ['$scope','CustomFactory',function($scope,customFactory){
    $scope.double = function(value) { 
        return customFactory.getDouble(value);
    };
}]);