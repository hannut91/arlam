(function(){
    'use strict';
    angular.module('myApp',[])
        .controller('myController', MyControllerController);
        
    MyControllerController.$inject = [
        '$scope',
        '$http',
        '$interval'
    ];
    function MyControllerController($scope,$http,$interval){
            $http.get('/getInfo')
                .success(function(data) {
                    $scope.result = data;
                }).
            error(function(data, status) {
                console.log("status : "+status)
            });

        var temp = function(){
            $http.get('/getInfo')
                .success(function(data) {
                    $scope.result = data;
                }).
            error(function(data, status) {
                console.log("status : "+status)
            });
        };
        $interval(temp,10000);

    };    
})();
