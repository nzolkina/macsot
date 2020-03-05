<?php
$user_name = $_POST['user_name'];
$user_phone = $_POST['user_phone'];
$user_email = $_POST['user_email'];
$user_comment = $_POST['user_comment'];

$user_name = htmlspecialchars($user_name);
$user_phone = htmlspecialchars($user_phone);
$user_email = htmlspecialchars($user_email);
$user_comment = htmlspecialchars($user_comment);

$user_name = urldecode($user_name);
$user_phone = urldecode($user_phone);
$user_email = urldecode($user_email);
$user_comment = urldecode($user_comment);

$user_name = trim($user_name);
$user_phone = trim($user_phone);
$user_email = trim($user_email);
$user_comment = trim($user_comment);


if (mail("sergei_mozyr@tyt.by", "Заявка с сайта", "Фамилия и имя: ".$user_name.". Телефон: ".$user_phone. ". Почта отправителя: ".$user_email.". Сообщение: ".$user_comment))
 {     echo '<html>
    <head>
        <meta http-equiv="refresh" content="5;url=https://testmozyr.000webhostapp.com/" />
    </head>
    <body>
        Спасибо за обратную связь. Мы свяжемся с Вами в ближайшее время. <br> Вы будете перенаправлены на главную страницу через 5 секунд.
    </body>
</html>';
} else {
    echo "Повторите попытку позже, приносим свои извинения.";
}
?>