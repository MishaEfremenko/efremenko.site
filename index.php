<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Визитка</title>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <?php 
    function isMobile() { 

        return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
        }
        
        if(isMobile()){
            print('<script src="javascript/mbegin.js"></script>
            <link rel="stylesheet" href="css/mbegin.css">');
        }
        else { 
            print('<script src="javascript/begin.js"></script>
            <link rel="stylesheet" href="css/begin.css">');
        }
    ?>
    <link rel="shortcut icon" href="icon.ico" type="image">
</head>
<body>
    <div id="portret">
        <img src="images/backgroundme.png" id="myphoto">
    </div>
    <div id="about_me">
        <span id="my_name">Михаил Ефременко, веб-программист</span>
        <span id="first_work">Свой первый сайт<br> я выложил в интернет<br> 9.09.2017</span>
        <span id="time_have_done">C тех пор прошло:</span>
        <span id="calculate_time">0 лет 0 месяцев 0 дней</span>
    </div>
</body>
</html>