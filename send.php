<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST['send'])) {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMMTPAuth = true;
    $mail->Username = 'rocket.business.test.61@gmail.com';
    $mail->Password = 'agjwwhusutfxtclv';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setForm('rocket.business.test.61@gmail.com');

    $mail->addAdress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Subject = $_POST["tel"];
    $mail->Body = $_POST["name"];
    $mail->Body = $_POST["email"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "
    <script>
    alert('Форма отправлена. Мы свяжемся с Вами в ближайшее время')

    document.location="/"
    </script>
    "
}
?>