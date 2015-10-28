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