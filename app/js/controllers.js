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
		type: 'slideshow' , 
		meta: {
			title: 'A new slideshow' , 
			description: 'Here is a description of this reactor.' ,
			author: { first_name: 'Bill' , last_name: 'Bagins' , organisation: '' } ,
			modified: 'This is a description of this reactor.' ,
		} ,
		entries: [
				{ 
					type: 'slide' , 
					meta: { title: 'the title of slide 1' } ,
					text: 'This is all the text of the slide and it is beautiful.'  
				} ,
				{ 
					type: 'slide' , 
					meta: { title: 'the title of slide 2' },
					text: 'This is a bunch of text to display as the content of the slide.' 
				}
			]
		} ;
  }])

  .controller('MyCtrl1', [ '$scope' , function( $scope ) {

  }])

  .controller('MyCtrl2', [ '$scope' , function( $scope ) {

  }]);