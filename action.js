$(function () {
    //scroll button
    $('#scroll').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });


    $("#menu").on("click", "a", function (e) {
        e.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#scroll").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var prev = 0;
    var $window = $(window);
    var nav = $('.scrollhide-nav');

    $window.on('scroll', function () {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > screen.height) {
            $(".navbar-inverse").css("background", "#708090");
        }
        else {
            $(".navbar-inverse").css("background", "url(\"pp7.jpg\")");
            $(".navbar-inverse").css("background-size", "cover");
        }

    });
});

