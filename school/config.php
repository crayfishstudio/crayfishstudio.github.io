<?php
define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define('DBNAME', 'school');
if(!$db=mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME)){
  echo $db->connect_errno. "  " . $db->connect_error;
}
mysqli_set_charset($db, "utf8");
