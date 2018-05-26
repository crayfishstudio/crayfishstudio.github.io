<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@rutetskiy.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name=$_POST['user_name']; 
$phone=$_POST['user_phone']; 

// Проверяем валидность e-mail 
 


$msg=" 
Ім'я: $name
Телефон: $phone 
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