<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@rutetskiy.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name=$_POST['user_name']; 
$company=$_POST['company']; 
$web=$_POST['web']; 
$email=$_POST['user_email'];
$letter=$_POST['letter'];

// Проверяем валидность e-mail 
 


$msg=" 
Заявка на співпрацю

Ім'я контактної особи: $name
Назва компанії та посада: $company
Веб-сайт: $web
Email: $email

Текст листа: $letter
"; 

 // Отправляем письмо админу  
mail("$adminemail", "$date $time Повідомлення 
від $name", "$msg");  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location.replace('http://rutetskiy.com')}; setTimeout('reload()', 0); 
//--></script> 
 

exit; 
?>