$(function () {
    $("#menu").on("click", "a", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var prev = 0;
    var $window = $(window);
    var nav = $('.scrollhide-nav');

    $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > screen.height) {
            $(".navbar-inverse").css("background" , "#708090");
        }
        else {
            $(".navbar-inverse").css("background" , "url(\"pp7.jpg\")");
            $(".navbar-inverse").css("background-size" , "cover");
        }

    });
});

