
'use strict';

// //Modules-Passed-To-App-Through-Dependencies-.
var myApp = angular.module('myApp',['rawComponent', 'simpleComponent', 'compositeComponent']);

//Modules-Accessed-As-Members-From-Dependency-Injection-.
function myCtrl($scope, rawName, rawMessage){
   $scope.rawName = rawName;
   $scope.rawMessage =  rawMessage;
}
