<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require_once('PHPMailer.php');
require_once('Exception.php');
require_once('OAuth.php');
require_once('POP3.php');
require_once('SMTP.php');
$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data
	$request = file_get_contents("php://input");
	$postdata = json_decode($request);
// validate the variables ======================================================
	if (empty($postdata->name))
		$errors['name'] = 'Name is required.';
	if (empty($postdata->email))
		$errors['email'] = 'E-mail is required.';
	if (empty($postdata->message))
		$errors['message'] = 'Message is required.';
// return a response ===========================================================
	// response if there are errors
	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['data'] = $postdata;
		$data['success'] = false;
		$data['errors']  = $errors;
		
	} else {
		$mail = new PHPMailer(); // create a new object
		$mail->IsSMTP(); // enable SMTP
		$mail->SMTPAuth = true; // authentication enabled
		// $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
		$mail->Host = "localhost";
		$mail->Port = 25; // or 587
		$mail->IsHTML(true);
		$mail->Username = "fpnukaek"; //Email that you setup
        $mail->Password = "ne9w):93DTXI7t"; // Password
        $mail->From = $postdata->email;
        $mail->FromName = $postdata->name;
		$mail->Subject = "Y-Web Contact mail from " . $postdata->name . ", e-mail: " .$postdata->email. "";
		$mail->Body = $postdata->message;
		$mail->AddAddress("training@caddventures.com", 'CADD VENTURES'); //Pass the e-mail that you setup
		 if(!$mail->Send()) {
				echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
			$data['success'] = true;
			$data['message'] = 'Thank you for sending e-mail.';
		}
	}
	echo json_encode($data);