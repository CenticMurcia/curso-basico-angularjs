'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado customFactoryModule.
 */
angular.module('myApp.customFactoryModule',[])


/**
 * Usaremos .factory() para crear funciones o trozos de lógica que se repitan en varios 
 * controladores, directivas o filtros para reducir el código.
 * 
 * Si lo necesitaramos pasariamos cualquier servicio que necesitemos como un controlador y luego
 * añadiriamos la variable a la función
 */
.factory('CustomFactory',[function(){
    /**
     * Se debe de crear un objeto y a partir de él ir añadiendo las diferentes funcionalidades que 
     * se necesiten
     */
    var data = {};

    data.getDouble = function(num){
        return num * 2; 
    }

    return data;
}]);
