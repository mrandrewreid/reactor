'use strict';

/* Controllers */

angular.module( 'reactor.controllers', [] ).

  controller('Dashboard', [ '$scope' , function( $scope ) {

	$scope.reactors = [
		{type:'expose', title:'Exposé'},
		{type:'slideshow', title:'Slideshow'},
		{type:'quiz',title:'Quiz'}
	] ;
	$scope.orderProp = 'age' ;

  }])
 
  .controller('Edit', [ '$scope' , function( $scope ) {
	$scope.reactor = { 
		editable: true ,
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
							response: 'goto first'
						},
						{
							type: 'button' ,
							subtype: 'previous' ,
							include: true ,
							label: 'Previous' ,
							response: 'goto previous'
						},
						{
							type: 'button' ,
							subtype: 'next' ,
							include: true ,
							label: 'Next' ,
							response: 'goto next'
						},
						{
							type: 'button' ,
							subtype: 'last' ,
							include: true ,
							label: 'Last' ,
							response: 'goto last'
						}
					]
				},

			first: function(){ alert('first'); },
			previous: function(){ alert('previous'); },
			next: function(){ alert('next'); },
			last: function(){ alert('last'); },
		}
		} ;
  }])

  .controller('MyCtrl1', [ '$scope' , function( $scope ) {

  }])

  .controller('MyCtrl2', [ '$scope' , function( $scope ) {

  }]);