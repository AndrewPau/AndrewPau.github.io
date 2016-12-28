$(document).ready(function() {

    $(".navbarItem").click(function() {
        var id = "#" + $(this).text();
        var top = $(id).offset().top;
        $('html,body').animate({scrollTop: top - 50}, 500);
    });

    $(".media").hover(function() {
        var media = "." + this.id;
        if ($(window).width() > 700) {
            $(media).stop(true, true).fadeIn(400);
        }
    }, function() {
        var media = "." + this.id;
        $(media).stop(true, true).fadeOut(400);
    });

    $("#menu-trigger").click(function() {
        var show = $(".mobile-menu").hasClass("active");
        if (show) {
            $(".mobile-menu").removeClass("active");
        } else {
            $(".mobile-menu").addClass("active");
        }
    });

    $(".mobile-menu .navbarItem").click(function() {
        $(".mobile-menu").removeClass("active");
    });

});
