var myApp = angular.module('myApp', []);
myApp.controller('appCtrl', ['$scope', '$http',
function($scope, $http){
   console.log("Hello from controller");

   //$http.get('/contactlist').success(function(response){
   //   console.log("i got the data i requested");
   //   $scope.contactlist = response;
   //});
     $http.get('/contactlist').then(function(response){
        console.log("i got the data i requested: " + response.data);
        $scope.contactlist = response.data;
    });﻿

//   $scope.contactlist = contactlist;

}]);