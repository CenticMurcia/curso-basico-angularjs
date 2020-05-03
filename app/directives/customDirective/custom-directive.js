'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado customDirectiveModule.
 */
angular.module('myApp.customDirectiveModule',[])

/**
 * Creamos la lógica para nuestra directiva personalizada. Como con los controladores el primer parámetro es el nombre de la directiva. En el código de
 * JavaScript se nombrará en la forma Camel y en el HTML con un guión (revisar index.html). El segundo parámetro son las dependencias de la directiva, 
 * en este caso solo le pasamos la función con la que trabajará.
 */
.directive("customDirective", [function(){
    /**
     * No todos los siguientes valores son necesarios para crear una directiva personalizada pero sí los mas usuales.
     */
    return {
        /**
         * Restringimos su uso a elementos solamente
         */
        restrict: 'E',
        /**
         * Crearemos un atributo 'title' que recibirá una variable que podremos usar en el HTML de nuestra directiva
         */
        scope: {
            title: '='
        },
        /**
         * Dirección de nuestro HTML, también se podría colocar en línea si no es muy complejo
         */
        templateUrl: 'directives/customDirective/custom-directive.html',
        /**
         * Controlador para la parte lógica que pueda tener nuestra directiva
         * @param {} $scope Modelo de datos de nuestra aplicación
         */
        controller: function($scope){
            $scope.sub_title = "What's up?¿"
        }
    }
}]);