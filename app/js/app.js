'use strict';


// Declare app level module which depends on filters, and services
var reactor_app = angular.module('reactor', [
  'ngRoute',
  'ngResource',
  'reactor.filters',
  'reactor.services',
  'reactor_directives',
  'reactor.controllers'
]).
config( [ '$routeProvider' , function( $routeProvider ) {
	
  $routeProvider.when( '/dashboard', { templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});

  $routeProvider.when( '/edit/:reactor_id/:editing' , { templateUrl: 'partials/edit.html', controller: 'Edit' });

  $routeProvider.when( '/edit', { templateUrl: 'partials/edit.html', controller: 'Edit' });

  $routeProvider.when( '/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });

  $routeProvider.when( '/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });

  $routeProvider.otherwise({redirectTo: '/dashboard'});
  
	//  you can pass global variables, but i bet you're not meant to //
	//	var reactor_j = 'this is the reactor' ;

}]);
