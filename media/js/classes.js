function ajrText( data ) {

	return text = [ data ] ;

}


function ajrImageDetails( data ) {

	this.type = 'image_details' ;
	this.width = 300 ;
	this.height = 300 ;

}


function ajrFeedback( ) {

	this.type = 'feedback' ;
	this.positive = new ajrText( 'Correct!' ) ;
	this.negative = new ajrText( 'Incorrect!' ) ;
	this.neutral = new ajrText() ;

}





function ajrAnswer( data ) {
	
	this.type = 'answer' ;
	this.correct = false ;
	this.text = new ajrText( 'False' ) ;
	this.image = new ajrImageDetails() ;
	this.feedback = new ajrFeedback() ;

	this.setText = function( str ) {
		this.text = new ajrText( str ) ;
	}
	
	this.setCorrect = function( str ) {
		
		if ( str == true || str == false ) {
			this.correct = str ;
		} else if ( str == undefined ) {
			// do nothing //
		} else if ( str.toLowerCase ) {
			if ( str.toLowerCase() == 'true' ) this.correct = true ;		
		}

	}

}







function ajrQuestion( data ) {
	
	this.type = 'question' ;
	this.title = new ajrText( 'This is the quiz title' ) ;
	this.text = new ajrText( 'This is the question' ) ;
	this.image = new ajrImageDetails() ;
	this.feedback = new ajrFeedback() ;
	this.answers = [] ;

	this.setTitle = function( str ) {
		this.title = new ajrText( str ) ;
	}

	this.setText = function( str ) {
		this.text = new ajrText( str ) ;
	}

	this.addAnswer = function( ajr_answer ) { this.answers.push( ajr_answer ) ; }

}








function ajrQuiz( data ) {
	
	this.type = 'quiz' ;
	this.version = '1.0' ;
	this.author = 'notset' ;
	this.id = '1' ;
	this.title = new ajrText( 'This is the quiz title' ) ;
	this.questions = [] ;
	this.addQuestion = function( ajr_question ) { this.questions.push( ajr_question ) ; }
	this.setAuthor = function( str ) { this.author = str }
	this.setID = function( str ) { if ( str != undefined ) this.id = str ; }
}
















function ajrSlide( data ) {
	
	this.type = 'slide' ;
	this.title = new ajrText( '' ) ;
	this.text = new ajrText( '' ) ;
	this.image = new ajrImageDetails() ;
	this.setTitle = function( str ) {
		this.title = new ajrText( str ) ;
	}

	this.setText = function( str ) {
		this.text = new ajrText( str ) ;
	}

	//this.addBullet = function( ajr_answer ) { this.answers.push( ajr_answer ) ; }

}




function ajrSlideShow( data ) {
	
	this.type = 'slideshow' ;
	this.version = '1.0' ;
	this.author = 'notset' ;
	this.id = '1' ;
	this.title = new ajrText( 'This is the slideshow title' ) ;
	this.entries = [] ;
	this.addEntry = function( ajr_slide ) { this.entries.push( ajr_slide ) ; }
	this.setAuthor = function( str ) { this.author = str }
	this.setID = function( str ) { if ( str != undefined ) this.id = str ; }

}







function ajrExposeEntry( data ) {
	
	this.type = 'expose' ;
	this.title = new ajrText( '' ) ;
	this.text = new ajrText( '' ) ;
	this.image = new ajrImageDetails() ;
	this.setTitle = function( str ) {
		this.title = new ajrText( str ) ;
	}

	this.setText = function( str ) {
		this.text = new ajrText( str ) ;
	}

}







function ajrExpose( data ) {
	
	this.type = 'expose' ;
	this.version = '1.0' ;
	this.author = 'notset' ;
	this.id = '1' ;
	this.title = new ajrText( 'This is the exposé title' ) ;
	this.entries = [] ;
	this.addEntry = function( entry ) { this.entries.push( entry ) ; }
	this.setAuthor = function( str ) { this.author = str }
	this.setID = function( str ) { if ( str != undefined ) this.id = str ; }

}
