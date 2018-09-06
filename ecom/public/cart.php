<?php require_once("../resources/config.php"); ?>

<?php
if(isset($_GET['add'])){
    
    $_SESSION['product_' . $_GET['add']] +=1;
    
    
    echo $_SESSION['product_1'];
    
}
    



;?>