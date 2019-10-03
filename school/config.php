<?php
define('DBHOST', 'osplat.mysql.tools');
define('DBUSER', 'osplat_db');
define('DBPASS', 'WRnZ8nxY');
define('DBNAME', 'osplat_db');
if(!$db=mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME)){
  echo $db->connect_errno. "  " . $db->connect_error;}

$db->set_charset("utf8");

header('Content-Type: text/html; charset=utf-8');