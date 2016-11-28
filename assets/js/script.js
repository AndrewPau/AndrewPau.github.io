$(document).ready(function() {

    $(".navbarItem").click(function() {
        var id = "#" + $(this).text();
        var top = $(id).offset().top;
        $('html,body').animate({scrollTop: top - 50}, 500);
    });

    $(".media").hover(function() {
        var media = "." + this.id;
        console.log(media);
        $(media).stop(true, true).fadeIn(400);
    }, function() {
        var media = "." + this.id;
        $(media).stop(true, true).fadeOut(400);
    });

});
