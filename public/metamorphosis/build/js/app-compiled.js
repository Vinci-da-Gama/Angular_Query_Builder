(function () {

	var angu = ['ui.bootstrap', 'ngAnimate', 'mgcrea.ngStrap', 'angularMoment'];
	var routerCtrl = ['aqb.router', 'aqb.ctrl'];
	var cons = ['aqb.constant'];
	var serv = ['aqb.sig.service', 'aqb.service'];
	var dir = ['aqb.dir', 'aqb.cust.dir'];

	var depedencyArr = angu.concat(routerCtrl, cons, serv, dir);
	/**
	* aqb Module
	*
	* The main module of this application...
	*/
	angular.module('aqb', depedencyArr);

	angular.module('aqb.router', ['ui.router']);
	angular.module('aqb.constant', []);
	angular.module('aqb.sig.service', []);
	angular.module('aqb.service', []);
	angular.module('aqb.ctrl', []);
	angular.module('aqb.dir', ['aqb.service', 'aqb.sig.service']);
	angular.module('aqb.cust.dir', ['aqb.service', 'aqb.sig.service']);

})();
(function () {
	var rM = angular.module('aqb.router');

	// rM

})();
(function () {
	var ctrlM = angular.module('aqb.ctrl');

	ctrlM.controller('NgincludeCtrl', ['$scope', function($scope){
		var cs = $scope;

		cs.tmpls = [
			{name: "template1", url: "./partials/tmp1.html"},
			{name: "template1", url: "./partials/tmp2.html"}
		];
		// This must put behind tmpls arr.
		cs.tmpl = $scope.tmpls[0];

	}]);

})();
(function () {
	var cosM = angular.module('aqb.constant');

})();
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
(function () {
	var dM = angular.module('aqb.dir');

	// dM

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('aqb.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('aqb.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
});