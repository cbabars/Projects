<?php
header('Content-type: application/json');
$errors = '';
if(empty($errors))
{
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$from_email = $request->email;
	$message = $request->message;
	$from_name = $request->name;
	$from_mobile = $request->mobileno;
	$to_email = "CADD VENTURES<training@caddventures.com>";
	$content = "<p><strong>Hello</strong></p>
				 <p><strong>Student Enquiry Details</strong></p>
					<p><strong>Name:</strong> $from_name</p>
						<p><strong>Email Address:</strong> $from_email</p>
							<p><strong>Mobile No:</strong> $from_mobile</p>
								<p><strong>Message:</strong> $message</p>
									<p><strong>Thank you</strong></p>";
	$email_subject = "Enquiry for you from Cadd Website";
	$email_body = '<html><body>';
	$email_body .= "$content";
	$email_body .= '</body></html>';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_name < $from_email > \n";
	$headers .= "Reply-To: $from_email";
	mail($to_email,$email_subject,$email_body,$headers);
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
}
?>