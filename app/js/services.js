'use strict';

/* Services */
/**/
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
	
	
	reactor_services.factory( 'modifierService' , [ 

		function() {

			var modifierService = {} ;

				modifierService.add = function( data , new_entry_type ) {

					var new_entry = {} ;

					switch ( new_entry_type ) {

						case 'answer' :

							new_entry = { 
								type: "answer"
								,pretty_type: "Answer"
								,text: { type: "text", pretty_type: "Text", text: "This is the text for answer " + ( data.length + 1 ) , settings: { edit: { editable: true , locked: true , allow_type_change: false } , optional: false , type: "multiple" } ,options: { include: true } 
								}
							} ;

						break ;


						case 'slide' :

							new_entry = { 
								type: "slide",
								pretty_type: "Slide",
								meta: { title: { type: "title", pretty_type: "Title", text: "Slide " + ( data.length + 1 ) , settings: { edit: { editable: true , locked: true , allow_type_change: false } , optional: true , type: "single" } , options: { include: true } } },
								text: { type: "text", pretty_type: "Text", text: "This is the text for slide " + ( data.length + 1 ) , settings: { edit: { editable: true , locked: true , allow_type_change: false } , optional: true , type: "multiple" } ,options: { include: true } 
								}
							} ;

						break ;
						
						case 'question' :							
							
							new_entry = {
								type:"question"
								,pretty_type:"Question"
								,meta:{
									title:{type:"title"
										,pretty_type:"Title"
										,text:"Question " + ( data.length + 1 )
										,settings:{edit:{editable:false,locked:true,allow_type_change:false},optional:false,type:"single"},options:{include:true}}},text:{type:"text",pretty_type:"Text"
								,text:"Enter your question..."
								,settings:{edit:{editable:true,locked:true,allow_type_change:false},optional:false,type:"multiple"},options:{include:true}}
								,images:{entries:[{type:"image",pretty_type:"Image",settings:{edit:{editable:true,locked:true,allow_type_change:false},optional:false},options:{include:true},src:"img\/tree.jpg",dimensions:{type:"dimensions",width:"300",height:"300"},alt:{type:"text",pretty_type:"Text",text:"this is the alt text for this image.",settings:{edit:{editable:true,locked:true,allow_type_change:false},optional:false,type:"single"},options:{include:true}}
								,description:{type:"text",pretty_type:"Text",text:"this is the decription text for this image.",settings:{edit:{editable:true,locked:false,allow_type_change:false},optional:false,type:"multiple"},options:{include:true}}}]}
								,answers:{type:"answers",pretty_type:"Answers",entries:[
									{
										type:"answer"
										,pretty_type:"Answer"
										,text:{
											type:"text"
											,pretty_type:"Text"
											,text: "This is the text for answer 1"
											,settings:
											{
												edit:{
													editable:true
													,locked:true
													,allow_type_change:false
													}
													,optional:false
													,type:"multiple"
											}
											,options:{include:true}
										}
									}
									
									,{
										type:"answer"
										,pretty_type:"Answer"
										,text:{
											type:"text"
											,pretty_type:"Text"
											,text: "This is the text for answer 2"
											,settings: {
												edit:{
													editable:true,
													locked:true,
													allow_type_change:false
												}
												,optional:false
												,type:"multiple"
											}
											,options:{include:true}
										}

									}
								]
							}
							};
							

						break ;			
						
						
					}
	
					data.push( new_entry ) ;
					
					return { success: true , new_position: data.length - 1 } ;

				} ;


				modifierService.remove = function( data , index ) {
					
					if ( data.length > 1 && data.length > index ) { 
						data.splice( index , 1 ) ;
						return true ;
					} else {
						return false 
					}
					
					
				}

			return modifierService ;
		}
	]) ;


	reactor_services.factory( 'creatorService' , [ 

		function() {

			var creatorService = {} ;

				creatorService.prettyUp = function( str ) {
	
					var return_str = str ;
					if ( str && str.length > 1 ) {

						var split_str = str.split( '' ) ;
							split_str[ 0 ] = split_str[ 0 ].toUpperCase() ;

						return_str = split_str.join( '' ) ;

					}

					return return_str ;
					
				}



				creatorService.create = function( details ) {

					var new_obj = { type: details.type , pretty_type: this.prettyUp( details.type ) } ;

					// every object requires options and settings EXCEPT new options or settings objects //
					switch ( details.type ) {

						case 'settings' :	; break ;

						case 'options' : 	; break ;
						
						case 'edit' : 		; break ;
						
						default :
							new_obj.settings = this.create( { type: 'settings' } ) ;
							new_obj.options = this.create( { type: 'options'} ) ;					
						break ;
					}


					// if this object matches any of these switch options, append or modify it according to its type //
					switch ( details.type ) {

						case 'edit' :
							new_obj.editable = true ;
							new_obj.locked = true ;
							new_obj.allow_type_change = false ;
						break ;

						case 'settings' :
							new_obj.edit = this.create( { type: 'edit'} ) ;
						break ;

						case 'options' :
							new_obj.include = true ;
						break ;

						case "text" :
							new_obj.text = "@auto" ;
						break ;

						case "title" :
							new_obj.text = this.create( { type: 'text' } ) ;
						break ;

						case "correct" :
							new_obj.text = this.create( { type: 'text' } ) ;
						break ;
						
						case "incorrect" :
							new_obj.text = this.create( { type: 'text' } ) ;
						break ;
						
						case "feedback" :
							new_obj.correct = this.create( { type: 'incorrect' } ) ;
							new_obj.incorrect = this.create( { type: 'incorrect' } ) ;
						break ;
 
						case 'answer' :
							new_obj.text = this.create( { type: 'text' } ) ;
							new_obj.feedback = this.create( { type: 'feedback' } ) ;
							new_obj.correct = true ;
							new_obj.selected = false ;
						break ;

/*						

						case 'meta' :

							new_obj = { 
								type: "meta"
								,pretty_type: "Meta"
								,title: this.create( { type: 'text'} )
								,title: this.create( { type: 'text'} )
								,title: this.create( { type: 'text'} )
							} ;

						break ;


						case 'slide' :

							new_obj = { 
								type: "slide",
								pretty_type: "Slide",
								meta: { 
									title: { type: "title", pretty_type: "Title", text: "Slide " + ( data.length + 1 ) , settings: { edit: { editable: true , locked: true , allow_type_change: false } , optional: true , type: "single" } , options: { include: true } } },
									text: { type: "text", pretty_type: "Text", text: "This is the text for slide " + ( data.length + 1 ) , settings: { edit: { editable: true , locked: true , allow_type_change: false } , optional: true , type: "multiple" } ,options: { include: true } 
								}
							} ;

						break ;
						
						case 'question' :							
							
							new_obj = {
								type:"question"
								,pretty_type:"Question"
								,meta:{
									title:{type:"title"
										,pretty_type:"Title"
										,text:"Question " + ( data.length + 1 )
										,settings:{edit:{editable:false,locked:true,allow_type_change:false},optional:false,type:"single"},options:{include:true}}},text:{type:"text",pretty_type:"Text"
								,text:"Enter your question..."
								,settings:{edit:{editable:true,locked:true,allow_type_change:false},optional:false,type:"multiple"},options:{include:true}}
								,images:{entries:[{type:"image",pretty_type:"Image",settings:{edit:{editable:true,locked:true,allow_type_change:false},optional:false},options:{include:true},src:"img\/tree.jpg",dimensions:{type:"dimensions",width:"300",height:"300"},alt:{type:"text",pretty_type:"Text",text:"this is the alt text for this image.",settings:{edit:{editable:true,locked:true,allow_type_change:false},optional:false,type:"single"},options:{include:true}}
								,description:{type:"text",pretty_type:"Text",text:"this is the decription text for this image.",settings:{edit:{editable:true,locked:false,allow_type_change:false},optional:false,type:"multiple"},options:{include:true}}}]}
								,answers:{type:"answers",pretty_type:"Answers",entries:[
									{
										type:"answer"
										,pretty_type:"Answer"
										,text:{
											type:"text"
											,pretty_type:"Text"
											,text: "This is the text for answer 1"
											,settings:
											{
												edit:{
													editable:true
													,locked:true
													,allow_type_change:false
													}
													,optional:false
													,type:"multiple"
											}
											,options:{include:true}
										}
									}
									
									,{
										type:"answer"
										,pretty_type:"Answer"
										,text:{
											type:"text"
											,pretty_type:"Text"
											,text: "This is the text for answer 2"
											,settings: {
												edit:{
													editable:true,
													locked:true,
													allow_type_change:false
												}
												,optional:false
												,type:"multiple"
											}
											,options:{include:true}
										}

									}
								]
							}
							};
							

						break ;			
						*/
						
						
						
					}
					
					
	
					return new_obj ;

				} ;

/*
				modifierService.remove = function( data , index ) {
					
					if ( data.length > 1 && data.length > index ) { 
						data.splice( index , 1 ) ;
						return true ;
					} else {
						return false 
					}

					
				}

*/					

			return creatorService ;
		}
	]) ;