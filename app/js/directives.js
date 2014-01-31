'use strict';

/* Directives */


angular.module( 'app_directives', [] ).

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
		
