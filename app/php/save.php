<?php

	$json = json_decode(file_get_contents("php://input"), true);
	// Access your $json['this']

	//should save to: users/:userID/:reactorID/materials.json
	//should also save to: users/:userID/:reactorID/materials_:timestamp.json
	
	$extension = '.rctr' ;
	$filename = 'materials' . $extension ;
	$backup_filename = 'materials_' . time() . $extension ;


	$interaction_author = $json[ 'author' ] ;
	$interaction_id = $json[ 'id' ] ;
	$interaction_path = 'users/' . $interaction_author . '/' . $interaction_id . '/data/' ;

	
	if ( !file_exists( $interaction_path ) ) {
		mkdir( $interaction_path , 0777, true ) ;
	}

	$file = $interaction_path . time() . $extension ;
	$json_data = json_encode( $json ) ;
	file_put_contents( $file, $json_data ) ;

  
	// then when you are done
	header("Content-type: application/json") ;
	print json_encode( array( "file" => $file , "response" => "success" ) ) ;

?>

