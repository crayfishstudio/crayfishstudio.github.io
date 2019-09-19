<?php
require_once('config.php');
$sql = "SELECT * FROM posts WHERE id=".$_GET['id'];
$stmt = $db->query($sql);
$stmt = $stmt->fetch_assoc();
$sql = "SELECT * FROM categories WHERE id=".$stmt['cat_id'];
$cats = $db->query($sql);
$cats = $cats->fetch_assoc();
$id = (int)$_GET['id'];
$next = $id+1;
$prev = $id -1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Article</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="./css/global.css">

    <link rel="stylesheet" href="./css/article.css">
</head>
<body>


    <main class="main wrapper">
        <section class="article">
            <h5 class="article__subtitle"><?php echo $cats['name'];?></h5>

            <div class="article__content col-lg-9">
                <h2 class="article__title"><?php echo $stmt['name'];?></h2>

                <?php echo $stmt['text'];?>

                <div class="article_flex">
                  <?php
                  if($id<2){
                    echo '<a class="article__link" href="article.php?id=' . $next . '">Наступна стаття</a>';
                  }else{
                    echo '<a class="article__link" href="article.php?id=' . $next . '">Наступна стаття</a>';

                    echo '<a class="article__link" href="article.php?id=' . $prev . '">Попередня стаття</a>';
                  }
                  ?>
                    <a class="article__link" href="blog.php">Блог</a
                </div>

            </div>
        </section>
    </main>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
