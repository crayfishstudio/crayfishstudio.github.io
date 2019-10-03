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

$cats = array("Процес навчання",
"Оцінювання в школі",
"Законодавча база",
"Новини з життя школи",
"Наші ідеї",
"В що ми віримо",
"Чому саме школа");



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

    <link rel="stylesheet" href="./css/admin.css">
</head>

<body>


<main class="main">
    <section class="admin">
        <a href="./admin.php?logout=true" class="btn btn-light" style="" type="submit" value="">Вихід</a>
        <a href="./create.php" class="btn btn-light" style="" type="submit" value="Додати">Додати</a>

        <table class="admin__table table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Slug</th>
                <th scope="col">Date</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                  <?php
                    $sql = "SELECT * FROM posts ORDER BY id desc";
                    if(!$stmt = $db->query($sql)){
                      echo $db->errno . "  " . $db->error;
                    }else {
                      // code
                    while($row = $stmt->fetch_assoc()){
                      echo <<<EOT
                      <tr>
                      <th scope="row">{$row["id"]}</th>
                      <td>{$row['name']}</td>
                      <td>{$cats[($row['cat_id']-1)]}</td>
                      <td>{$row['slug']}</td>
                      <td>{$row['date']}</td>
                      <td class="admin_flex">
                          <a class="admin__link" href="./article.php?id={$row['id']}">
                              <img src="./img/admin/link-solid.svg" alt="" srcset="">
                          </a>

                          <a class="admin__link" href="./edit.php?id={$row['id']}">
                              <img src="./img/admin/edit-regular.svg" alt="" srcset="">
                          </a>

                          <a class="admin__link" href="./delete.php?id={$row['id']}">
                              <img src="./img/admin/plus-solid.svg" alt="" srcset="">
                          </a>
                      </td>
                      </tr>
                      EOT;
                    }
                  }
                   ?>
            </tbody>
        </table>
    </section>
</main>

</body>

</html>