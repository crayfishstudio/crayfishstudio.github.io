<?
$adminemail="advokatkamburov.com.ua@gmail.com";
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 

$name=$_POST['user_name']; 
$phone=$_POST['user_contact']; 
$feedback=$_POST['user_question'];

$msg=" 
Имя: $name
Контакт: $phone 
Вопрос: $feedback
"; 

mail("$adminemail", "$date $time", "$msg");  

print "<script language='Javascript'><!-- 
function reload() {location.replace('https://advokat-kamburov.com.ua/thanks.html')}; setTimeout('reload()', 0); 
//--></script>   
exit; "
?>