<?php

	$json = json_decode( file_get_contents("php://input"), true );
	// Access your $json['this']

	//should save to: users/:userID/:reactorID/materials.json
	//should also save to: users/:userID/:reactorID/materials_:timestamp.json
	
	$extension = '.rctr' ;
	$filename = 'materials' . $extension ;
	$backup_filename = 'materials_' . time() . $extension ;

	$u = $json[ 'user' ] ;
	$r = $json[ 'reactor' ] ;

	$user_id = $json[ 'user' ][ 'id' ] ;
	$reactor_id = $json[ 'reactor' ][ 'id' ] ;
	$save_path = '../users/' . $user_id . '/' . $reactor_id . '/' ;
	//$save_path = '../users/' . '00001' . '/' . 'slideshow_01' . '/' ;

	
	if ( !file_exists( $save_path ) ) {
		mkdir( $save_path , 0777, true ) ;
	}

	//$file = $save_path . time() . $extension ;
	$file = $save_path . $filename ;
	$json_data = json_encode( $json[ 'reactor' ] ) ;
	file_put_contents( $file, $json_data ) ;

  
	// then when you are done
	header("Content-type: application/json") ;
	print json_encode( array( "file" => $file , "r" => $reactor_id , "u" => $user_id , "response" => "success" ) ) ;

?>

