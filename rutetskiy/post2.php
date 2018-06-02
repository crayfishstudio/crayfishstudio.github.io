<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@rutetskiy.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name=$_POST['user_name'];
$sname=$_POST['user_sname'];
$phone=$_POST['user_phone']; 
$email=$_POST['user_email']; 
$town=$_POST['town']; 
$number=$_POST['number']; 
$feedback=$_POST['feedback']; 
$pname=$_POST['pname']; 


// Проверяем валидность e-mail 
 


$msg=" 
Ім'я: $name
Прізвище: $sname
E-mail: $email
Телефон: $phone 
Місто: $town 
Номер складу Нової пошти: $number
Коментар: $feedback
Назва картини: $pname
"; 

 // Отправляем письмо админу  
mail("$adminemail", "$date $time Повідомлення від $name", "$msg");  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location.replace('http://rutetskiy.com')}; setTimeout('reload()', 6000); 
//--></script> 
 
$msg 
 
<p>Повідомлення відправленно, скоро тут буде щось цікавіше (або ні)...</p>";  
exit; 
?>