'use strict';

/**
 * Crearemos un submódulo a partir del módulo principal llamado filtersSubModule.
 */
angular.module('myApp.filtersSubModule',[])

/**
 * Al controlador se le debe de añadir la dependencia del '$scope' principal y así podremos utilizar el componente en el 
 * index.html
 */
.controller("FilterController", ['$scope',function($scope){

    /**
     * Array con la información a mostrar en la tabla
     */
    $scope.peoples = [
        {name:'Jani',country:'Norway',price:'30000',birthday:323334234898},
        {name:'Carl',country:'Sweden',price:'45000',birthday:322534234898},
        {name:'Margareth',country:'England',price:'24000',birthday:234234234898},
        {name:'Hege',country:'Norway',price:'33000',birthday:323256234898},
        {name:'Joe',country:'Denmark',price:'30000',birthday:323238934898},
        {name:'Gustav',country:'Sweden',price:'35000',birthday:323454234898},
        {name:'Birgit',country:'Denmark',price:'27000',birthday:3267834234898},
        {name:'Mary',country:'England',price:'25000',birthday:323234234898},
        {name:'Kai',country:'Norway',price:'30000',birthday:322344234898}
    ];

    /**
     * Función para cambiar la variable en orderBy del filtrado
     */
    $scope.orderBy = function(x) {
        $scope.myOrderBy = x;
    }
}]);