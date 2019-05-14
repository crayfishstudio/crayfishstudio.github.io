<?php

ob_start();


session_start();


defined("DS") ? null : define("DS", DIRECTORY_SEPARATOR); 

defined("TEMPLATE_FRONT") ? null : define("TEMPLATE_FRONT", __DIR__ . DS . "templates". DS . "front"); 
defined("TEMPLATE_FRONT") ? null : define("TEMPLATE_BACK", __DIR__ . DS . "templates". DS . "back"); 

define("DB_HOST", "localhost");

define("DB_USER", "root");

define("DB_PASS", "");

define("DB_NAME", "ecom_db");

$con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

require_once("functions.php");

?>