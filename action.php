<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$itemname = $_POST['itemname'];
$days = $_POST['days'];
$sum = $_POST['sum'];
$allform = $_POST['allform'];
$number = $_POST['number'];
$name = $_POST['user_name'];
$surname = $_POST['user_surname'];
$country = $_POST['country'];
$phone = $_POST['phone'];
$sex = $_POST['sex'];
$birthday = $_POST['birthday'];
$order = $_POST['order'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ozayavok@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '$onetwothree'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('ozayavok@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('bohpts34@gmail.com');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment($_FILES["photo"]['tmp_name'], $_FILES['photo']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка';
$mail->Body    = $itemname . ',' . $days . '<br>' .$number. 'шт. x '.$sum.'<br>'.$name.' '.$surname.'<br>'.'День рождения:'.$birthday.'<br> Пол:'.$sex.'<br>'.$country.''.$phone.'<br>Заказ #'.$order;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
}else {
    header('location: index.html');
}
?>