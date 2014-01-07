<!doctype html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>New</title>
			<link rel="stylesheet" type="text/css" href="media/css/application.css">

			<?php

				// common to all interaction types //
				echo '<link rel="stylesheet" type="text/css" href="media/css/core.css">' ;
				echo '<link rel="stylesheet" type="text/css" href="media/css/edit.common.css">' ;
				echo '<link rel="stylesheet" type="text/css" href="media/css/edit.interface.css">' ;
				echo '<link rel="stylesheet" type="text/css" href="media/css/navigation.css">' ;
				echo '<link rel="stylesheet" type="text/css" href="media/css/render.css">' ;
		
				switch ( $_GET[ 'type' ] ) {

					case 'expose' :
					echo '<link rel="stylesheet" type="text/css" href="media/css/render.expose.css">' ;
					echo '<link rel="stylesheet" type="text/css" href="media/css/edit.expose.css">' ;
					break ;

					case 'quiz' :
					echo '<link rel="stylesheet" type="text/css" href="media/css/render.quiz.css">' ;
					echo '<link rel="stylesheet" type="text/css" href="media/css/edit.quiz.css">' ;
					break ;

					case 'slideshow' :
					echo '<link rel="stylesheet" type="text/css" href="media/css/render.slideshow.css">' ;
					echo '<link rel="stylesheet" type="text/css" href="media/css/edit.slideshow.css">' ;
					break ;

				}

				echo '<script src="media/js/classes.js"></script>' ;
				echo '<script src="media/jquery/jquery-1.10.2.min.js"></script>' ;
				echo '<script src="media/jquery/jquery.trace.js"></script>' ;
				echo '<script src="media/js/navigation.js"></script>' ;
				echo '<script src="media/js/edit.js"></script>' ;
				echo '<script src="media/js/render.js"></script>' ;

			?>
		</head>


		<!-- data-enable-trace="true" -->
		<body>

			<nav class="global">
				<ul>
					<li><a href="dashboard.php">Dashboard</a></li>
				</ul>
			</nav>
			
			<?php

				switch ( $_GET[ 'type' ] ) {
		
					case 'slideshow' : 
						$str = 'Slide Show' ;
						//echo '<h1>Edit your ' . $str . '</h1>' ;
					break ;	
		
					case 'expose' : 
						$str = 'Exposé' ; 
						//echo '<h1>Create your ' . $str . '</h1>' ;
					break ;
		
					case 'quiz' : 
						$str = 'Quiz' ; 
						//echo '<h1>Create your ' . $str . '</h1>' ;
					break ;
		
				}

			?>

			<?php include ( "php/buildEditor.php" ) ; ?>

			<?php
		
				if ( $_GET[ 'user' ] && $_GET[ 'user' ] != '' ) {

					if ( $_GET[ 'type' ] && $_GET[ 'type' ] != '' ) {

						$user = $_GET[ 'user' ] ;
						$type = $_GET[ 'type' ] ;

						$plural = '' ;

				
						switch ( $type ) {
				
							case 'slideshow' : 
								$str = 'Slide Show' ; 
								$plural	 = 'slides' ;
								$menu_str = getMenuString( 'a Slide' ) ;
								$entry_controls = getEntryControls( $str ) ;
							break ;	
				
							case 'expose' : 
								$str = 'Exposé' ; 
								$plural	 = 'exposés' ;
								$menu_str = getMenuString( 'an item' ) ;
								$entry_controls = getEntryControls( $str ) ;
							break ;
				
							case 'quiz' : 
								$str = 'Quiz' ; 
								$plural	 = 'questions' ;
								$menu_str = getMenuString( 'a question' ) ;
								$entry_controls = getEntryControls( $str ) ;
							break ;
				
						}
						
				
				
						echo $menu_str ;

						echo '<div class="reactor ' . $type . '">' ;	


						echo '	<div class="interaction_meta_data">' ;
						echo '		<div class="interaction_details">' ;
						echo '			<label for="interaction_title">Interaction title:</label> <input name="interaction_title" type="text" placeholder="Enter a title for this ' . strtolower( $str ) . '..." />' ;
						echo '			<label>Author:</label> <span class="author">' . $user . '</span>' ;
						echo '			<label>Type:</label> <span class="type">' . $type . '</span>' ;
						echo '			<label>Created:</label> <span class="created">' . time() . '</span>' ;
						echo '			<label>Modified:</label> <span class="modified">' . time() . '</span>' ;
						echo '			<label>Copyright owner:</label> <span class="copyright">Me, 2014</span>' ;
						echo '			<label>Organisation url:</label> <span class="url"><a href="//voodoomonkey.com.au">voodoomonkey.com.au</a></span>' ;
						echo '		</div>' ;
						echo '		<div class="interaction_options">' ;
 						echo '			<label><input name="randomise_entries" type="checkbox" /> Randomise order of ' . $plural . '</label> ' ;
 						echo '			<br />' ;
 						echo '			<label><input name="display_all_entries" type="checkbox" /> Display all ' . $plural . '</label> ' ;
 						echo '			<br />' ;
 						echo '			<label for="limit_entries_to">' . ucwords( $plural ) . ' to display:</label> <input name="display_all_entries" type="number" />' ;
 						echo '			<br />' ;
 						echo '			<label><input name="display_images_on_small_screens" type="checkbox" />Display all images on small screens:</label> ' ;
 						echo '			<br />' ;
						echo '		</div>' ;
						echo '	</div>' ;



						echo 	'<div class="entries_container">' .
								'	<ul class="entries">' .
								'	</ul>' .
								$entry_controls .
								'</div>' ;
						echo '</div>' ;

						echo $menu_str ;
			
					} else {

						echo "<p>Interaction type not found.</p>" ;

					}
					
				} else {
					
					echo "<p>Unknown user. Please log in.</p>" ;
					
				}
		
			?>


			<nav class="global">
				<ul>
					<li><a href="dashboard.php">Dashboard</a></li>
				</ul>
			</nav>

			<?php
		
				switch ( $_GET[ 'type' ] ) {
					
					case 'quiz' :
					echo '<script src="media/js/edit.quiz.js"></script>' ;
					break ;
					
					case 'slideshow' :
					echo '<script src="media/js/edit.slideshow.js"></script>' ;
					break ;

					case 'expose' :
					echo '<script src="media/js/edit.expose.js"></script>' ;
					break ;

				}
			?>

			<!-- <script src="media/js/reactor_builder.20131227a.js"></script> -->
	
		</body>
	</html>