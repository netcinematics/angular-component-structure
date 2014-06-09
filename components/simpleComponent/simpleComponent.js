"use strict";

//Create-A-New-Module-.-Which-Is-Injected-To-The-App-Through-myApp-.
angular.module('simpleComponent', [])
  .directive('simpleDirective', function(){
	 return {
	      restrict: 'E',  //  restrict-to-element-.
	      templateUrl: './components/simpleComponent/simpleComponent.html',
	      link: function   ($scope, $element, $attrs) {
	      	// debugger;
	      }
	 }
  });