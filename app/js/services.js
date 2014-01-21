'use strict';

/* Services */

var reactor_services = angular.module( 'reactor.services', [] ) ;
	reactor_services.factory( 'server' , [ '$http' , '$resource' ,
		function( $http , $resource ) {
			var server = {} ;

				server.saveReactor = function( reactor_data , user_data ) { 
				
					if ( !reactor_data.meta.version ) { 
						reactor_data.meta.version = 1 ; 
					} else { 
						reactor_data.meta.version++ 
					}
					
					// set the last date modified to this bloody second //
					reactor_data.meta.modified = new Date() ;
					
					// this is supposed to be written differently if i want it to be a restful architecture //
					// but i just want it to work for now //
					$http.post( 'php/save.php?t=' + new Date() , { reactor: reactor_data , user: user_data } ).success( function( data ) {
						console.log( data ) ;
					});
					

				} ;

				server.loadReactor = function( reactor_id , user_id ){ 
					alert( 'load reactor file with id: ' + reactor_id + ' for user: ' + user_id ) ; 
					$http.get( 'users/' + user_id + '/' + reactor_id + '/materials.json?t=' + new Date() ).success( function( data ) {
						//$scope.user = data ;
						console.log( 'YAY: ' +  data ) ;
					});
				} ;

				server.getAvailableTemplates = function( user_id ) {
					alert( 'load reactor file with id: ' + id ) ; 
				} ;

			return server ;
		}
	]) ;

	reactor_services.factory( 'navigationService' , [ 
		function() {
			var navigationService = {} ;

				navigationService.first = function( data ){
					data.navigation.state.position.entry_index = 0 ;
					return true ;
				} ;
				navigationService.last = function( data ) {
					data.navigation.state.position.entry_index = data.entries.length - 1 ;
					return true ;
				} ;

				navigationService.previous = function( data ){ 
					if ( data.navigation.state.position.entry_index - 1 >= 0 ) {
						data.navigation.state.position.entry_index-- ;
						return true ;
					} else {
						return false ;
					}
				} ;
				navigationService.next = function( data ) {
					var next_position = data.navigation.state.position.entry_index + 1 ;
					var last_position = data.entries.length - 1 ;
					if ( next_position <= last_position  ) {
						data.navigation.state.position.entry_index++ ;
						return true ;
					} else {
						return false ;
					}
				} ;

				navigationService.goto = function( data , index ){
					data.navigation.state.position.entry_index = index ;
					alert( 'goto' ) ;
				} ;

			return navigationService ;
		}
	]) ;


