<?php







	function buildEditor( $type , $user ) {
	
		echo '<div class="reactor ' . $type . '">' ;

		switch ( $type ) {

			case 'slideshow' : 
				$str = 'Slide Show' ; 
				$menu_str = getMenuString( 'a Slide' ) ;
				$entry_controls = getEntryControls( $str ) ;
			break ;	

			case 'expose' : 
				$str = 'Exposé' ; 
				$menu_str = getMenuString( 'an item' ) ;
				$entry_controls = getEntryControls( $str ) ;
			break ;

			case 'quiz' : 
				$str = 'Quiz' ; 
				$menu_str = getMenuString( 'a question' ) ;
				$entry_controls = getEntryControls( $str ) ;
			break ;

		}
		


		echo $menu_str ;

		echo '	<div class="interaction_details">' ;
		echo '		<p>Author: <span class="author">' . $user . '</span></p>' ;
		echo '		<p>Type: <span class="type">' . $type . '</span></p>' ;
		echo '		<p>Created: <span class="created">' . time() . '</span></p>' ;
		echo '		<p>Modified: <span class="modified">' . time() . '</span></p>' ;
		echo '		<p>Copyright owner: <span class="copyright">Me, 2014</span></p>' ;
		echo '		<p>Organisation url: <span class="url"><a href="//voodoomonkey.com.au">voodoomonkey.com.au</a></span></p>' ;
		echo '	</div>' ;

		echo '	<p class="interaction_title"><label for="interaction_title">Interaction title: </label><input name="interaction_title" type="text" /></p>' ;

		echo 	'<div class="entries_container">' .
				'	<ul class="entries">' .
				'	</ul>' .
				$entry_controls .
				'</div>' ;
		echo $menu_str ;

		

		echo '</div>' ;

	}














	function getMenuString( $type_str ) {

		$return_str = '<div class="menu">' .
			'	<input type="button" class="add_button" value="Add ' . $type_str . '" />' .
			'	<input type="button" class="preview_button" value="Preview output" />' .
			'	<input type="button" class="save_button" value="Save" />' .
			'	<input type="button" class="export_button" value="Export" />' .
			'</div>' ;

		return $return_str ;

	}




	function getEntryControls( $type_str ) {

		$return_str = '' ;
		$return_str = '<div class="entries_controls">' .
			'	<ul class="pagination"></ul>' .
			'	<input type="button" class="first_entry_button" value="|&lt; First" />' .
			'	<input type="button" class="previous_entry_button" value="&lt; Previous" />' .
			'	<input type="button" class="next_entry_button" value="Next &gt;" />' .
			'	<input type="button" class="last_entry_button" value="last &gt;|" />' .
			'</div>' ;
		return $return_str ;

	}


















?>