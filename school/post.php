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
  $main = 0;
  if(isset($_POST["main"])){
    $main = 1;
    $stmt = "UPDATE posts  main_post=0 WHERE main_post=1";
    $db->query($stmt);
  }
  if (($_FILES['imgfile']['name'] != '')) {
          // Where the file is going to be stored
          $target_dir = __DIR__ . "/uploads/";
          $file = $_FILES['imgfile']['name'];
          $path = pathinfo($file);
          $filename = $path['filename'];
          $ext = $path['extension'];
          $temp_name = $_FILES['imgfile']['tmp_name'];
          $path_filename_ext = $target_dir . $filename . '.' . $ext;
          if (file_exists($path_filename_ext)) {
          } else {
              move_uploaded_file($temp_name, $path_filename_ext);
          }
      }
  $sql = "INSERT INTO posts (name, slug, cat_id, text, path, main_post) VALUES ('$name', '$slug', '$cat_id', '$text', '$filename.$ext', '$main')";

    if($db->query($sql)){
    header("Location: admin.php");
  }else{
    echo $db->errno . " " . $db->error;
  }
}else if(isset($_POST["edit"])){
  $id = $_POST['id'];
  $name = $_POST["name"];
  $slug = $_POST['slug'];
  $text = $_POST['textarea'];
  $cat_id = $_POST['categories'];
  $main = 0;
  if(isset($_POST["main"])) {
    $main = 1;
    $stmt = "UPDATE posts  main_post=0 WHERE main_post=1";
    $db->query($stmt);
  }
  $sql = "UPDATE posts SET name='$name', slug='$slug', cat_id='$cat_id', text='$text', main_post='$main'  WHERE id=$id";
  if($db->query($sql)){
  header("Location: admin.php");
}else{
  echo $db->errno . " " . $db->error;
}
}
