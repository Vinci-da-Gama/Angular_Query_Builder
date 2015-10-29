(function () {
	var ctrlM = angular.module('aqb.ctrl');

	/*ctrlM.controller('NgincludeCtrl', ['$scope', function($scope){
		var cs = $scope;

		cs.tmpls = [
			{name: "template1", url: "./partials/tmp1.html"},
			{name: "template1", url: "./partials/tmp2.html"}
		];
		// This must put behind tmpls arr.
		cs.tmpl = $scope.tmpls[0];

	}]);*/

	ctrlM.controller('LastFieldQueryBuilderCtrl', ['$scope', '$log', function($scope, $log){
        // This is for assign the last field value to rule.data
        $scope.getTheLastFieldQbResponsiveValue = function (theRule) {
        	/*$log.log('theRule 3rd field is --> ', theRule);
        	$log.log(" scope.selectedIcon -- ", $scope.selectedIcon);*/
        	var ss = $scope.selectedIcon;
        	var iconBool = ss !== undefined && ss !== '' && ss !== null && typeof(ss) === "string";
        	if (iconBool) {
        		theRule.data = ss;
        	} else{
        		theRule.data = 'The value is not string or it is undefined.';
        	};
        };
        // This is for assign the last field value to rule.data
	}]);

})();