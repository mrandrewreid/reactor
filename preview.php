<!doctype html>

	<html>

		<head>

			<meta charset="UTF-8">
			<title>Preview</title>

			<link rel="stylesheet" type="text/css" href="media/css/core.css">
			<link rel="stylesheet" type="text/css" href="media/css/render.css">

			<script src="media/js/navigation.js"></script>
		
			<?php

				switch ( $_GET[ 'type' ] ) {

					case 'expose' :
					echo '<link rel="stylesheet" type="text/css" href="media/css/render.expose.css">' ;
					break ;

					case 'quiz' :
					echo '<script src="media/js/render.quiz.js"></script>' ;
					echo '<link rel="stylesheet" type="text/css" href="media/css/render.quiz.css">' ;
					break ;

					case 'slideshow' :
					echo '<link rel="stylesheet" type="text/css" href="media/css/render.slideshow.css">' ;
					break ;

				}

				echo '<script src="media/jquery/jquery-1.10.2.min.js"></script>' ;
				echo '<script src="media/jquery/jquery.trace.js"></script>' ;

			?>

			<link rel="stylesheet" type="text/css" href="media/css/navigation.css">
			<script src="media/js/render.js"></script>

		</head>
		
		<body>

			<p class="filename"><?php echo '<a href="' . $_GET['file'] . '">' . $_GET['file'] . '</a>' ?></p>
			

		</body>
	
	
		<script>
		
			$( document ).ready(function(e) {
				
				$.getJSON( '<?php echo $_GET['file'] ; ?>' , render ) ;

				
			});



		</script>
	
	</html>
