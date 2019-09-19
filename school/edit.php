<?php
session_start();
require_once("config.php");
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: adminlog.php");
    exit;
}
if(isset($_GET["logout"])) {


// Unset all of the session variables
    $_SESSION = array();

// Destroy the session.
    session_destroy();

// Redirect to login page
    header("location: adminlog.php");
    exit;
}
$id = $_GET['id'];
$sql = "SELECT * FROM posts WHERE id = $id";
if(!$stmt=$db->query($sql)){
  header("Lcation : admin.php");
}else {
  $row=$stmt->fetch_assoc();
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

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.css">

<!-- Include Editor style. -->
    <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.6/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/froala-editor@2.9.6/css/froala_style.min.css" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" href="./css/global.css">

    <link rel="stylesheet" href="./css/create.css">
</head>

<body>


<main class="main">

    <section class="create">
        <form class="create__form" action="post.php" method="post">
            <div class="create__block">
                <select class="create__select form-control" name="categories">
                  <?php
                    $sql1 = "SELECT * FROM categories";
                    $optar = $db->query($sql1);
                    while($row1 = $optar->fetch_assoc()){
                      if($row1['id']==$row['cat_id']){
                        echo "<option value = ".$row1['id']." selected>".$row1["name"]."</option>";
                      }else {
                        echo "<option value = ".$row1['id'].">".$row1["name"]."</option>";
                      }
                    }
                  ?>
                </select>
                <?php
                  echo <<<EOT
                  <input class="create__name" type="text" name="name" placeholder="name" value="{$row['name']}">

                  <input class="create__slug" type="text" name="slug" placeholder="slug" value="{$row['slug']}">
                  </div>

                  <div>
                    <textarea class="create__textarea" name="textarea" id="" placeholder="text"></textarea>
                  </div>

                  <div >
                    <input type="checkbox" name="main"> Встановити як основний <br>
                    </div>
                  EOT;
                ?>
            <div class="create__btn">
                <input class="g-submit" type="submit" name="edit" value="Редагувати">
            </div>
        </form>

    </section>
</main>

</body>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js"></script>

<!-- Include Editor JS files. -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.6/js/froala_editor.pkgd.min.js"></script>

<!-- Initialize the editor. -->
<script>
$(function() {
  $('textarea').froalaEditor({
    // Set the image upload URL.
    imageUploadURL: 'image_upload.php',
    imageUploadParams: {
      path: 'uploads/'
    },
    imageManagerLoadURL: 'image_load.php',
    imageManagerLoadParams: {
      path: 'uploads/'
    },
    imageManagerLoadMethod: 'POST',
    imageManagerDeleteURL: 'image_delete.php',
  });
  $('textarea').froalaEditor('html.set', '<?php echo $row['text']?>');
});


</script>

<?php

// Include the editor SDK.
require 'froala-php/lib/FroalaEditor.php';

// Store the image.
try {
    $response = FroalaEditor_Image::upload('/uploads/');
    echo stripslashes(json_encode($response));
} catch (Exception $e) {
    http_response_code(404);
}

?>
</html>
