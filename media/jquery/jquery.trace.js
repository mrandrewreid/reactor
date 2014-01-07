( function( $ ) {
	$.fn.trace = function( msg ) {  

		if ( $( 'body' ).attr( 'data-enable-trace' ) == 'true' ) {
			// if the output div doesn't exist already, create it //
			if ( $( 'body #output' ).length == 0 ) $( 'body' ).append( '<div id="output"></div>' ) ;
	
			// append the message and add a break to make sure the messages are on different lines //
			$( '#output' ).append( '' + msg + '<br />' ) ;
	
			// scroll to the bottom of the output box so you can always see the latest message //
			$( '#output' ).scrollTop( $( '#output' )[ 0 ].scrollHeight ) ;
		}
	} ;
})( jQuery ) ;