<?php
require_once("config.php");
header("Content-Type: application/json; charset=UTF-8");
$obj = $_GET["id"];

$stmt = $db->prepare("SELECT * FROM posts WHERE id=?");
$stmt->bind_param("i", $obj);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
