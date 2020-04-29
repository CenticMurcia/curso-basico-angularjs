'use strict';

/**
 * Este código es el más básico para registrar una aplicación web de AngularJS. 
 * 
 * Lo primero que se hace es crear el módulo root de nuestra aplicación llamado myApp. Después le añadimos a ese módulo un controlador llamado 
 * HelloController donde le pasaremos a su función $scope como parámetro.
 * 
 * $scope registrará el objeto helloTo. Todo objeto usado con $scope se podrá utilizar en el HTML como ya hemos visto en el index.html
 */
angular.module("myApp", [])
      
  .controller("HelloController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
  });
