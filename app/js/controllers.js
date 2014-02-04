'use strict';

/* Controllers */

angular.module( 'reactor.controllers', [] ).

	controller('Dashboard', [ '$scope' , '$http' , function( $scope , $http ) {
	
		$scope.randominium = 10000 + Math.floor( 10000 * Math.random( 1 ) ) ;
		$scope.date = new Date() ;
		$http.get( 'users/00001/user.json' ).success( function( data ) {
			$scope.user = data ;
		});

		$scope.orderProp = 'age' ;
	
	}])

	.controller('MyAccount', [ '$scope' , '$http' , function( $scope , $http ) {
	
		$http.get( 'users/00001/user.json' ).success( function( data ) {
			$scope.user = data ;
		});
	
	}])
	

	.controller(
		'Create'
		,[ 
			'$scope' , 
			'$routeParams' , 
			'$http' , 
			'$location' , 
			'server' , 
			'navigationService',
			'modifierService',
			'creatorService',
			function( $scope , $routeParams , $http , $location , server , navigationService , modifierService , creatorService ) 
		{


		$scope.creatorService = creatorService ;
		$scope.display = {
			output: {
				entries: [ 'mobile' , 'tablet' , 'desktop' , 'projector' , 'hdtv' , 'print' ] ,
				selected: 'desktop'
			},
			orientation: { 
				entries: [ 'portrait' , 'landscape' ] ,
				selected: 'portrait' 
			}
		}



		$scope.reactor_id = $routeParams.new_reactor_id ;
		$scope.title = { text: 'HERE IS A TITLE' , include: true } ;




		$http.get( 'users/00001/user.json' ).success( function( data ) {
			$scope.user = data ;
				
			$scope.reactor.goto = 		function( str ) { 
				//alert( str ) ; 
				switch( str ) {
					case 'first' : 	$scope.first( $scope.reactor ) ; 	break ;
					case 'previous' : 	$scope.previous( $scope.reactor ) ; 	break ;
					case 'next' : 		$scope.next( $scope.reactor ) ; 		break ;
					case 'last' : 		$scope.last( $scope.reactor ) ; 		break ;
				}
			} ;
			
			$scope.reactor.save = 		function() { 
				$scope.server.saveReactor( $scope.reactor , $scope.user ) ;
			} ;
			
			$scope.reactor.export = 		function() { 
				alert( 'export' ) ;
			} ;

			$scope.reactor.changeEditMode = function( bool ) {
				$scope.reactor.state.editing = bool ;
				var numerical_bool = 0 ;
				if ( bool == true ) numerical_bool = 1 ;
				//$location.path('/edit/' + $scope.reactor_id + '/' + numerical_bool );
			}
	
			if ( $routeParams.editing == 0 ) $scope.reactor.changeEditMode( false ) ;
	
			$scope.reactor.add = function( collection , entry_type ) {
				
				var new_entry = $scope.creatorService.create( { type: entry_type } ) ;
				var result = $scope.modifierService.add( collection , new_entry ) ;

				if ( result.success == true ) {
				
					switch ( entry_type ) {
						case 'slide': $scope.navigationService.last( $scope.reactor ) ; break ;
						case 'question': $scope.navigationService.last( $scope.reactor ) ; break ;
						default: break ;
					}
					
				}

			}
	
			$scope.reactor.remove = function( collection , index ) {
	
				var item_to_remove = collection[ index ] ;
				var item_type_in_lower_case = item_to_remove.pretty_type.toLowerCase();
				var carry_on = confirm( 'Are you sure you want to delete this ' + item_type_in_lower_case + '?' ) ;
				if ( carry_on ) {
					$scope.navigationService.previous( $scope.reactor ) ;
					var result = $scope.modifierService.remove( collection , index ) ;
				}
			}
		});

		$scope.reactor = $scope.creatorService.create( { type: $routeParams.new_reactor_type , id: $routeParams.new_reactor_id , reactor: true } ) ;

		$scope.navigationService = navigationService ;
		$scope.server = server ;
		$scope.modifierService = modifierService ;

		$scope.first = 	function() { return navigationService.first( $scope.reactor ) } ;
		$scope.previous = 	function() { return navigationService.previous( $scope.reactor ) } ;
		$scope.next = 		function() { return navigationService.next( $scope.reactor ) } ;
		$scope.last = 		function() { return navigationService.last( $scope.reactor ); } ;





  }])
	
 
	.controller(
		'Edit'
		,[ 
			'$scope' , 
			'$routeParams' , 
			'$http' , 
			'$location' , 
			'server' , 
			'navigationService',
			'modifierService',
			'creatorService',
			function( $scope , $routeParams , $http , $location , server , navigationService , modifierService , creatorService ) 
		{


		$scope.creatorService = creatorService ;

		$scope.display = {
			output: {
				entries: [ 'mobile' , 'tablet' , 'desktop' , 'projector' , 'hdtv' , 'print' ] ,
				selected: 'desktop'
			},
			orientation: { 
				entries: [ 'portrait' , 'landscape' ] ,
				selected: 'portrait' 
			}
		}





		$scope.reactor_id = $routeParams.reactor_id ;
		$scope.title = { text: 'HERE IS A TITLE' , include: true } ;





		$http.get( 'users/00001/user.json' ).success( function( data ) {
			$scope.user = data ;
		});



		$http.get( 'users/00001/' + $routeParams.reactor_id + '/materials.rctr' ).success( function( data ) {

			$scope.navigationService = navigationService ;
			$scope.server = server ;
			$scope.modifierService = modifierService ;

			$scope.reactor = data ;

			$scope.first = 	function() { return navigationService.first( $scope.reactor ) } ;
			$scope.previous = 	function() { return navigationService.previous( $scope.reactor ) } ;
			$scope.next = 		function() { return navigationService.next( $scope.reactor ) } ;
			$scope.last = 		function() { return navigationService.last( $scope.reactor ); } ;

			$scope.reactor.goto = 		function( str ) { 
				//alert( str ) ; 
				switch( str ) {
					case 'first' : 	$scope.first( $scope.reactor ) ; 	break ;
					case 'previous' : 	$scope.previous( $scope.reactor ) ; 	break ;
					case 'next' : 		$scope.next( $scope.reactor ) ; 		break ;
					case 'last' : 		$scope.last( $scope.reactor ) ; 		break ;
				}
			} ;
			
			$scope.reactor.save = 		function() { 
				$scope.server.saveReactor( $scope.reactor , $scope.user ) ;
			} ;
			
			$scope.reactor.export = 		function() { 
				alert( 'export' ) ;
			} ;

			$scope.reactor.changeEditMode = function( bool ) {
				$scope.reactor.state.editing = bool ;
				var numerical_bool = 0 ;
				if ( bool == true ) numerical_bool = 1 ;
				//$location.path('/edit/' + $scope.reactor_id + '/' + numerical_bool );
			}

			if ( $routeParams.editing == 0 ) $scope.reactor.changeEditMode( false ) ;

			//if ( $routeParams.editing == 0 ) { server.saveReactor( '' ) } ;
			//if ( $routeParams.editing == 1 ) { server.loadReactor( '00001' ) } ;

			$scope.reactor.add = function( collection , entry_type ) {
				
				var new_entry = $scope.creatorService.create( { type: entry_type } ) ;
				var result = $scope.modifierService.add( collection , new_entry ) ;

				if ( result.success == true ) {
				
					switch ( entry_type ) {
						case 'slide': $scope.navigationService.last( $scope.reactor ) ; break ;
						case 'question': $scope.navigationService.last( $scope.reactor ) ; break ;
						default: break ;
					}
					
				}

			}

			$scope.reactor.remove = function( collection , index ) {

				var item_to_remove = collection[ index ] ;
				var item_type_in_lower_case = item_to_remove.pretty_type.toLowerCase();
				var carry_on = confirm( 'Are you sure you want to delete this ' + item_type_in_lower_case + '?' ) ;
				if ( carry_on ) {

					$scope.navigationService.previous( $scope.reactor ) ;

					var result = $scope.modifierService.remove( collection , index ) ;
				}
				//if ( result.success == true ) $scope.navigationService.last( $scope.reactor ) ;

			}
	});

  }])








	.controller(
		'Template'
		,[ 
			'$scope' , 
			'$routeParams' , 
			'$http' , 
			'$location' , 
			'server' , 
			'navigationService',
			'modifierService',
			'creatorService',
			function( $scope , $routeParams , $http , $location , server , navigationService , modifierService , creatorService ) 
		{

		$scope.creatorService = creatorService ;

		$scope.display = {
			output: {
				entries: [ 'mobile' , 'tablet' , 'desktop' , 'projector' , 'hdtv' , 'print' ] ,
				selected: 'desktop'
			},
			orientation: { 
				entries: [ 'portrait' , 'landscape' ] ,
				selected: 'portrait' 
			}
		}

		$scope.reactor_id = $routeParams.reactor_id ;
		$scope.title = { text: 'HERE IS A TITLE' , include: true } ;

		$http.get( 'users/00001/user.json' ).success( function( data ) {
			$scope.user = data ;
		});

		$scope.navigationService = navigationService ;
		$scope.server = server ;
		$scope.modifierService = modifierService ;

		$scope.reactor = $scope.creatorService.create( { type: 'reactor_template' , reactor: true } ) ;

		$scope.reactor.add = function( collection , entry_type ) {
			
			var new_entry = $scope.creatorService.create( { type: entry_type } ) ;
			var result = $scope.modifierService.add( collection , new_entry ) ;

			if ( result.success == true ) {
			
				switch ( entry_type ) {
					case 'slide': $scope.navigationService.last( $scope.reactor ) ; break ;
					case 'question': $scope.navigationService.last( $scope.reactor ) ; break ;
					default: break ;
				}
				
			}

		}



		$scope.reactor.remove = function( collection , index ) {

			var item_to_remove = collection[ index ] ;
			var item_type_in_lower_case = item_to_remove.pretty_type.toLowerCase();
			var carry_on = confirm( 'Are you sure you want to delete this ' + item_type_in_lower_case + '?' ) ;
			if ( carry_on ) {

				$scope.navigationService.previous( $scope.reactor ) ;

				var result = $scope.modifierService.remove( collection , index ) ;
			}
			//if ( result.success == true ) $scope.navigationService.last( $scope.reactor ) ;

		}

		//$http.get( 'users/00001/' + $routeParams.reactor_id + '/materials.rctr' ).success( function( data ) {});

  }])














  .controller('MyCtrl1', [ '$scope' , function( $scope ) {

		$scope.title = { 
			text: 'HERE IS A TITLE' , 
			settings: { 
				edit: { editable: true , locked: true } ,
				optional: true 
			} ,
			options: { include: true } ,
		} ;

		$scope.format = 'M/d/yy h:mm:ss a';
				
  }])

	
	
	

  .controller('MyCtrl2', [ '$scope' , function( $scope ) {

  }]);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  		/*
		$scope.reactor = { 
			editable: true ,
			changeEditMode: function( new_val ) {
				this.state.editing = new_val ;
			} ,
	
			state: {
				editing: true ,		
			},
			type: 'slideshow' ,
			pretty_type: 'Slideshow' ,
			child_type: 'slide' ,
			pretty_child_type: 'Slide' , 
			add: function() { 
				this.entries.push( 
					{ 
						type: 'slide' ,
						meta: { 
							title: { text: 'Slide ' + ( this.entries.length + 1 ) , include: true } 
						} , 
						text: 'Enter the text for slide ' + ( this.entries.length + 1 )
					}
				) ;
			},
			meta: {
				title: { text: 'A new slideshow' , include: true } , 
				description: { 
					text: 'Here is a description of this reactor.' , 
					include: true 
				} ,
				author: { first_name: 'Bill' , last_name: 'Bagins' , organisation: '' } ,
				created: 'date created' ,
				modified: 'last date modified' ,
			} ,
			theme: {
				selected: 'grey' ,
				available_themes: [ 'grey' , 'blue' , 'orange' ]
			} ,
			instructions: { 
				text: 'Click all the lovely buttons.' , 
				include: true 
			} ,
			entries: [
					{ 
						type: 'slide' , 
						meta: { 
							title: { text: 'the title of slide 1' , include: true } 
						} ,
						text: 'This is all the text of the slide and it is beautiful.'  
					} ,
					{ 
						type: 'slide' , 
						meta: { 
							title: { text: 'the title of slide 2' , include: true } 
						} ,
						text: 'This is a bunch of text to display as the content of the slide.' 
					}
				],
			navigation: {
				type: 'slide' ,
				state: {
					postion: { entry_index: 0 }  ,
					history: [] 
				} ,
				entry_of_entries: { include: true } ,
				controls: {
						include: true ,
						pagination: {
							include: true ,
							format: 'numerical' ,
						},
						buttons: [
							{
								type: 'button' ,
								subtype: 'first' ,
								include: true ,
								label: 'First' ,
								response: 'first'
							},
							{
								type: 'button' ,
								subtype: 'previous' ,
								include: true ,
								label: 'Previous' ,
								response: 'previous'
							},
							{
								type: 'button' ,
								subtype: 'next' ,
								include: true ,
								label: 'Next' ,
								response: 'next'
							},
							{
								type: 'button' ,
								subtype: 'last' ,
								include: true ,
								label: 'Last' ,
								response: 'last'
							}
						]
					},
				goto: function( new_index ) {
					alert( 'new_index: ' + new_index ) ;
				},
	
				first: function(){ alert('first'); },
				previous: function(){ alert('previous'); },
				next: function(){ alert('next'); },
				last: function(){ alert('last'); },
			}
		}*/