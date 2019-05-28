<?php
define ('url',"https://api.telegram.org/bot713508432:AAHv1XghRc6DKweDtWmcOMKaXojZEh2mmfg/");

$companyName = "";
$companyGoods="";
$goodsDescr="";
$companyAuditory="";
$siteObjective="";
$companySocial="";
$siteContent="";
$siteDesign="";
$companyNumbers="";
$companyFeatures="";
$companyAchivements="";
$preferredDesign="";
$preferredColors="";
$goodSites="";
$badSites="";
$userName="";
$userContact="";
$userComment="";
$message="";
if(isset($_POST['userName'])) {
    $userName = $_POST['userName'];
}
if(isset($_POST['userContact'])) {
    $userContact = $_POST['userContact'];
}
if(isset($_POST['userComment'])) {
    $userComment = $_POST['userComment'];
}
if(isset($_POST['companyName'])) {
    $companyName = $_POST['companyName'];
}
if(isset($_POST['companyGoods'])) {
    $companyGoods = $_POST['companyGoods'];
}
if(isset($_POST['goodsDescription'])) {
    $goodsDescr = $_POST['goodsDescription'];
}
if(isset($_POST['companyAuditory'])) {
    $companyAuditory = $_POST['companyAuditory'];
}
if(isset($_POST['siteObjective'])) {
    $siteObjective = $_POST['siteObjective'];
}
if(isset($_POST['companySocial'])) {
    $companySocial = $_POST['companySocial'];
}
if(isset($_POST['siteContent'])) {
    $siteContent = $_POST['siteContent'];
}
if(isset($_POST['siteDesign'])) {
    $siteDesign = $_POST['siteDesign'];
}
if(isset($_POST['companyNumbers'])) {
    $companyNumbers = $_POST['companyNumbers'];
}
if(isset($_POST['companyFeatures'])) {
    $companyFeatures = $_POST['companyFeatures'];
}
if(isset($_POST['companyAchivements'])) {
    $companyAchivements = $_POST['companyAchivements'];
}
if(isset($_POST['preferredDesign'])) {
    $preferredDesign = $_POST['preferredDesign'];
}
if(isset($_POST['preferredColors'])) {
    $preferredColors = $_POST['preferredColors'];
}
if(isset($_POST['goodSites'])) {
    $goodSites = $_POST['goodSites'];
}
if(isset($_POST["badSites"])) {
    $badSites = $_POST["badSites"];
}
$chat_id = '-309131950';

$message = urlencode("Name: $userName\nContacts: $userContact\nUser Comment: $userComment\nCompany Name: $companyName\nCompanyGoods: $companyGoods\n
Goods Description: $goodsDescr\nCompany Auditory: $companyAuditory\nSite Objective: $siteObjective\nCompany Social: $companySocial\n
Site Content: $siteContent\nSite Design: $siteDesign\nCompany Numbers: $companyNumbers \nCompany Features: $companyFeatures\nPreferred Design: $preferredDesign\n
Preferred colors: $preferredColors\nGood Sites: $goodSites\nBad Sites: $badSites");

file_get_contents(url."sendmessage?text=$message&chat_id=$chat_id&parse_mode=HTML");
header("Location: thanks.html");
?>