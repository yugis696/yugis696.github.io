<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    //if($_POST['name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    //if($_POST['phone'] == "")   $errors[] = "Поле 'Ваш телефон' не заполнено!";
    //if($_POST['text'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: " . $_POST['name'] . "<br/>";
        $message .= "Телефон пользователя: " . $_POST['phone'] . "<br/>";
        $message .= "Текст письма: " . $_POST['text'] . "<br/>";
        $message .= "Тип сообщения: " . $_POST['formdata'];
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "info@medsafir.ru"; 
        // тема письма
        $subject = "Сообщение от посетителя сайта Medsafir.ru";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Сообщение с сайта <info@medsafir.ru>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>