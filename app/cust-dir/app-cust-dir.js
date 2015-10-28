(function () {
	var cdM = angular.module('aqb.cust.dir');

	cdM.directive('ngincludeDirective', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;

				cs.tmpls = [
					{name: "template1", url: "./partials/tmp1.html"},
					{name: "template1", url: "./partials/tmp2.html"}
				];
				// This must put behind tmpls arr.
				cs.tmpl = $scope.tmpls[0];
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/nginclude-directive.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();