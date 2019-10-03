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
        <form class="create__form" action="post.php" method="post" enctype="multipart/form-data">
            <div class="create__block">
                <select class="create__select form-control" name="categories">
                  <?php
                    $sql = "SELECT * FROM categories";
                    $optar = $db->query($sql);
                    while($row = $optar->fetch_assoc()){
                      echo "<option value = ".$row['id'].">".$row["name"]."</option>";
                    }
                  ?>
                </select>

                <input class="create__name" type="text" name="name" placeholder="name">

                <input class="create__slug" type="text" name="slug" placeholder="slug">
            </div>

            <div>
                <textarea class="create__textarea" name="textarea" id="" placeholder="text"></textarea>
            </div>
            <div >
                <label for="#imgfile">Додати прев'ю</label>
                <input type="file" id="imgfile" name="imgfile" >
            </div>
            <div >
                <input type="checkbox" value="1" name="main"> Встановити як основний <br>
            </div>

            <div class="create__btn">
                <input class="g-submit" type="submit" name="add" value="Додати">
            </div>
        </form>

    </section>
</main>

</body>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/codemirror.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.25.0/mode/xml/xml.min.js"></script>
<script src='https://cdn.tiny.cloud/1/64hppx111ucresct5oxmg1gjisu33n7wx10tq3wodr9cu3br/tinymce/5/tinymce.min.js' referrerpolicy="origin"></script>
<!-- Include Editor JS files. -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@2.9.6/js/froala_editor.pkgd.min.js"></script>

<!-- Initialize the editor. -->
<script>
  // $(function() {
  //   $('textarea').froalaEditor({
  //     // Set the image upload URL.
  //     imageUploadURL: 'image_upload.php',
  //     imageUploadParams: {
  //       path: 'uploads/'
  //     },
  //     imageManagerLoadURL: 'image_load.php',
  //     imageManagerLoadParams: {
  //       path: 'uploads/'
  //     },
  //     imageManagerLoadMethod: 'POST',
  //     imageManagerDeleteURL: 'image_delete.php',
  //   })
  // });
  tinymce.init({
      selector: 'Textarea',
      plugins: 'image code',
      toolbar: 'undo redo | image code',

      // without images_upload_url set, Upload tab won't show up
      images_upload_url: 'img_upload.php',

      // override default upload handler to simulate successful upload
      images_upload_handler: function (blobInfo, success, failure) {
          var xhr, formData;

          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open('POST', 'img_upload.php');

          xhr.onload = function() {
              var json;

              if (xhr.status != 200) {
                  failure('HTTP Error: ' + xhr.status);
                  return;
              }

              json = JSON.parse(xhr.responseText);

              if (!json || typeof json.location != 'string') {
                  failure('Invalid JSON: ' + xhr.responseText);
                  return;
              }

              success(json.location);
          };

          formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());

          xhr.send(formData);
      },
  });
</script>

<?php

// Include the editor SDK.
// require 'froala-php/lib/FroalaEditor.php';
//
// // Store the image.
// try {
//     $response = FroalaEditor_Image::upload('/uploads/');
//     echo stripslashes(json_encode($response));
// } catch (Exception $e) {
//     http_response_code(404);
// }

?>
</html>