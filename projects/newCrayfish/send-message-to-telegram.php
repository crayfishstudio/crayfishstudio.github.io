<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['phone'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего вас нахуй: ";
  }
}
 
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}
if (isset($_POST['email'])) {
  if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Email: ";
  }
}
/*if (isset($_POST['msg'])) {
  if (!empty($_POST['msg'])){
  $msg = strip_tags($_POST['msg']);
  $msgFieldset = "msg: ";
  }
}*/
$token = "713508432:AAHv1XghRc6DKweDtWmcOMKaXojZEh2mmfg";
$chat_id = "-309131950";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email, 
  //$msgFieldset => $msg 
);
if (!empty($_POST['option'])){
    foreach(($_POST['option']) as $selected){
        $options .= ' ' . $selected;
    }
}
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$txt .= "Options:" . $options;
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
   header ("Location: http://crayfish.studio");
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} 
 
?>