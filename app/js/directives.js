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
			templateUrl: 'partials/appMenu.html?t=' + new Date() 
		} ;
	})
	
	.directive( 'reactorToolbar' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/reactorToolbar.html?t=' + new Date() 
		}

	})
	
	.directive( 'reactorOutput' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
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
				index: "="
			},
			templateUrl: 'partials/reactorEntries.html?t=' + new Date() 
		}

	})

	
	
	.directive( 'navigationControls' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
				
			},
			templateUrl: 'partials/navigationControls.html?t=' + new Date() 
		}

	})

	.directive( 'navigationControlsEdit' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/navigationControls.edit.html?t=' + new Date() 
		}

	})


	.directive( 'entryOfEntries' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				index: "="
			},
			templateUrl: 'partials/entryOfEntries.html?t=' + new Date() 
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

	.directive( 'pagination' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "="
			},
			templateUrl: 'partials/pagination.html?t=' + new Date() 
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
		
