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
	
	.directive( 'reactorToolbar' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/reactorToolbar.html' 
		}

	})
	
	.directive( 'reactorOutput' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/reactorOutput.html' 
		}

	})
	
	
	.directive( 'reactorEntries' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/reactorEntries.html' 
		}

	})

	.directive( 'entryOfEntries' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/entryOfEntries.html' 
		}

	})
	
	.directive( 'metadata' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/metadata.html' 
		}

	})

	.directive( 'pagination' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/pagination.html' 
		}

	})
  
	.directive('unlocker', function () {

		return {
			restrict: 'A',
			scope: {
				settings: "="
			},
			templateUrl: 'partials/unlocker.html' 
		}

	})

	.directive('includer', function () {

		return {
			restrict: 'A',
			scope: {
				element: "="
			},
			templateUrl: 'partials/includer.html' 
		}

	})
	


	.directive('reactorText', function () {

		return {

			restrict: 'A',
			scope: {
				text: "="
			},
			templateUrl: 'partials/reactorText.html' 

		}

	})
	
	
	.directive('myCurrentTime', function($interval, dateFilter) {
		 
		function link( scope , element , attrs ) {

			var format ,
			timeoutId ;
			 
			function updateTime() {
				element.text( dateFilter( new Date(), format ) ) ;
			}
			 
			scope.$watch( attrs.myCurrentTime, function( value ) {
				format = value;
				updateTime() ;
			});
			 
			element.on('$destroy', function() {
				$interval.cancel(timeoutId);
			});
			 
			// start the UI update process; save the timeoutId for canceling
			timeoutId = $interval( function() {
				updateTime() ; // update DOM
				}, 1000 ) ;
			}
			 
			return {
				link: link
			};
		})
		
