<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="cyberinertix@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name = $_POST['name'];
$email = $_POST['email'];
$generation = $_POST['generationId'];


// Проверяем валидность e-mail 
 


$msg=" 
Name: $name
Email: $email
Generation: $generation
"; 




// Отправляем письмо админу  
mail("$adminemail", "cyberinertix.com | $date $time", "$msg");  



$headers = "From: " . $adminemail . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
// $headers .= "CC: cyberinertix@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$message = "
<b> Good choise! </b>
Press for <a href='https://facebook.com/groups/1705700912898000'>confirmation and visit our community.</a>
";

mail("$email","cyberinertix",$message,$headers);
 
?>

<script language="JavaScript" type="text/javascript">
    window.location.href = "http://cyberinertix.com/thanks.html";
</script>