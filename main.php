<?php 

$name  = $_POST['name'];
$email = $_POST['email'];
$subjects = $_POST['subject'];
$textarea = $_POST['textarea'];

$to = "udhaya30@gmail.com";
$subject = "$subjects";
$txt = "name = ". $name . "\r\nEmail = ". $email . "\r\nmessage : ". $textarea;
$headers = "from: noreply@codeconia.com";
if($email != null){
    mail($to,$subject,$txt,$headers);
}
header("location:thankyou.html");
?>