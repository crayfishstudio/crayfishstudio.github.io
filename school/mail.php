<?php
session_start();
require_once("config.php");
$email = $_POST['email'];
$sql = "INSERT INTO emails (email) VALUEs ('$email')";
if($db->query($sql)){
header("Location: blog.php");
}else {
  echo $db->errno . " ". $db->error;
}
