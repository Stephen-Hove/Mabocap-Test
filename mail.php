<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$subject= $_POST['subject'];
$comment= $_POST['text'];
$to = "admin@mabocap.co.za";

$txt ="Name = ". $name . "\r\n  Email = " . $email ."\r\n Subject =" . $subject . "\r\n Message =" . $message;
$headers = "From: info@mabocap.co.za" . "\r\n" .
"CC: ;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>