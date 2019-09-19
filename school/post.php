<?php
session_start();
require_once("config.php");
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
if(isset($_GET["logout"])) {


// Unset all of the session variables
    $_SESSION = array();

// Destroy the session.
    session_destroy();

// Redirect to login page
    header("location: login.php");
    exit;
}
$name="";
$slug="";
$text="";
$cat_id="";

if(isset($_POST["add"])){
  $name = $_POST["name"];
  $slug = $_POST['slug'];
  $text = $_POST['textarea'];
  $cat_id = $_POST['categories'];
  $main = false;
  if(isset($POST["main_post"])) {
    $main = true;
    $stmt = "UPDATE posts  main_post=0 WHERE main_post=1";
    $db->query($stmt);
  }
  $sql = "INSERT INTO posts (name, slug, cat_id, text, main_post) VALUES ('$name', '$slug', '$cat_id', '$text', '$main')";
  try{
    $db->query($sql);
    header("Location: admin.php");
  }catch(exception $e){
    echo $e->getMessage();
  }
}else if(isset($_POST["edit"])){
  $name = $_POST["name"];
  $slug = $_POST['slug'];
  $text = $_POST['textarea'];
  $cat_id = $_POST['categories'];
  $main = false;
  if(isset($POST["main_post"])) {
    $main = true;
    $stmt = "UPDATE posts  main_post=0 WHERE main_post=1";
    $db->query($stmt);
  }
  $sql = "UPDATE posts (name, slug, cat_id, text, main_post) VALUES ('$name', '$slug', '$cat_id', '$text', '$main')";
  try{
    $db->query($sql);
    header("Location: admin.php");
  }catch(exception $e){
    echo $e->getMessage();
  }
}
