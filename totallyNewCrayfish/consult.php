<?php
define ('url',"https://api.telegram.org/bot713508432:AAHv1XghRc6DKweDtWmcOMKaXojZEh2mmfg/");

$name = "";
$contact="";
if(isset($_POST['consultName'])) {
    $name = $_POST['consultName'];
}
if(isset($_POST['consultContact'])) {
    $contacts = $_POST['consultContact'];
}

$chat_id = '-309131950';

$message = urlencode("Consult lead:\nName: $name\nContacts: $contacts");

file_get_contents(url."sendmessage?text=$message&chat_id=$chat_id&parse_mode=HTML");
header("Location: thanks.html");
?>