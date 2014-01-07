var history = {} ;
	history.versions = [] ;





$( document ).ready( function(e) {

	$('body').trace( 'Hello!' ) ;
	addInterfaceListeners() ;
	add() ;

});





function addInterfaceListeners() {
	
	$( '.menu input[type="button"]' ).on( 'click' , function( e ){
		if ( $( e.target ).hasClass( add_button_class ) ) add() ;
		if ( $( e.target ).hasClass( preview_button_class ) ) save( true ) ;
		if ( $( e.target ).hasClass( save_button_class ) ) save() ;	
		if ( $( e.target ).hasClass( export_button_class ) ) exportReactor() ;	
	}) ;

	$( '.entries_controls input[type="button"]' ).on( 'click' , function( e ){
		if ( $( e.target ).hasClass( first_entry_button_class ) ) navigation.first() ;
		if ( $( e.target ).hasClass( next_entry_button_class ) ) navigation.next() ;
		if ( $( e.target ).hasClass( previous_entry_button_class ) ) navigation.previous() ;
		if ( $( e.target ).hasClass( last_entry_button_class ) ) navigation.last() ;
	}) ;

}





function add() {

	$( '' ).trace( 'Add()' ) ;


	var curr_total_entries = $( '.entry' ).length ;

	var str = renderEntry( { index: curr_total_entries } ) ;

	$( '.entries' ).append( str ) ;

	updateEntries() ;
	
	var total_entries = $( '.entry' ).length ;
	
	$( '.entries_controls ul' ).append( '<li><a>' + total_entries + '</a></li>' ) ;
					
	$( '.entry:last' ).fadeOut( 0 ) ;
	$( '.entry:last' ).fadeIn( 1000 ) ;

	if ( total_entries > 1 ) navigation.goTo( total_entries - 1 ) ;


}






function updateEntries() {
	
	$( '.entry' ).each( function( index , element ) {
		$().trace( index ) ;
		$( this ).find( '.entry_number:first' ).text( index + 1 ) ;
		$( this ).find( '.total_entries_number:first' ).text( $( '.entry' ).length ) ;
	});
	
}




function preview() {

	$( '' ).trace( 'Preview()' ) ;
	window.open( 'preview.php?file=' + history.versions[ history.versions.length - 1 ] + '&type=' + interaction_details.type , 'preview' ) ;

}


function exportReactor() {

	$( '' ).trace( 'export()' ) ;

}


function save( preview_after_save ) {

	$( '' ).trace( 'Save()' ) ;

	var save_data = getSaveData() ;
	var save_data_str = JSON.stringify( save_data ) ;

	$.ajax( {
		url: 'save.php',
		type: 'POST',
		contentType: 'application/json',
		data: save_data_str ,
		dataType: 'json',
		success: function ( data ) {
			if ( data.response == 'success' ) {
				//alert( 'success' ) ;
				$().trace( 'SUCCESS... file: ' + data.file ) ;
				var url = data.file ;
					history.versions.push( url ) ;
				$( 'body' ).append( '<p><a target="_blank" href="preview.php?file=' + data.file + '&type=' + interaction_details.type + '">' + data.file + '</a>' ) ;
				if ( preview_after_save == true ) preview() ;
			} else {
				$().trace( 'sorry there was an error' ) ;
			}
		}
	});

}