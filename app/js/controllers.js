'use strict';

/* Controllers */

angular.module( 'reactor.controllers', [] ).

  controller('Dashboard', [ '$scope' , '$http' , function( $scope , $http ) {

	$http.get('users/00001/user.json').success( function( data ) {
		$scope.user = data ;
	});
	$scope.orderProp = 'age' ;

  }])
 
	.controller('Edit', [ '$scope' , '$routeParams' , '$http' , '$location' , function( $scope , $routeParams , $http , $location ) {
	
		$scope.reactor_id = $routeParams.reactor_id ;
		$scope.title = { text: 'HERE IS A TITLE' , include: true } ;

		
		$scope.changeEditMode = function( bool ) {
			$scope.reactor.state.editing = bool ;
			var numerical_bool = 0 ;
			if ( bool == true ) numerical_bool = 1 ;
			//$location.path('/edit/' + $scope.reactor_id + '/' + numerical_bool );
		}

		$http.get( 'users/00001/slideshow_01/materials.json' ).success( function( data ) {
			$scope.reactor = data ;
			if ( $routeParams.editing == 0 ) $scope.changeEditMode( false ) ;
			$scope.reactor.add = function() {
				var new_entry = { 
						type: "slide",
						meta: {
							title: {
								type: "title",
								pretty_type: "Title", 
								text: "Slide " + ( $scope.reactor.entries.length + 1 ) , 
								settings: { 
									edit: { 
										editable: true , 
										locked: true , 
										allow_type_change: false 
									} , 
									optional: true , 
									type: "single" 
								} ,
								options: { include: true } 
							}
						},
						text: {
							type: "text",
							pretty_type: "Text", 
							text: "This is the text for slide " + ( $scope.reactor.entries.length + 1 ) , 
							settings: { 
								edit: { editable: true , locked: true , allow_type_change: false } , 
								optional: true , 
								type: "multiple" 
							} ,
							options: { include: true } 
						}
						
					} ;
					$scope.reactor.entries.push( new_entry ) ;
		}
	});

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