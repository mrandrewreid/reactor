'use strict';


// Declare app level module which depends on filters, and services
angular.module('reactor', [
  'ngRoute',
  'reactor.filters',
  'reactor.services',
  'reactor.directives',
  'reactor.controllers'
]).
config( [ '$routeProvider' , function( $routeProvider ) {
  $routeProvider.when( '/dashboard', { templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});
  $routeProvider.when( '/edit', { templateUrl: 'partials/edit.html', controller: 'Edit' });
  $routeProvider.when( '/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
  $routeProvider.when( '/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
