(function () {

	var angu = ['ui.bootstrap', 'ngAnimate', 'mgcrea.ngStrap', 'angularMoment'];
	var routerCtrl = ['appname.router', 'appname.ctrl'];
	var cons = ['appname.constant'];
	var serv = ['appname.sig.service', 'appname.service'];
	var dir = ['appname.dir', 'appname.cust.dir'];

	var depedencyArr = angu.concat(routerCtrl, cons, serv, dir);
	/**
	* appname Module
	*
	* The main module of this application...
	*/
	angular.module('appname', depedencyArr);

	angular.module('appname.router', ['ui.router']);
	angular.module('appname.constant', []);
	angular.module('appname.sig.service', []);
	angular.module('appname.service', []);
	angular.module('appname.ctrl', []);
	angular.module('appname.dir', ['appname.service', 'appname.sig.service']);
	angular.module('appname.cust.dir', ['appname.service', 'appname.sig.service']);

})();