'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado formSubModule.
 */
angular.module('myApp.formSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html
 */
.controller("FormController", ['$scope',function($scope){
    $scope.user = {
        'username': '',
        'password': ''
    };

    $scope.submit = function(){
        alert("Formulario enviado correctamente!");
    };
}]);