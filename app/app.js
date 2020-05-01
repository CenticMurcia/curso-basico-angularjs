'use strict';

/**
 * En el array de dependencias del módulo principal añadiremos el submódulo que hemos creado para nuestro controlador HelloController.
 */
angular.module("myApp", [
  'myApp.firstSubModule'
]);
