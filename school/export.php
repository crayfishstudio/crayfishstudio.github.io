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
$sql = "SELECT * FROM emails";
$sql=$db->query($sql);
if($_GET['export']){
  $timestamp = time();
        $filename = 'Export_excel_' . $timestamp . '.xls';

        header("Content-Type: application/vnd.ms-excel");
        header("Content-Disposition: attachment; filename=\"$filename\"");

        $isPrintHeader = false;
        foreach ($sql as $row) {
            if (! $isPrintHeader) {
                echo implode("\t", array_keys($row)) . "\n";
                $isPrintHeader = true;
            }
            echo implode("\t", array_values($row)) . "\n";
        }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>School</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="./css/global.css">

    <link rel="stylesheet" href="./css/export.css">
</head>

<body>


<main class="main">
    <section class="export">
        <div class="export__header">
            <h5 class="export__title">Загальна кількість користувачів: <span>10</span></h5>
            <a href="export.php?export=true" class="export__button">Експортувати</a>
        </div>

        <table class="export__table table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <?php
                    while($row=$sql->fetch_assoc){
                      echo <<<EOT
                      "<th scope="row">{$row['id']}</th>
                      <td>{$row['email']}</td>"
                      EOT;
                    }
                  ?>
                </tr
            </tbody>
        </table>
    </section>
</main>

</body>

</html>
