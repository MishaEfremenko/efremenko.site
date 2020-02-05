$(document).ready(function(){
    let user_heigth=window.innerHeight;
    $("#myphoto").css("height",function(){
        return (user_heigth/1.5+"px");
    });
    $("#myphoto").css("margin",user_heigth/6+"px");
    $("#myphoto").css("margin-left",function(){
        let user_width=return_val_of_string($("#myphoto").css("width"));
        return window.innerWidth/2-user_width/2+"px";
    });
    setTimeout('time_to_transition()',1000);
});
function time_to_transition(){
    $("#myphoto").css("transition","0.5s");
    $("#myphoto").css("opacity","1");
    setTimeout('portret_is_half_of_width()',1000);
}
function portret_is_half_of_width(){ // фон картинки занимает 0.5 экрана
    $("#myphoto").css("transition","1s")
    $("#portret").css("width","50%");
    $("#myphoto").css("margin-left",function(){
        let user_width=return_val_of_string($("#myphoto").css("width"));
        return window.innerWidth/4-user_width/2+"px";
    });
    $("#about_me").css("display","block");
    setTimeout("writing_about_me()",500);
}
function writing_about_me(){ // рассчитывает размер текста
    let Text_font_size=window.innerHeight/18;
    $("#about_me").css("font-size",Text_font_size+"px");
    $("#my_name").css("font-size",Text_font_size/2+"px");
    $("#my_name").css("margin-top",Text_font_size*2.5+"px");
    $("#first_work").css("margin-top",Text_font_size*2+"px");
    $("#time_have_done").css("margin-top",Text_font_size+"px");
    $("#calculate_time").css("margin-top",Text_font_size/3+"px");
    setTimeout("show_some_about_me()",1000);
}

function show_some_about_me(){
    $("#about_me span").css("transition","2s");
    $("#first_work").css("opacity","1");
    $("#my_name").css("opacity","1");
    setTimeout('$("#time_have_done").css("opacity","1")',5000);
    setTimeout('$("#calculate_time").css("opacity","1")',6000);
    
    $("#first_work").html("");
    write_string("Свой первый сайт я<br/>выложил в интернет<br/>10.09.2017");
    
    setTimeout(function(){time_of_developing()},6500);

    setTimeout('transform_to_up()',9300);
}
function write_string(text){
    let t ="";
    let delay=0;
    for (let i=0;i<=text.length;i++)
        if (text[i]!=" ")
            if ((i<18||i>21)&&(i<40||i>43))
                setTimeout(function(){$("#first_work").html(return_part(text,i));},delay+=100);
}
function time_of_developing(){
    var now = new Date();
    var old = new Date(2017,9,10);
    let days=Math.floor((now-old)/(1000*3600*24));
    
    let time3 = 2000/days;        
    let delay=0;

    for (let i=0;i<days;i++)
        setTimeout(function(){update_something()},delay+=time3);
        
}
function update_something(){
    let text=$("#calculate_time").text().split(" ");
    text[4]++;
    switch_day()
    if (text[4]==30){
        text[4]=0;
        text[2]++;
        switch_moungth();
        switch_day()
    }
    if (text[2]==12){
        text[2]=0;
        text[0]++;
        switch (text[0]){
            case 0:
                text[1]="лет";
            break;
            case 1:
                text[1]="год";
            break;
            default: text[1]="года";
        }
        switch_moungth()
    }  

    function switch_day(){
        switch (text[4]){
            case 1:
            case 21:
                text[5]="день";
            break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
                text[5]="дня";
            break;
            default: text[5]="дней";
        }
    }
    function switch_moungth(){
        switch (text[2]){
            case 1:
                text[3]="месяц";
            break;
            case 2:
            case 3:
            case 4:
                text[3]="месяца";
            break;
            default:text[3]="месяцев";
        }
    }

    $("#calculate_time").text(text[0]+" "+text[1]+" "+text[2]+" "+text[3]+" "+text[4]+" "+text[5]);
}


function transform_to_up()
{
    $("body").css("transform","translateY(-"+window.innerHeight+"px)");

    setTimeout(function(){
        $("body").css("transition","0s");
        $("body").css("transform","translateY(0px)");
        // $("body").css("transition","2s");
        $("#portret").remove();
        $("#about_me").remove();
        
        $('<div>', { id: 'my_progect', html: 'Последние сайты:'}).appendTo('body');
        $('<div>', { class: 'progects', html: '<img src="images/genstoryru/pc.png" id="pcimg"><img src="images/genstoryru/mobile.png" id="mobimg"><div class="textabout">textnote.ru.com - сайт со статьями, работающий на шаблонизаторе Twig</div><div class="progect_hrefs"><div class="progect_href" onclick="window.open(`https://genstory.ru`)">Перейти на сайт</div><div class="progect_href" id="href2">GitHub - версия</div></div>'}).appendTo('body');
        $('<div>', { class: 'progects', html: '<img src="images/textnoteru/pc.png" id="pcimg"><img src="images/textnoteru/mobile.png" id="mobimg"><div class="textabout">textnote.ru.com - веб-хранилище для текстовых заметок. Здесь реализована регистрация по email, используется PHP+JS(AJAX,JQuery)+CSS Flexbox, сайт имеет одну точку входа, Тестовый логин - default@gmail.com пароль - default</div><div class="progect_hrefs"><div class="progect_href" onclick="window.open(`https://textnote.ru.com`)">Перейти на сайт</div><div class="progect_href" id="href2">GitHub - версия</div></div>'}).appendTo('body');
        $('<div>', { class: 'progects', html: '<img src="images/efremenkosite/pc.png" id="pcimg"><img src="images/efremenkosite/mobile.png" id="mobimg"><div class="textabout">Собственно, этот сайт. Создан при помощи JQuery. При помощи PHP есть переход на мобильную версию</div><div class="progect_hrefs"><div class="progect_href" onclick="window.open(`https://efremenko.site`)">Перейти на сайт</div><div class="progect_href" id="href2">GitHub - версия</div></div>'}).appendTo('body');
        $('<div>', { class: 'progects', html: '<img src="images/physformru/pc.png" id="pcimg"><img src="images/physformru/mobile.png" id="mobimg"><div class="textabout">physform.ru - SPA приложения для поиска физических формул. На клиенте используется чистый JS + AJAX + JSON, немного CSS анимаций. На сервере используется PHP в связке с БД MySQL.</div><div class="progect_hrefs"><div class="progect_href" onclick="window.open(`https://physform.ru`)">Перейти на сайт</div><div class="progect_href" id="href2">GitHub - версия</div></div>'}).appendTo('body');
        

        
        $('.textabout').css("font-size",function(){
            return window.innerHeight/30+"px";
        });
        $('.progect_href').css("font-size",function(){
            return window.innerHeight/25+"px";
        });
        setTimeout(function(){$('.progect_href').css("transition","1s")},1000);

    },1500);
}

function return_part(obj,val){// возвпащает часть строки
    let new_val="";
    for (let i=0;i<val;i++)
        new_val+=obj[i];
    return new_val;
}
function return_val_of_string(val_width_string){ //возвращает от 32px 32
    let new_val="";
    let i=0;
    while (val_width_string[i]!="p"){
        new_val+=val_width_string[i];
        i++;
    }
    return Number(new_val);
}