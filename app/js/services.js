'use strict';

/* Services */

var reactor_services = angular.module( 'reactor.services', [] ) ;
	reactor_services.factory( 'server' , [ '$http' , '$resource' ,
		function( $http , $resource ) {
			var server = {} ;

				server.saveReactor = function( reactor_data , user_data ) { 
					//alert( 'save reactor file with id: ' + reactor_data.id + ' for user: ' + user_data.id ) ;
					//var send_data = { u: '00001' , r: 'slideshow_01' , reactor: reactor_data , user_id: user_data.id } ;
					var call = {
						url: 'php/save.php' ,
						method: 'POST' ,
						params: { u: '00001' , r: 'slideshow_01' }
					}; 
					//$http( call ).success( function( data ) {
						//console.log( 'YAY: ' +  JSON.stringify( data ) ) ;
					//	reactor_data.meta.description.text = data ;
					//});
					
					$http.post( 'php/save.php' , { reactor: reactor_data , user: user_data } ).success( function( data ) {
						//console.log( 'YAY: ' +  JSON.stringify( data ) ) ;
						//reactor_data.meta.description.text = data ;
						if ( !reactor_data.meta.version ) { reactor_data.meta.version = 1 ; } else { reactor_data.meta.version++ }
					});
					
					
					
					/*$http.get( 'php/save.php' , send_data ).success( function( data ) {
						//console.log( 'YAY: ' +  JSON.stringify( data ) ) ;
						reactor_data.meta.description.text = data ;
					});*/
					
					
					// this is supposed to be written differently if i want it to be a restful architecture //
					// but i just want it to work for now //
					/*
					$http.get( 'users/' + user_data.id + '/' + reactor_data.id + '/materials.json' ).success( function( data ) {
						//$scope.user = data ;
						console.log( 'YAY: ' +  JSON.stringify( data ) ) ;
					});*/
				} ;

				server.loadReactor = function( reactor_id , user_id ){ 
					alert( 'load reactor file with id: ' + reactor_id + ' for user: ' + user_id ) ; 
					$http.get( 'users/' + user_id + '/' + reactor_id + '/materials.json' ).success( function( data ) {
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


