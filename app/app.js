'use strict';

/**
 * En el array de dependencias del módulo principal añadiremos los submódulos que hemos creado.
 */
angular.module("myApp", [
  'myApp.firstSubModule',
  'myApp.secondSubModule'
]);
