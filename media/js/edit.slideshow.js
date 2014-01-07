
var navigation = new Navigation( 'scroll' ) ;

var interaction_details = {} ;
	interaction_details.type = 'slideshow' ;
	interaction_details.type_title = 'Slideshow' ;
	interaction_details.item_title = 'Slide' ;





function renderEntry() {

	var title_label_el = $( '<label for="title">Title:</label>' ) ;
	var title_input_el = $( '<input name="title" type="text" placeholder="Enter the slide title here..." />' ) ;
	var p_for_title_el = $( '<p></p>' ) ;
		p_for_title_el.append( title_label_el ) ;
		p_for_title_el.append( title_input_el ) ;

	var interaction_details_el = $( '<p>' + interaction_details.item_title + ' <span class="entry_number"></span> of <span class="total_entries_number"></span></p>' ) ;
	var br_el = $( '<br />' ) ;
	var form_el = $( '<form></form>' ) ;
		form_el.append( interaction_details_el ) ;
		form_el.append( p_for_title_el ) ;
		form_el.append( renderImageSelectorElement({}) ) ;
		form_el.append( renderEntryTextContainerElement( { placeholder: interaction_details.item_title } ) ) ;
		form_el.append( br_el ) ;

	var div_el = $( '<div></div>' ) ;
		div_el.append( form_el ) ;

	var entry_el = $( '<li class="entry"></li>' ) ;
		entry_el.append( div_el ) ;

	return entry_el ;

}





function getSaveData() {
	
	var save_data = new ajrSlideShow() ;
		save_data.setAuthor( $('.author').text() ) ;
		save_data.setID( '20131229' ) ;

	$('').trace( 'author:' + save_data.author ) ;
	
	for ( var i = 0 ; i < document.forms.length ; i++ ) {

		var current_form = document.forms[ i ] ;
		
		var ajr_slide = new ajrSlide() ;
			ajr_slide.setTitle( current_form.title.value ) ;
			ajr_slide.setText( current_form.entry_text.value ) ;

		$( 'form:eq(' + i + ') .answer_options > ul > li' ).each( function( index , el ) {

		}) ;

		$().trace( interaction_details.item_title + ' ' + i + ' title: ' + ajr_slide.title[ 0 ] ) ;
		$().trace( interaction_details.item_title + ' ' + i + ' text: ' + ajr_slide.text[ 0 ] ) ;
		//$().trace( interaction_details.item_title + ' ' + i + ' answers.length: ' + ajr_slide.answers.length ) ;

		save_data.addEntry( ajr_slide ) ;

	}

	return save_data ;
	
}