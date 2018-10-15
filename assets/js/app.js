$(function () {
    $("#afterMovieVideo").height($(window).height());    
    $("#afterMovieVideo").width($(window).width());    
});
var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (isMobile) {
    $(".mobile-nav-btn").show();
    $("#cta, #menu").hide();
    $(".mobile-nav-btn").on("click", function () {
        $("#mobile-nav").show();
    });
    $("#mobile-nav").on("click", function () {
        $("#mobile-nav").hide();
    });
}
var s = skrollr.init();
$(".plaxEl").on("click", function () {
    var elem = document.getElementById("trailer");
    $("#playbtn").hide();
    $(elem).show();
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    elem.play();
    ga('send', 'event', "video", "play");
});
skrollr.menu.init(s, {
    animate: true,
    easing: 'sqrt',
    scale: 1,
    duration: function (currentTop, targetTop) {
        return 500;
    },
    complexLinks: false,
    change: function (newHash, newTopPosition) {},
    updateUrl: false
});
window.addEventListener("load", function () {
    setTimeout(function () {
        window.scrollTo(0, 1);
    }, 0);
});
