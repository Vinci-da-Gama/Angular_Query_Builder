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