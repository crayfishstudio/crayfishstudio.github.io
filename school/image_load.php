<?php
// Array of image objects to return.
$response = array();

// Image types.
$image_types = array(
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/x-png"
    );

// Filenames in the uploads folder.
$path = $_POST['path'];

$fnames = scandir($path);

// Check if folder exists.
if ($fnames) {
    // Go through all the filenames in the folder.
    foreach ($fnames as $name) {
        // Filename must not be a folder.
        if (!is_dir($name)) {
            // Check if file is an image.
            if (in_array(mime_content_type(getcwd() . '/' . $path . $name), $image_types)) {
                // Build the image.
                $img = new StdClass;
                $img->url = $_POST['path'] . $name;
                $img->thumb = $_POST['path'] . $name;
                $img->name = $name;

                // Add to the array of image.
                array_push($response, $img);
            }
        }
    }
}

// Folder does not exist, respond with a JSON to throw error.
else {
    $response = new StdClass;
    $response->error = "Images folder does not exist!";
}

$response = json_encode($response);

// Send response.
echo stripslashes($response);
