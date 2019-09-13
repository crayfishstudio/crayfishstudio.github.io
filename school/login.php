<?php
session_start();
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: admin.php");
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

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="./css/global.css">

    <link rel="stylesheet" href="./css/login.css">
</head>

<body>


<main class="main">
    <section class="login">
        <div class="login__wrapper">
            <div class="login__picture">
                <img class="login__img" src="./img/school-logo.svg" alt="" srcset="">
            </div>
            <form class="login__form" action="auth.php" method="post">
                <input class="login__name g-input" type="text" name="username" placeholder="Логін">
                <input class="login__password g-input" type="password" name="password" id="" placeholder="Пароль">
                <input class="login__submit g-input g-submit" type="submit" name="login_user" value="ВХІД">
            </form>

        </div>
    </section>
</main>

</body>

</html>
