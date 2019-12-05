<? 
// ----------------------------конфигурация-------------------------- // 
 
$to="info@winmed.com.ua";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
 
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$email=$_POST['email'];
$phone=$_POST['phoneNumber']; 
$feedback=$_POST['message'];

$msg=" 
Ім'я: $firstName
Прізвище: $lastName
E-mail: $email
Телефон: $phone 
Коментар: $feedback
"; 

mail($to, $date, $time, $msg);  


print "<script language='Javascript'><!-- 
function reload() {location.replace('./thanks.html')}; setTimeout('reload()', 0); 
//--></script>"
?>