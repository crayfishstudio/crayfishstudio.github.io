<?
$adminemail="advokatgabrev@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name=$_POST['user_name']; 
$phone=$_POST['user_contact']; 
$feedback=$_POST['user_question'];

// Проверяем валидность e-mail 
 


$msg=" 
Имя: $name
Контакт: $phone 
Вопрос: $feedback
"; 

 // Отправляем письмо админу  
mail("$adminemail", "$date $time", "$msg");  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location.replace('https://advokat-gabriev.com.ua/thanks.html')}; setTimeout('reload()', 0); 
//--></script>   
exit; "
?>