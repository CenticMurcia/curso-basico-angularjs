'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado realSubModule.
 */
angular.module('myApp.realSubModule',[])

/**
 * Creamos un primer componente realComponent que será el componente padre donde le pasamos una plantilla html y un controlador
 * para la funcionalidad
 */
.component('realComponent', {
    templateUrl: 'components/realComponent/real.component.html',
    controller: function realController() {
        /**
         * Sustituimos el uso del $scope por 'this' como se explica en el documento pdf, así evitamos herencias de $scope
         */
        var vm = this;

        vm.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];

        vm.message = function() {
            alert("Hola Compañero!");
        };
    }
})

/**
 * Componente hijo que recibe información a mostrar por el padre, la forma de trabajo es similar a una directiva custom
 */
.component('childComponent', {
    template: '<p>Phone ' +
        '<span>{{$ctrl.phone.name}}</span>' +
        '<p>{{$ctrl.phone.snippet}}</p></p>' +
        '<button ng-click="$ctrl.onMessage()">Pulsame!</button>',
    controller: function childComponent() { },
    bindings: {
        phone: '<',
        onMessage: '&'
    }
});