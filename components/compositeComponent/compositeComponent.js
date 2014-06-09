"use strict";

//Create-A-New-Module-.-Which-Is-Injected-To-The-App-Through-myApp-.
angular.module('compositeComponent', [])
  .directive('elementDirective', function(){
	 return {
	      restrict: 'E',  //  restrict-to-element-.
	      scope: {},      //  allows-multiple-instances-to-not-share-scopes-.
	      templateUrl: './components/compositeComponent/compositeComponent.html',
	      controller: function ($scope, $element, $attrs) {  // expose-API-for-other-directives-to-require-.
		      	$scope.componentData = [];
		      	//  API-to-export-.
		      	this.interfaceA = function(){
		      		$scope.componentData.push("Behavior A");
		      	}
		      	this.interfaceB = function(){
		      		$scope.componentData.push("Behavior B");
		      	}
	      },
	      link: function($scope, $element) {
	      	$scope.name = "Composite Directives";
	      }
	 }
  })
  .directive('attributeDirectiveA', function(){
	 return {
	      restrict: 'A',  //  restrict-to-attribute-.
	      require: 'elementDirective',
	      link: function   ($scope, $element, $attrs, elementCtrl) {   //  notice-the-4th-attribute-for-D2D-composition-.
	      	elementCtrl.interfaceA();
	      }
	 }
  })
  .directive('attributeDirectiveB', function(){
	 return {
	      restrict: 'A',  //  restrict-to-attribute-.
	      require: 'elementDirective',
	      link: function   ($scope, $element, $attrs, elementCtrl) {   //  notice-the-4th-attribute-for-D2D-composition-.
	      	elementCtrl.interfaceB();
	      }
	 }
  });