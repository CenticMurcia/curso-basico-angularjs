'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado serviceSubModule.
 */
angular.module('myApp.serviceSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html.
 * 
 * Ahora hemos añadido también el servicio $http para hacer peticiones AJAX y recuperar informaicón de un servidor externo.
 */
.controller("ServiceController", ['$scope', '$http',function($scope,$http){
    $scope.userData = {};

    /**
     * Se puede usar también esta otra forma, ambas son válidas: 
     * 
     *      $http.get('https://api.github.com/users/ServerJon').then();
     */
    $scope.loadInfo = function(){
        // $http({
        //     method: 'GET',
        //     url: 'https://api.github.com/users/ServerJon'
        // }).then(
        //     function susccess(response) {
        //         $scope.userData = response.data;
        //     },
        //     function error(error){
        //         console.log("Error loadInfo():",error);
        //     }
        // ).finally(function() {
        //     console.log("This is finally function!");
        // });

        $http.get('https://api.github.com/users/ServerJon')
        .then(function correcta(response) {
            $scope.userData = response.data;
        })
        .finally(function() {
            console.log("This is finally function!");
        });
    };
}]);