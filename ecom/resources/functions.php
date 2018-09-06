<?php


function redirect($location){
    header("Location: $location");
}

function query($sql){
    global $con;
    $result =mysqli_query($con, $sql) or die("Query failed because " . mysqli_error($con));
    return $result;
}


function escape_string($string){
    global $con;
    return mysqli_real_escape_string($con, $string);
}


/*************************************FRONT END************************/

//get products

function getProducts(){
    
    $query = query("SELECT * FROM products");
    
    
    while($row=mysqli_fetch_array($query)){
        
        
        $product=<<<DELIMETR
            <div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                    <a target="_blank" href="item.php?id={$row['product_id']}"><img src="{$row['product_image']}" alt=""></a>
                    <div class="caption">
                        <h4 class="pull-right">\${$row['product_price']}</h4>
                        <h4><a href="item.php?id={$row['product_id']}">{$row['product_title']}</a>
                        </h4>
                        <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.
                        </p><a class="btn btn-primary" href="cart.php?add={$row['product_id']}">Add to Cart</a>
                    </div>

                </div>
            </div>
DELIMETR;
        
        echo $product;
    }
}


function getCategories(){
        
    
    $query = query("SELECT * FROM categories");    
        
    
    while($row=mysqli_fetch_array($query)){
        $category_links = <<<DELIMETR
        <a href="category.php?id={$row['cat_id']}" class="list-group-item">{$row['cat_title']}</a>
DELIMETR;
        echo $category_links;
    }
        
}


function getProductsForCategories(){
    
    $query = query("SELECT * FROM products WHERE product_category_id='{$_GET['id']}'");
    
    
    while($row=mysqli_fetch_array($query)){
        
        
        $product=<<<DELIMETR
            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="{$row['product_image']}" alt="">
                    <div class="caption">
                        <h3>{$row['product_title']}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>
                            <a href="#" class="btn btn-primary">Buy Now!</a> <a href="item.php?id={$row['product_id']}" class="btn btn-default">More Info</a>
                        </p>
                    </div>
                </div>
            </div>
DELIMETR;
        
        echo $product;
    }
}





function getProductsForShop(){
    
    $query = query("SELECT * FROM products");
    
    
    while($row=mysqli_fetch_array($query)){
        
        
        $product=<<<DELIMETR
            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="{$row['product_image']}" alt="">
                    <div class="caption">
                        <h3>{$row['product_title']}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>
                            <a href="#" class="btn btn-primary">Buy Now!</a> <a href="item.php?id={$row['product_id']}" class="btn btn-default">More Info</a>
                        </p>
                    </div>
                </div>
            </div>
DELIMETR;
        
        echo $product;
    }
}

function setMessage($msg){
    if(!empty($msg)){
        $_SESSION['message'] = $msg;
    }else{
        $msg = "";
    }
}


function displayMessage(){
    if(isset($_SESSION['message'])){
        echo $_SESSION['message'];
        unset($_SESSION['message']);
    }
}

function loginUser(){
    if(isset($_POST['submit'])){
        $username = $_POST['username'];
        $pass = $_POST['password'];
        $query = query("SELECT * FROM users WHERE user_name='$username' AND user_pass = '$pass'");
        
        if(mysqli_num_rows($query)==0){
            setMessage("Your pass or login is wrong");
            redirect("login.php");
        }else{
            redirect("admin");
        }
        
    }
}


function sendMessage(){
    if(isset($_POST['submit'])){
        
        $to= "someEmail";
            
            
        $name=$_POST['name'];
        $email=$_POST['email'];
        $subject=$_POST['subject'];
        $msg=$_POST['message'];
        
        $headers="From: $name $email";
        
        
        $result = mail($to, $subject, $msg, $headers);
        
        if(!$result){
            //redirect("contact.php");
            echo "EROR";
        }else{
            echo "Sent";
        }
    }
}

/**********************************BACK END****************************************/



?>