<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="your@mail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
// Принимаем данные с формы 
 
$name=$_POST['user_name']; 
$phone=$_POST['user_phone']; 
$email=$_POST['user_email'];

// Проверяем валидность e-mail 
 


$msg=" 
Ім'я: $name
Телефон: $phone 
E-mail: $email
"; 

 // Отправляем письмо админу  
mail("$adminemail", "$date $time Повідомлення від $name", "$msg");  
 
// Выводим сообщение пользователю 
 
echo "
    <button class="btn no-rounds bg-turquoise btn-text green-hower" href="index.html">Повернутись на головну</button>
";
exit;
?>