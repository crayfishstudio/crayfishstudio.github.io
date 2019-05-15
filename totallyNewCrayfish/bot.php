<?php
define ('url',"https://api.telegram.org/bot713508432:AAHv1XghRc6DKweDtWmcOMKaXojZEh2mmfg/");

$name = "";
$contact="";
$message="";
if(isset($_POST['userName'])) {
    $name = $_POST['userName'];
}
if(isset($_POST['userContact'])) {
    $contacts = $_POST['userContact'];
}
if(isset($_POST['message'])) {
    $message = $_POST['message'];
}

$chat_id = '-309131950';

$message = urlencode("Name: $name\nContacts: $contacts\nMessage : $message");

file_get_contents(url."sendmessage?text=$message&chat_id=$chat_id&parse_mode=HTML");
header("Location: thanks.html");
?>