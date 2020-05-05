'use strict';

/**
 * En el array de dependencias del módulo principal añadiremos los submódulos que hemos creado.
 * 
 * Se añade el módulo de las rutas, ui.router.
 */
angular.module("myApp", [
  'ui.router',

  'myApp.firstSubModule',
  'myApp.secondSubModule',
  'myApp.scopeSubModule',
  'myApp.customDirectiveModule',
  'myApp.serviceSubModule',
  'myApp.formSubModule',

  'myApp.customFactoryModule'
])

/**
 * Añadiremos al .config del módulo principal las rutas que queramos. Siguiendo un poco con la comparativa con ngRoute, ui-route usa dos objetos
 * para configurar las rutas $stateProvider y $urlRouterProvider a diferencia de ngRoute que tiene el $routeProvider.
 * 
 * $stateProvider registrarémos un 'estado' por cada ruta que vayamos crear y le paremos los valores que necesitemos como la url, la plantilla asociada 
 * y el componente que queramos que se añada con esa plantilla.
 * 
 * $urlRouterProvider sirve para configurar las rutas, en este caso por ejemplo se usará para definir la ruta por defecto.
 */
.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider) {

  $stateProvider
  
  .state('first', {
    url: '/first',
    templateUrl: './components/myFirstComponent/my-first.component.html',
    controller: 'HelloController'
  })

  .state('second', {
    url: '/second',
    templateUrl: './components/secondComponent/second.component.html',
    controller: 'MathController'
  })

  .state('service', {
    url: '/service',
    templateUrl: './components/serviceComponent/service.component.html',
    controller: 'ServiceController'
  })

  .state('form', {
    url: '/form',
    templateUrl: './components/formComponent/form.component.html',
    controller: 'FormController'
  });

  $urlRouterProvider.otherwise('/first');
}]);
