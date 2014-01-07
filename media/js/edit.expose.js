
var navigation = new Navigation( 'expose' ) ;

var interaction_details = {} ;
	interaction_details.type = 'expose' ;
	interaction_details.type_title = 'Exposé' ;
	interaction_details.item_title = 'Exposé item' ;











function renderEntry( data ) {
	
	var title_label_el = $( '<label for="title">Title:</label>' ) ;
	var title_input_el = $( '<input name="title" type="text" placeholder="input text here..." />' ) ;
	var p_for_title_el = $( '<p></p>' ) ;
		p_for_title_el.append( title_label_el ) ;
		p_for_title_el.append( title_input_el ) ;

	var interaction_details_el = $( '<p>' + interaction_details.item_title + ' <span class="entry_number"></span> of <span class="total_entries_number"></span></p>' ) ;

	var br_el = $( '<br />' ) ;

	var form_el = $( '<form></form>' ) ;
		form_el.append( interaction_details_el ) ;
		form_el.append( p_for_title_el ) ;
		form_el.append( renderImageSelectorElement( {} ) ) ;
		form_el.append( renderEntryTextContainerElement( {} ) ) ;
		form_el.append( br_el ) ;

	var div_el = renderItemElement( {} ) ;
		div_el.append( form_el ) ;
	

	var reveal_tab = renderRevealTabElement() ;

	var entry_el = $( '<li class="entry"></li>' ) ;
		entry_el.append( reveal_tab ) ;
		entry_el.append( div_el ) ;

	// position the reveal_tab //
	var left_pos = reveal_tab.css( 'left' ) ;
	var left_as_px = parseInt( left_pos ) ;
	var tab_left_margin = ( ( ( left_as_px * 2 ) + reveal_tab.outerWidth() ) * data.index ) ;
		reveal_tab.css( 'left' , tab_left_margin + 'px' ) ;

	return entry_el ;

}





function getSaveData() {
	
	var save_data = new ajrExpose() ;
		save_data.setAuthor( $('.author').text() ) ;
		save_data.setID( '20131229' ) ;

	$('').trace( 'author:' + save_data.author ) ;
	
	for ( var i = 0 ; i < document.forms.length ; i++ ) {

		var current_form = document.forms[ i ] ;
		
		var ajr_entry = new ajrExposeEntry() ;
			ajr_entry.setTitle( current_form.title.value ) ;
			ajr_entry.setText( current_form.entry_text.value ) ;

		$( 'form:eq(' + i + ') .answer_options > ul > li' ).each( function( index , el ) {
			
		}) ;

		save_data.addEntry( ajr_entry ) ;

	}

	return save_data ;
	
}