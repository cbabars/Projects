<?php
require_once (".:/usr/lib/php:/usr/local/lib/php");
require_once ("PHPMailer\class.phpmailer.php");
$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data
// validate the variables ======================================================
	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';
	if (empty($_POST['email']))
		$errors['email'] = 'E-mail is required.';
	if (empty($_POST['message']))
		$errors['message'] = 'Message is required.';
// return a response ===========================================================
	// response if there are errors
	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
		
	} else {
		$mail = new PHPMailer(); // create a new object
		$mail->IsSMTP(); // enable SMTP
		$mail->SMTPAuth = true; // authentication enabled
		$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
		$mail->Host = "localhost";
		$mail->Port = 25; // or 587
		$mail->IsHTML(true);
		$mail->Username = "fpnukaek"; //Email that you setup
        $mail->Password = "ne9w):93DTXI7t"; // Password
        $mail->From = $_POST['email'];
        $mail->FromName = $_POST['name'];
		$mail->Subject = "Y-Web Contact mail from " . $_POST['name'] . ", e-mail: " .$_POST['email']. "";
		$mail->Body = $_POST['message'];
		$mail->AddAddress("training@caddventures.com", 'CADD VENTURES'); //Pass the e-mail that you setup
		 if(!$mail->Send())
		    {
		    		echo "Mailer Error: " . $mail->ErrorInfo;
		    }
		    else
		    {
		    	$data['success'] = true;
	    		$data['message'] = 'Thank you for sending e-mail.';
		    }
		
	}
	echo json_encode($data);