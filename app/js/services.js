'use strict';

/* Services */

var reactor_services = angular.module( 'reactor.services', [] );
	reactor_services.factory( 'server' , [ 
		function() {
			var server = {} ;
				server.saveReactor = function( data ){ alert( 'save reactor file' ) ; } ;
				server.loadReactor = function( id ){ alert( 'load reactor file with id: ' + id ) ; } ;
				server.getTemplates = function( id ){ 
					alert( 'load reactor file with id: ' + id ) ; 
				} ;
			return server ;
		}
	]) ;


