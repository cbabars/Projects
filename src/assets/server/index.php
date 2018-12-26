<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data
$data['success'] = true;
$data['message'] = 'Thank you for sending e-mail.';
echo json_encode($data);