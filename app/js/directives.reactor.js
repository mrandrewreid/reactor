'use strict';

/* Directives */


angular.module( 'reactor_directives', [] )

	
	.directive( 'reactorToolbar' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				display: "="
			},
			templateUrl: 'partials/reactorToolbar.html?t=' + new Date() 
		}

	})
	


	.directive('rDataEditor', function() {
		return {
			restrict: 'A',
			scope: {
				data: "="
			},
			templateUrl: 'partials/dataEditor.html?t=' + new Date() 
		} ;
	})
	


	.directive( 'reactorOutput' , function () {
		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				display: "="
			},
			templateUrl: 'partials/reactorOutput.html?t=' + new Date() 
		}

	})
	
	.directive( 'reactorControls' , function () {

		return {
			restrict: 'A',
			scope: {
				element: "="
			},
			templateUrl: 'partials/reactorControls.html?t=' + new Date() 
		}

	})
	
	
	.directive( 'reactorEntries' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				index: "=" ,
				display: "="
			},
			templateUrl: 'partials/reactorEntries.html?t=' + new Date() 
		}

	})
	
	
	.directive( 'metadata' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/metadata.html?t=' + new Date() 
		}

	})

	.directive( 'reactorSlide' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				entry: "=",
				index: "="
			},
			templateUrl: 'partials/reactorEntrySlide.html?t=' + new Date() 
		}

	})

	



  
	.directive('unlocker', function () {

		return {
			restrict: 'A',
			scope: {
				settings: "="
			},
			templateUrl: 'partials/unlocker.html?t=' + new Date() 
		}

	})

	.directive('includer', function () {

		return {
			restrict: 'A',
			scope: {
				element: "="
			},
			templateUrl: 'partials/includer.html?t=' + new Date() 
		}

	})
	


	.directive('reactorText', function () {

		return {

			restrict: 'A',
			scope: {
				text: "="
			},
			templateUrl: 'partials/reactorText.html?t=' + new Date() 

		}

	})
	
	
	.directive('reactorImageContainer', function () {

		return {

			restrict: 'A',
			scope: {
				image: "=",
				reactor: "="
			},
			templateUrl: 'partials/reactorImageContainer.html?t=' + new Date() 

		}

	})

	
	.directive('reactorImage', function () {

		return {

			restrict: 'A',
			scope: {
				image: "=",
				reactor: "="
			},
			templateUrl: 'partials/reactorImage.html?t=' + new Date() 

		}

	})