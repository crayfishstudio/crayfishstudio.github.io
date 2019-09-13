<?php
define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define('DBNAME', 'school');
$db = mysqli_connect(DBHOST, DBUSER, DBPASS,DBNAME);
mysqli_set_charset($db, "utf8");
//XYy767
