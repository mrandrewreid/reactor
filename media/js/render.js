var navigation ;








function render( data ) {

	//alert( 'render now ' + renderInteraction ) ;
	$( document.body).on( 'click' , '.entries_controls input[type="button"]' , function( e ){

		if ( $( e.target ).hasClass( first_entry_button_class ) ) navigation.first() ;
		if ( $( e.target ).hasClass( next_entry_button_class ) ) navigation.next() ;
		if ( $( e.target ).hasClass( previous_entry_button_class ) ) navigation.previous() ;
		if ( $( e.target ).hasClass( last_entry_button_class ) ) navigation.last() ;
		
	}) ;


	renderInteraction( data ) ;
	navigation.first() ;

}





function renderInteraction( data ) {

	//$().trace( 'interaction.type: ' + data.type ) ;
	switch( data.type ) {
		
		case 'expose' : 
			navigation = new Navigation( 'expose' ) ;
			$().trace( 'This is an EXPOSE' ) ;
		break ;

		case 'quiz' : 
			navigation = new Navigation( 'scroll' ) ;
			$().trace( 'This is a QUIZ' ) ;
		break ;
		
		case 'slideshow' : 
			navigation = new Navigation( 'scroll' ) ;
			$().trace( 'This is a SLIDESHOW' ) ;
		break ;


		default: 
			$().trace( 'hey, cannot make a ' + data.type + ', mate. i do not have the info on how to do it yet.' ) ;
		break ;
	}

	var interaction_el = renderInteractionElement( data ) ;	
	$( 'body' ).append( interaction_el ) ;


}






function renderInteractionElement( data ) {

	var interaction_el = $( '<div class="reactor ' + data.type + '"></div>' ) ;

	switch( data.type ) {

		case 'expose' : 		interaction_el.append( renderEntriesContainerElement( data.entries ) ) ; 		break ;
		case 'quiz' : 			interaction_el.append( renderEntriesContainerElement( data.questions ) ) ; 	break ;
		case 'slideshow' : 	interaction_el.append( renderEntriesContainerElement( data.entries ) ) ; 		break ;
		default : 				$().trace( 'what is a ' + data.type ) ; 											break ;

	}


	if ( data.title && data.title != '' && data.title != null ) {
		var heading_el = $( '<h1 class="interaction_title"></h1>' ) ;
			heading_el.append( data.title ) ;
		interaction_el.prepend( heading_el ) ;
	}

	return interaction_el ;

}






function renderImageElement( data ) {
	var image_el = $( '<div class="image" style="width:' + data.width + 'px; height: ' + data.height + 'px;"></div>' ) ;
	return image_el ;
}

function renderHeroImageElement( data ) {
	var image_el = $( '<div class="hero"><div class="image" style="width:' + data.width + 'px; height: ' + data.height + 'px;"></div></div>' ) ;
	return image_el ;
}


function renderTextElement( data ) {

	var text_el = $( '<span class="text"></span>' ) ;
		text_el.append( data ) ;

	return text_el ;
}










function renderNavigationButton( type ) {

	var button_class ;
	var value ;

	switch( type ) {
		
		case 'first' : 
			button_class = 'first_entry_button' ;
			value = '|&lt;' ;
		break ;	
		
		case 'previous' : 
			button_class = 'previous_entry_button' ;
			value = '&lt;' ;
		break ;	
		
		case 'next' : 
			button_class = 'next_entry_button' ;
			value = '&gt;' ;
		break ;	
		
		case 'last' : 
			button_class = 'last_entry_button' ;
			value = '&gt;|' ;
		break ;	
		
	}

	var button_el = $( '<input type="button" class="' + button_class + '" value="' + value + '" />' ) ;
	
	return button_el ;
}


function renderPaginationElement( data ) {

	var pagination_controls_el = $( '<ul class="pagination"></ul>' ) ;

	for ( var i = 0 ; i < data.length ; i++ ) {
		
		var display_index = i + 1 ;
		var label = display_index ;
		var curr = data[ i ] ;
			curr.pagination_label = label ;
		var curr_pagination_item_el = renderPagintationItemElement( curr ) ;
		
		pagination_controls_el.append( curr_pagination_item_el ) ;

	}

	return pagination_controls_el ;
}




function renderPagintationItemElement( data ) {

	var a_el = $( '<a>' + data.pagination_label + '</a>' ) ;
	var item_el = $( '<li></li>' ) ;
		item_el.append( a_el ) ;

	return item_el ;

}


// renderSlidesElement //
function renderEntriesContainerElement( data ) {


	var entries_container_el = $( '<div class="entries_container"></div>' ) ;

	var first_button_el = renderNavigationButton( 'first' ) ;
	var previous_button_el = renderNavigationButton( 'previous' ) ;
	var next_button_el = renderNavigationButton( 'next' ) ;
	var last_button_el = renderNavigationButton( 'last' ) ;

	var entries_controls_el = $( '<div class="entries_controls"></div>' ) ;


	// add the pagination //
	var pagination_el = renderPaginationElement( data ) ;
	entries_controls_el.append( pagination_el ) ;


	// add the nav buttons //
	entries_controls_el.append( first_button_el ) ;
	entries_controls_el.append( previous_button_el ) ;
	entries_controls_el.append( next_button_el ) ;
	entries_controls_el.append( last_button_el ) ;




	var entries_el = $( '<ul class="entries"></ul>' ) ;

	for ( var i = 0 ; i < data.length ; i++ ) {

		var i_to_display = i + 1 ;
		var entry_el = renderEntryElement( data[ i ] ) ;

		entries_el.append( entry_el ) ;
	}

	entries_container_el.append( entries_el ) ;
	entries_container_el.append( entries_controls_el ) ;

	return entries_container_el ;
}






