<?php
session_start();
require_once("config.php");
$email = $_POST['email'];
$sql = "INSERT INTO emails email VALUES $email";
$db->query($sql);
header("Location : blog.php");
