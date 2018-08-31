<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="info@uaim-smo.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$company=strip_tags($_POST['company']); 
$phone=strip_tags($_POST['phoneNumber']); 
$email=strip_tags($_POST['mail']);

// Проверяем валидность e-mail 
 


$msg="
Заявка на партнерство:
Компанія: $company
Телефон: $phone 
E-mail: $email
"; 

 // Отправляем письмо админу  
mail($adminemail, "$date $time Повідомлення від $company", $msg);s
 
// Выводим сообщение пользователю 
 
echo '
    Дякуємо за підписку! Тепер ви можете <a class="btn no-rounds bg-turquoise btn-text green-hower" href="http://uaim-smo.com">Повернутись на головну</a>
';
exit;
?>