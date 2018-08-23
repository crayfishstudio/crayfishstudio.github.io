<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@uaim-smo.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name=strip_tags($_POST['user_name']); 
$phone=strip_tags($_POST['user_phone']); 
$email=strip_tags($_POST['user_email']);

// Проверяем валидность e-mail 
 


$msg=" 
Ім'я: $name
Телефон: $phone 
E-mail: $email
"; 

 // Отправляем письмо админу  
mail($adminemail, "$date $time Повідомлення від $name", $msg);
mail("lybomyrdakh@gmail.com", "My Subject", "Line 1\nLine 2\nLine 3");
 
// Выводим сообщение пользователю 
 
echo '
    Дякуємо за підписку! Тепер ви можете <a class="btn no-rounds bg-turquoise btn-text green-hower" href="http://uaim-smo.com">Повернутись на головну</a>
';
exit;
?>