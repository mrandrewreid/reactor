'use strict';


// Declare app level module which depends on filters, and services
var reactor_app = angular.module('reactor', [
  'ngTouch',
  'ngRoute',
  'ngResource',
  'reactor.filters',
  'reactor.services',
  'app_directives',
  'reactor_directives',
  'reactor_question_directives',
  'reactor_navigation_directives',
  'reactor.controllers'
]).
config( [ '$routeProvider' , function( $routeProvider ) {
	
  $routeProvider.when( '/dashboard', { templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});
  
  $routeProvider.when( '/myAccount', { templateUrl: 'partials/myAccount.html', controller: 'Dashboard'});

  $routeProvider.when( '/edit/:reactor_id/:editing' , { templateUrl: 'partials/edit.html', controller: 'Edit' });
  
  $routeProvider.when( '/create/:new_reactor_type/:new_reactor_id/:editing' , { templateUrl: 'partials/create.html', controller: 'Create' });

  $routeProvider.when( '/template', { templateUrl: 'partials/template.html', controller: 'Template' });

  $routeProvider.when( '/edit', { templateUrl: 'partials/edit.html', controller: 'Edit' });

  $routeProvider.when( '/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });

  $routeProvider.when( '/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });

  $routeProvider.otherwise({redirectTo: '/dashboard'});
  
	//  you can pass global variables, but i bet you're not meant to //
	//	var reactor_j = 'this is the reactor' ;

}]);
