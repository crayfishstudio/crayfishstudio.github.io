<?php
session_start();
require_once("config.php");
if(isset($_GET['cat'])){
  $sql1="SELECT * FROM posts WHERE cat_id=".$_GET['cat']." ORDER BY date Desc";
}else {
  $sql1="SELECT * FROM posts ORDER BY date desc";
}
$main = "SELECT * FROM posts WHERE main_post=1";
if(!$main=$db->query($main)){

}

$sql = $db->query($sql);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="./css/global.css">

    <link rel="stylesheet" href="./css/blog.css">
</head>
<body>


    <main class="main">
        <section class="wrapper">
            <div class="sub col-md-3">
                <h5 class="sub__title">Отримайте підписку на актуальні статті</h5>

                <form class="sub__msg" action="mail.php" method="POST">
                    <input class="sub__email g-input" type="email" name="email" placeholder="Е-mail" required>

                    <input class="sub__submit g-input g-submit" type="submit" value="Підписатись">
                </form>

                <h5 class="sub__subtitle">РУБРИКИ</h5>

                <ul class="sub-list">
                <?php
                  $sql = "SELECT * FROM categories";
                  $optar = $db->query($sql);
                  while($row = $optar->fetch_assoc()){
                    echo <<<EOT
                    <li class="sub-list__item">
                        <a class="sub-list__link" href="blog.php?cat={$row['id']}">{$row['name']}</a>
                    </li>
                    EOT;
                  }
                ?>


                    <li class="sub-list__item sub-list__item_blue">
                        <a class="sub-list__link sub-list__link_blue" href="blog.php">ВСІ СТАТТІ
                        <img class="sub-list__arrow" src="./img/blog/item-link-arrow.svg" alt="" srcset=""></a>
                    </li>
                </ul>
            </div>

            <div class="blog col-md-9">
              <?php
              $sql = "SELECT * FROM posts WHERE main_post=1";
              if(!$res = $db->query($sql)){
                $sql = "SELECT * FROM posts ORDER BY id desc LIMIT 1";
                $res - $db->query($sql);
              }
              $row = $res->fetch_assoc();
              $sql = "SELECT * FROM categories WHERE id=".$row['cat_id'];
              $cat_row = $db->query($sql);
              $cat_row =$cat_row->fetch_assoc();
              echo <<<EOT
                <div class="blog-header" style="background-image: url(./uploads/{$row['path']});">
                    <a class="blog-header__link" href="./article.php?id={$row['id']}">
                        <h5 class="blog-header__subtitle col-md-4">{$cat_row['name']}</h5>
                      <h3 class="blog-header__title">{$row['name']}</h4>
                    </a>
                </div>
                EOT;
                ?>
                <div class="blog__wrapper">

                    <?php
                    $res = $db->query($sql1);
                    while($row=$res->fetch_assoc()){
                      // code...
                      echo <<<EOT
                      <div class="blog-item ">

                          <div class="blog-item__intro">
                              <img class="blog-item__img" src="./uploads/{$row['path']}" alt="" srcset="">
                          </div>


                          <h4 class="blog-item__title">{$row['name']}</h4>
                          <a class="blog-item__link" href="./blog.php?id={$row['id']}">Читати статтю
                              <img class="blog-item__arrow" src="./img/blog/item-link-arrow.svg" alt="" srcset="">
                          </a>
                      </div>
                      EOT;
                    }

                    ?>
                </div>


            </div>
        </section>
    </main>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
