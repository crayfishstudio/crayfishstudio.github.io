<?php
require_once('config.php');
$sql = "SELECT * FROM posts WHERE id=".$_GET['id'];
$all = "SELECT * FROM posts";
$all = $db->query($all);
$all = $all->fetch_all();
$stmt = $db->query($sql);
$stmt = $stmt->fetch_row();
$sql = "SELECT * FROM categories WHERE id=".$stmt[1];
$cats = $db->query($sql);
$cats = $cats->fetch_assoc();
$id = (int)$_GET['id'];
$current = array_search($stmt, $all);
$end = end($all);
reset($all);

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
                <h2 class="article__title"><?php echo $stmt[2];?></h2>

                <?php echo $stmt[3];?>

                <div class="article_flex">
                  <?php
                  if($all[0][0]==$stmt[0]){
										$next = $all[$current+1][0];
                    echo '<a class="article__link" href="article.php?id=' . $next . '">Наступна стаття</a>';
                  }else if($end[0]==$stmt[0]){
										$prev = $all[$current-1][0];
										echo '<a class="article__link" href="article.php?id=' . $prev . '">Попередня стаття</a>';
									}else{
										$prev = $all[$current-1][0];
										$next = $all[$current+1][0];
										echo '<a class="article__link" href="article.php?id=' . $prev . '">Попередня стаття</a>';
                    echo '<a class="article__link" href="article.php?id=' . $next . '">Наступна стаття</a>';

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
