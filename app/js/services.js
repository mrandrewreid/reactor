'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var reactor_services = angular.module( 'reactor.services', [] );
	reactor_services.factory( 'server' , [ 
		function() {
			var server = {} ;
				server.saveReactor = function( data ){ alert( 'save reactor file' ) ; } ;
				server.loadReactor = function( id ){ alert( 'load reactor file with id: ' + id ) ; } ;
			return server ;
		}
	]) ;

//		});

//	}]);  