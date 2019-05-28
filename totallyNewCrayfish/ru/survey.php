<?php
define ('url',"https://api.telegram.org/bot713508432:AAHv1XghRc6DKweDtWmcOMKaXojZEh2mmfg/");

$siteType = "";
$branding = "";
$branch = "";
$prices = "";
$days = "";
$userName="";
$userContact="";
$userComment="";

if(isset($_POST['userName'])) {
    $userName = $_POST['userName'];
}
if(isset($_POST['userContact'])) {
    $userContact = $_POST['userContact'];
}
if(isset($_POST['userComment'])) {
    $userComment = $_POST['userComment'];
}
if(isset($_POST['site-type'])) {
    $siteType = $_POST['site-type'];
}
if(isset($_POST['branding'])) {
    $branding = $_POST['branding'];
}
if(isset($_POST['branch'])) {
    $branch = $_POST['branch'];
}
if(isset($_POST['prices'])) {
    $prices = $_POST['prices'];
}
if(isset($_POST['days'])) {
    $days = $_POST['days'];
}

$chat_id = '-309131950';

$message = urlencode("Survey result:\n\nSite type: $siteType\nBranding: $branding\nBranch: $branch\nPrices: $prices\nDays: $days\n\nName: $userName\nContacts: $userContact\nUser Comment: $userComment");

file_get_contents(url."sendmessage?text=$message&chat_id=$chat_id&parse_mode=HTML");
header("Location: thanks.html");
?>