var navigation = new Navigation( 'scroll' ) ;

var interaction_details = {} ;
	interaction_details.type = 'quiz' ;
	interaction_details.type_title = 'quiz' ;
	interaction_details.item_title = 'Question' ;
























function renderEntry() {

	var title_label_el = $( '<label for="title">Title:</label>' ) ;
	var title_input_el = $( '<input name="title" type="text" placeholder="Enter a title for this ' + interaction_details.item_title.toLowerCase() + '..." />' ) ;
	var p_for_title_el = $( '<p></p>' ) ;
		p_for_title_el.append( title_label_el ) ;
		p_for_title_el.append( title_input_el ) ;

	var interaction_details_el = $( '<p>' + interaction_details.item_title + ' <span class="entry_number"></span> of <span class="total_entries_number"></span></p>' ) ;
	var br_el = $( '<br class="clear_all" />' ) ;
	var form_el = $( '<form></form>' ) ;
		form_el.append( interaction_details_el ) ;
		form_el.append( p_for_title_el ) ;
		form_el.append( '<p><label for="entry_text">' + interaction_details.item_title + ':</label></p>' ) ;
		form_el.append( renderEntryTextContainerElement( { placeholder: 'Enter the text for this ' + interaction_details.item_title.toLowerCase() + ' here...' } ) ) ;
		form_el.append( renderImageSelectorElement( {} ) ) ;
		form_el.append( renderAnswersContainerElement( {} ) ) ;
		form_el.append( br_el ) ;

	var div_el = $( '<div></div>' ) ;
		div_el.append( form_el ) ;

	var entry_el = $( '<li class="entry"></li>' ) ;
		entry_el.append( div_el ) ;

	return entry_el ;

}











function getSaveData() {
	
	var save_data = new ajrQuiz() ;
		save_data.setAuthor( $('.author').text() ) ;
		save_data.setID( '20131228' ) ;

	$('').trace( 'author:' + save_data.author ) ;

	for ( var i = 0 ; i < document.forms.length ; i++ ) {
		var current_form = document.forms[ i ] ;
		
		var ajr_question = new ajrQuestion() ;
			ajr_question.setTitle( current_form.title.value ) ;
			ajr_question.setText( current_form.entry_text.value ) ;

		$( 'form:eq(' + i + ') .answer_options > ul > li' ).each( function( index , el ) {
			
			var answer_text = $( this ).find( '.answer_text_label input' ).val() ;
			var correct_is_checked = $( this ).find( '.correct_option_checkbox_label input' ).attr( 'checked' ) ;
			var correct_val = false ;
			if ( correct_is_checked == 'checked' ) correct_val = true ;

			var ajr_answer = new ajrAnswer() ;
				ajr_answer.setText( answer_text ) ;
				ajr_answer.setCorrect( correct_val ) ;
			
			ajr_question.addAnswer( ajr_answer ) ;

		}) ;

		$().trace( 'question ' + i + ' title: ' + ajr_question.title[ 0 ] ) ;
		$().trace( 'question ' + i + ' text: ' + ajr_question.text[ 0 ] ) ;
		$().trace( 'question ' + i + ' answers.length: ' + ajr_question.answers.length ) ;

		save_data.addQuestion( ajr_question ) ;

	}
	
	return save_data ;
	$( '' ).trace( 'save_data.title: ' + save_data.title[ 0 ] ) ;
	
}

