<?php
session_start();
require_once("config.php");
// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
if (isset($_GET["logout"])) {


// Unset all of the session variables
    $_SESSION = array();

    // Destroy the session.
    session_destroy();

    // Redirect to login page
    header("location: login.php");
    exit;
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

    <link rel="stylesheet" href="./css/create.css">

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jodit/3.1.39/jodit.min.css">
</head>

<body>


<main class="main">

    <section class="create">
        <form class="create__form" action="">
            <div class="create__block">
                <select class="create__select form-control">
                    <option>Категорія 1</option>
                    <option>Категорія 2</option>
                    <option>Категорія 3</option>
                    <option>Категорія 4</option>
                    <option>Категорія 5</option>
                </select>

                <input class="create__name" type="text" placeholder="name">

                <input class="create__slug" type="text" placeholder="slug">
            </div>

            <textarea name="content" id="editor">

            </textarea>

            <div class="create__btn">
                <input class="g-submit" type="submit" value="Добавити">
                <input class="g-submit" type="submit" value="Редагувати">
            </div>
        </form>

    </section>
</main>

</body>
<script src="//cdnjs.cloudflare.com/ajax/libs/jodit/3.1.39/jodit.min.js"></script>

<script>
var editor = new Jodit("#editor", {
  filebrowser: {
        ajax: {
            url: 'connector/index.php'
        }
    },
  "defaultMode": "1"
});
</script>

</html>
