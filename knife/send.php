<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="cyberinertix@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
  // На какую страничку переходит после отправки письма 
 
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
mail("$adminemail", "$date $time Нова заявка з cyberinertix.com", "$msg");  
 
// Выводим сообщение пользователю 
 
// print "<script language='Javascript'><!-- 
// function reload() {location.replace('https://cyberinertix.com/popup.html')}; setTimeout('reload()', 0); 
// //--></script>";  
// exit; 
?>

<script language="JavaScript" type="text/javascript">
function afterSendForm(){
  alert('Thanks, we will connect with you in the near future');
  window.location.href = "http://cyberinertix.com/";
  console.log('afterSendForm')
  }
  window.setTimeout("afterSendForm();",1000);
</script>