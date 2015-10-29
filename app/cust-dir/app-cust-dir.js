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

	cdM.directive('queryBuilderEntry', ['projectAisle', function(projectAisle){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
				var cs = $scope;
				var tq = String.fromCharCode(9775)+" - ";

				var data = '{"group": {"operator": "AND","rules": []}}';

		        function htmlEntities(str) {
		            return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
		        }

		        // This function would be called, Add Condition, Add Group and remove Group, Remove Rule...
		        // The purpose is about build up the data object.
		        // why computed function only is triggered when Add Condition, Add Group, Remove Group and Remove Rule has been called?
		        // Because, at beginning, group is empty, thus, the inside if condition is triggered, then jump out this function.
		        function computed(group) {
		            /*console.log('The process about how this computed function works...???');
		            console.log('why computed function only is triggered when Add Condition, Add Group, Remove Group and Remove Rule has been called? Because, at beginning, group is undefined, thus, the inside if condition is triggered, then jump over this function.');
		            console.log('when Add Condition or Add Group btns trigger their function. the group obj would be found.');
		            console.log('Then, it is not undefined group obj, it is valided group obj. the if condition inside this computed function would be ignored.');
		            console.log('Then, this computed function will generate and form the group data object.');*/
		            if (!group) return "";

		            for (var str = "(", i = 0; i < group.rules.length; i++) {
		                i > 0 && (str += " <strong>" + group.operator + "</strong> ");
		                str += group.rules[i].group ?
		                computed(group.rules[i].group) :
		                group.rules[i].field + " " + htmlEntities(group.rules[i].condition) + " " + group.rules[i].data;

		                // group.operator is AND or OR.
		                // console.log('group.operator -- '+tq, group.operator);
		                // group.rules[i].group is a undefined value, don't care...
		                // console.log('group.rules[i].group -- '+tq, group.rules[i].group);
		                // group.rules[i].field --> first field(input) content... link 'FirstName'.
		                // console.log('group.rules[i].field --> '+tq, group.rules[i].field);
		                // group.rules[i].condition is =, <>, <, <=, >, >= ...
		                // console.log('group.rules[i].condition --> '+tq, group.rules[i].condition);
		                // 'group.rules[i].data --> the last field (input). It is one letter one time...
		                // console.log('group.rules[i].data --> '+tq, group.rules[i].data);
		                // console.log('typ of group.rules[i].data is --> '+typeof(group.rules[i].data));
		                // htmlEntities(group.rules[i].condition) only do one thing... if the condition has < or > , 
		                // those < or > would be replaced by &lt; &gt; -- then computer could understand.
		                // console.log('html htmlEntities -> '+tq+" : ", htmlEntities(group.rules[i].condition));
		            }

		            return str + ")";
		        }

		        $scope.json = null;

		        // filter is the data, which would be pass in and out from query-builder directive.
		        // it has been watched in function below...
		        $scope.filter = JSON.parse(data);

		        // console.log(tq+"scope fileter is -- ", $scope.filter);

		        $scope.$watch('filter', function (newValue) {
		            // JSON.stringify(the data you want to stringfy, anything you want to replace, how many space between each elements)
		            // $scope.json is updated data object...
		            $scope.json = JSON.stringify(newValue, null, 2);
		            // the output is for <span></span> -- Example Output
		            $scope.output = computed(newValue.group);
		            /*console.log(tq+" $scope.json ", $scope.json);
		            console.log(tq+" $scope.output ", $scope.output);*/
		        }, true);
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: projectAisle.tmplPrefix+'query-builder-entry.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	cdM.directive('queryBuilder', ['$compile', function($compile){
		return {
			scope: {
				group: '='
			}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/query-builder.html',
			// replace: true,	
			transclude: true,
			compile: function(tElement, tAttrs) {
                var tq = String.fromCharCode(9775)+" -- ";

                var content, directive;
                content = tElement.contents().remove();
                // This content is every element in query-builder.html, in short, it is the query-builder.html
                // console.log("beginning (content) --> "+tq, content);
                // This tElement is the query builder itself...
                // console.log("beginning (tElement) --> "+tq, tElement);
                // at beginning directive is undefined. this directive is actually current directive (queryBuilder).
                // console.log("beginning (directive) --> "+tq+" this directive is actually current directive (queryBuilder). But it is only triggered when the Add Group btn clikced. thus at the beginning, it is undefined. Result -- ", directive);
                

                // linking
                return function linking(scope, elm, attrs){

                    scope.operators = [
                    { name: 'AND' },
                    { name: 'OR' }];

                    // first field... Actually, the data of it should be received from backend...
                    scope.fields = [
                    { name: 'Firstname' },
                    { name: 'Lastname' },
                    { name: 'Birthdate' },
                    { name: 'City' },
                    { name: 'Country' }];


                    var cs = scope;
			        cs.urlcollection = {
			            url1: "./partials/tmpqb1.html",
			            url2: "./partials/tmpqb2.html"
			        };

                    scope.conditions = [
                    { name: '=' },
                    { name: '<>' },
                    { name: '<' },
                    { name: '<=' },
                    { name: '>' },
                    { name: '>=' }];

                    scope.btnPlaceholder = tq+"This is Placeholder...";
                    scope.selectedIcon = "";
                    scope.icons = [
                        {value: "wo"},
                        {value: "cao"},
                        {value: "ni"},
                        {value: "ma"}];

                    scope.addCondition = function () {
                    	var grObj = {
                            condition: '=',
                            field: 'Firstname',
                            data: '',
                            tmpurl: './partials/tmpqb2.html'
                        };

                        scope.group.rules.push(grObj);
                        // console.log(tq+'the condiiton is :--> ', scope.group.rules);
                        console.log('one example --> '+tq+" -Due to the group has been built, the computed would be executed to form the rules data to group Obj...");
                        console.log('the pass in group is --> ', scope.group);

                        var idx = scope.group.rules.length-1;
                    };

                    // This is for select and change Templates
                    scope.getResponsiveUrl = function (ru) {
                        /*var sgr = scope.group.rules;
                        console.log('The index of current rule --> '+tq, ru);
                        console.log('...........cao...........');
                        var i = sgr.indexOf(ru);
                        console.log(tq+' the index is : '+i);*/
                        console.log('ru.field --> '+ru.field);
                        if (ru.field === 'Firstname') {
                            ru.tmpurl = cs.urlcollection.url2;
                            console.log('url2 -- ru.tmpurl --> '+ru.tmpurl);
                        } else{
                            ru.tmpurl = cs.urlcollection.url1;
                            console.log('url1 -- ru.tmpurl --> '+ru.tmpurl);
                        };
                    };
                    // This is for select and change Templates

                    scope.removeCondition = function (index) {
                        // remove the pointed rule
                        scope.group.rules.splice(index, 1);
                    };

                    scope.addGroup = function () {
                        // add one more group
                        scope.group.rules.push({
                            group: {
                                operator: 'AND',
                                rules: []
                            }
                        });
                    };

                    scope.removeGroup = function () {
                        // remove current group
                        "group" in scope.$parent && scope.$parent.group.rules.splice(scope.$parent.$index, 1);
                    };

                    directive || (directive = $compile(content));

                    elm.append(directive(scope, function ($compile) {
                        // the directive is about compile new added group into current directive...
                        console.log(tq+" directive is: ", directive);
                        return $compile;
                    }));

				}

                /*var ff = $('#firstField');
                console.log('the first field valuel is --> '+ff.val());
                console.log('the first field text is --> '+ff.text());
                console.log('the first field html is --> '+ff.html());*/

			}
			// link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

})();