<?php 
    require_once("../resources/config.php");
    include(TEMPLATE_FRONT . DS . "header.php");
    include(TEMPLATE_FRONT . DS . "nav.php");
?>



    <!-- Page Content -->
    <div class="container">

        
        <header >
            <h1>Shop</h1>
            
            
        </header>

        <hr>

        <!-- /.row -->

        <!-- Page Features -->
        <div class="row text-center">

            <?php getProductsForShop();?>

        </div>

<?php include(TEMPLATE_FRONT . DS . "footer.php");?>
