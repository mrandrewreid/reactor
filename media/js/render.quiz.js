function renderAnswerElement( data ) {

	var answer_el = $( '<div class="answer"></div>' ) ;
	var label_el = $( '<label />' ) ;
		label_el.append( '<input type="checkbox" placeholder="' + data.placeholder + '" />' ) ;
		label_el.append( renderTextElement( data.text[ 0 ] ) ) ;
		answer_el.append( label_el ) ;
		//answer_el.append( '<p>Correct: ' + data.correct + '</p>' ) ;

	return answer_el ;

}


// renderAnswersElement //
function renderAnswersElement( data ) {

	var answers_el = $( '<ul class="answers"></ul>' ) ;

		for ( var i = 0 ; i < data.length ; i++ ) {

			var current_answer = data[ i ] ;
			var answer_el_content = renderAnswerElement( current_answer ) ;
			var li_el = $( '<li></li>' ).append( answer_el_content ) ; 
			var answer_el = $( li_el ) ;

			answers_el.append( answer_el ) ;

		}

	return answers_el ;

}