function renderEntryElement( data ) {

	var entry_el = $( '<div class="entry"></div>' ) ;
	var entry_inner_div = $( '<div></div>' ) ;
	//$().trace( 'making us an entry (' + data.type + ')' ) ;

	switch( data.type ) {

		case 'expose' :
	
			var content_el = $( '<div class="content"></div>' ) ;

			var text_container_div_el = $( '<div class="text_container"></div>' ) ; 
				text_container_div_el.append( renderTextElement( data.text[ 0 ] ) ) ;

			content_el.append( renderHeroImageElement( data.image ) ) ;
			content_el.append( text_container_div_el ) ;
		
			if ( data.title && data.title != '' && data.title != null ) {

				var heading_el = $( '<h1 class="slide_title"></h1>' ) ;
					heading_el.append( data.title ) ;
					content_el.prepend( heading_el ) ;

			}

			entry_inner_div.append( content_el ) ;
			$().trace( 'making us an expose( ' + data.type + ')' + entry_el ) ;

		break ;	

		case 'question' :

			var text_container_div_el = $( '<div class="text_container"></div>' ) ; 
				text_container_div_el.append( renderTextElement( data.text[ 0 ] ) ) ;

			entry_inner_div.append( text_container_div_el )
			entry_inner_div.append( renderHeroImageElement( data.image ) ) ;
			entry_inner_div.append( renderAnswersElement( data.answers ) ) ;
			entry_inner_div.append( '<br class="clear_all" />' ) ;

			if ( data.title && data.title != '' && data.title != null ) {
				var heading_el = $( '<h1 class="quiz_title"></h1>' ) ;
					heading_el.append( data.title ) ;
					entry_inner_div.prepend( heading_el ) ;
			}

			$().trace( 'making us a question( ' + data.type + ')' + entry_el ) ;

		break ;	
		
		case 'slide' :
			var text_container_div_el = $( '<div class="text_container"></div>' ) ; 
				text_container_div_el.append( renderTextElement( data.text[ 0 ] ) ) ;

			var image_el = renderHeroImageElement( data.image ) ; 

			entry_inner_div.append( image_el ) ;
			entry_inner_div.append( text_container_div_el ) ;
		
			if ( data.title && data.title != '' && data.title != null ) {
				var heading_el = $( '<h1 class="slide_title"></h1>' ) ;
					heading_el.append( data.title ) ;
					entry_inner_div.prepend( heading_el ) ;
			}

			//alert( 'image_el.innerHeight(): ' + image_el.innerHeight() ) ;
			//$( text_container_div_el ).innerHeight( image_el.innerHeight() ) ;

		break ;	

		default : $().trace( 'ummm. What is a ' + data.type + '?' ) ; break ;

	}

	entry_el.append( entry_inner_div ) ;

	return entry_el ;
	
}





function renderItemElement( data ) {

	return $( '<div class="item content"></div>' ) ;

}



function renderRevealTabElement( data ) {

	return $( '	<div class="reveal_tab"></div>' ) ;

}











function renderEntryTextContainerElement( data ) {

	var entry_text_container_el = $( '<div class="entry_text_container" style="padding:0px;"></div>' ) ;
		entry_text_container_el.append( generateEntryTextElement( data ) ) ;
	return entry_text_container_el ;

}




function generateEntryTextElement( data ) {
	return $( '<textarea name="entry_text" class="entry_text" placeholder="' + data.placeholder + '"></textarea>' ) ;
}




function renderImageSelectorElement( data ) {
	
	var image_selector_el = $( '<div class="image_selector"></div>' )
		image_selector_el.append( renderImageSelectorLabel() ) ;
		image_selector_el.append( renderImagePlaceholderElement() ) ;
		image_selector_el.append( renderImageSelectorControlsElement( {} )  ) ;

	return image_selector_el ;

}


function renderImagePlaceholderElement( data ) {
	return $( '<div class="image_placeholder"></div>' ) ;
}

function renderImageSelectorControlsElement( data ) {
	return $( '<div class="image_selector_controls"></div>' ) ;
}

function renderImageSelectorLabel( data ) {
	return $( '<label for="image_selector">Related image:</label>' ) ;
}



function renderAnswersContainerElement( data ) {
	
	var str_arr = [] ;
		str_arr.push( '			<div class="answer_options_container">' ) ;
		str_arr.push( '				<div class="answer_options_controls">' ) ;
		str_arr.push( '					<input type="button" value="add an answer option" />' ) ;
		str_arr.push( '					<label>Randomise<input type="checkbox" checked="true" /></label>' ) ;
		str_arr.push( '				</div>' ) ;
		str_arr.push( '				<div class="answer_options">' ) ;
		str_arr.push( '					<ul>' ) ;
		str_arr.push( '						<li><label class="answer_text_label"><input type="text" value="answer a" placeholder="Enter your answer text here..." /></label><label class="correct_option_checkbox_label">Correct <input type="checkbox" checked="true" /></label></li>' ) ;
		str_arr.push( '						<li><label class="answer_text_label"><input type="text" value="answer b" placeholder="Enter your answer text here..." /></label><label class="correct_option_checkbox_label">Correct <input type="checkbox" /></label></li>' ) ;
		str_arr.push( '					</ul>' ) ;
		str_arr.push( '				</div>' ) ;
		str_arr.push( '			</div>' ) ;
		
	return $( str_arr.join('') ) ;
	
}