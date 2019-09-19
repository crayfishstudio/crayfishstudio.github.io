<?php
// Get src.
$src = getcwd() . $_POST["src"];

// delete image
unlink($src);
 ?>
