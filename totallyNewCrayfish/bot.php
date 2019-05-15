<?php
define ('url',"https://api.telegram.org/bot713508432:AAHv1XghRc6DKweDtWmcOMKaXojZEh2mmfg/");

$name = $_POST['userName'];
$contacts = $_POST['userContact'];

$message = $_POST['message'];

$chat_id = '-309131950';

$message = urlencode("Name: $name\nContacts: $contacts\n$Message : $message");

file_get_contents(url."sendmessage?text=$message&chat_id=$chat_id&parse_mode=HTML");

redirect("thanks.html");
?>