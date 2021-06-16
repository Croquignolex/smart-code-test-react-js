(function ($) {
    "use strict";
    // Scroll handling
    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("navbar-scroll");
        } else {
            $(".navbar ").removeClass("navbar-scroll");
        }
    });

    // Collapse handling
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('show');
    });

    // Scroll to top handling
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 250) {
            $('.back-top').fadeIn(300);
        } else {
            $('.back-top').fadeOut(300);
        }
    });

    $('.back-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });
})(jQuery);

