'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado scopeSubModule.
 */
angular.module('myApp.scopeSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html
 */
.controller("ScopeController", ['$scope',function($scope){
    $scope.name = "Curso AngularJS";

    /**
     * Cada vez que la variable 'name' sufra un cambio, saltará $watch indicando que se ha modificado el valor de la variable y comenzará
     * el ciclo de $digest
     */
    $scope.$watch('name', function(name){
        console.log("Valor modificado de name!",name);
    });
}])

/**
 * Nuevo controlador anidado en ScopeController por lo que trabaja como hijo de él
 */
.controller("SubScopeController", ['$scope',function($scope){

    /**
     * Función con la que cambiaremos el valor de 'name' que recibe del padre
     */
    $scope.changeValue =  function() {
        $scope.name = "Changed new value!";
    }
}]);