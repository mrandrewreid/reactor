'use strict';

/* Directives */


angular.module( 'reactor_navigation_directives', [] )

	.directive( 'navigationControls' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				display: "="
			},
			templateUrl: 'partials/navigationControls.html?t=' + new Date() 
		}

	})

	.directive( 'navigationControlsEdit' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				display: "="
			},
			templateUrl: 'partials/navigationControls.edit.html?t=' + new Date() 
		}

	})


	.directive( 'entryOfEntries' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				display: "=",
				index: "="
			},
			templateUrl: 'partials/entryOfEntries.html?t=' + new Date() 
		}

	})


	.directive( 'pagination' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				display: "="
			},
			templateUrl: 'partials/pagination.html?t=' + new Date() 
		}

	})