var add_button_class = 'add_button' ;
var preview_button_class = 'preview_button' ;
var save_button_class = 'save_button' ;
var export_button_class = 'export_button' ;

var first_entry_button_class = 'first_entry_button' ;
var previous_entry_button_class = 'previous_entry_button' ;
var next_entry_button_class = 'next_entry_button' ;
var last_entry_button_class = 'last_entry_button' ;


function Navigation( navigation_type ) {

	$().trace( 'navigation_type: ' + navigation_type ) ;

	var navigation = {} ;
		navigation.type = navigation_type ; 
		navigation.current_entry = -1 ;
	
		navigation.previous = function() {
			this.goTo( this.current_entry - 1 ) ;
			$().trace( 'previous' ) ;
		} ;

		navigation.next = function() {
			this.goTo( this.current_entry + 1 ) ;
			$().trace( 'next' ) ;
		} ;
		
		navigation.first = function() {
			this.goTo( 0 ) ;
			$().trace( 'first' ) ;
		} ;
		
		navigation.last = function() {
			var total_entries = this.getTotalNavigationItems() ;
			var last_position = total_entries - 1 ;
			this.goTo( last_position ) ;
			$().trace( 'last' ) ;
		} ;

		navigation.getTotalNavigationItems = function() {
			var total_entries = $( '.entry' ).length ;
			return total_entries ;
		}


		navigation.goTo = function( index ) {

			var total_entries = this.getTotalNavigationItems() ;

			if ( index >= 0 ) {

				if ( total_entries > 1 ) {
					
					if ( index < total_entries ) {
					
						switch( navigation.type ) {
							
							case 'scroll' :
								var entry_width = $( '.entry' ).first().outerWidth( true ) ;
								var scroll_to = entry_width * index ;
								$( ".entries" ).animate( { scrollLeft: scroll_to + "px" } , 1000 , 'linear' ) ;
							break ;

							case 'expose' :

							if ( navigation.current_entry >= 0 ) {
									$( '.entry' ).eq( navigation.current_entry ).find( '.content' ).fadeOut( 250 , 'linear' , function() {
										//$( '.entry' ).eq( index ).css( 'z-index' , $( '.entry' ).length + 1 ) ;	
										$( '.entry' ).eq( index ).find( '.content' ).fadeIn( 250 ) ;	
									}) ;

								} else {

									$( '.content' ).fadeOut( 0 , function(){
										$( '.entry' ).eq( index ).find( '.content' ).fadeIn( 250 ) ;
									} ) ;

								}

							break ;
							
							default :
								alert( 'what type of navigation is this? type = ' + navigation.type ) ;
							break ;
							
						}
						
						// update current position with what we know is a valid position //
						navigation.current_entry = index ;

					} else {
						
						var requested_nav_item = index + 1 ;
						$().trace( 'Cannot navigate to entry index: ' + index + ' (navigation item ' + requested_nav_item + '). No such entry exists.' ) ;
					
					}

				} else {
	
					// where the hell are we trying to navigate to? There's only one bloody entry!
					$().trace( 'There is only 1 entry. Navigation is not enabled.') ;
			
				}

			} else {

				$().trace( 'cannot navigate to ' + index + '. no such entry exists. ') ;

			}
		}
	
	// add the pagination listeners //
	$( document.body).on( 'click' , '.pagination a' , function( e ){

		var index_of = $( e.target ).parent().index() ;
		navigation.goTo( index_of ) ;
		
	}) ;


	return navigation ;
}

