'use strict';

/* Directives */


angular.module( 'reactor_directives', [] ).

	directive('appVersion', [ 'version', function( version ) {
		return function(scope, elm, attrs) {
		  elm.text(version);
		};
	}])
  
	.directive('appMenu', function() {
		return {
			templateUrl: 'partials/appMenu.html' 
		} ;
	})
	

