$(window).on("load", function() {
    $('.side-menu').removeClass('hidden');

    setTimeout(function() {
        $('.preloader').fadeOut();
    }, 1000);
});

jQuery(function($) {

    "use strict";


    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function() {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function() {
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-menu .navbar-nav .nav-link").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function() {
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function() {
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }


    $(function() {
        var $win = $(window);
        jQuery(function($) {
            $(window).scroll(function() {
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
                    // alert("near bottom!");
                    $('.sidenav-bottom').css('opacity', '1');
                    $('.sidenav-bottom').addClass('sidenav-bottom-fixed');
                }
                if ($(window).scrollTop() + $(window).height() < $(document).height() - 300 && $(window).scrollTop() + $(window).height() > $(document).height() - 400) {
                    $('.sidenav-bottom').css('opacity', '0');
                    $('.sidenav-bottom').removeClass('sidenav-bottom-fixed');
                }
            });
        });
    });

    if ($(window).width() <= 991) {
        $(".scroll").on("click", function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 40
            }, 200);
        });
    }


    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('.sidenav-bottom').css('opacity', '0');
            $('header .inner-header').addClass('header-appear');
        }
        if ($(this).scrollTop() < 260) {
            $('.sidenav-bottom').css('opacity', '1');
            $('header .inner-header').removeClass('header-appear');
        }
    });
    $(function() {
        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 260) $('.go-top').addClass('active');
            if (scrolled < 260) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" }, 100);
        });
    });


    $('.portfolio-carousel').owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });

    $('.portfolio-right-arr').click(function() {
        var owl = $('.portfolio-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.portfolio-left-arr').click(function() {
        var owl = $('.portfolio-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel');
    });


    $('.slider-carousel').owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 450,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });

    $('.review-carousel').owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    });


    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
});

const cursor_1 = document.querySelector('.cursor_1');

document.addEventListener('mousemove', e => {
    cursor_1.style.top = e.pageY - 15 + "px";
    cursor_1.style.left = e.pageX - 15 + "px";
})

document.addEventListener('click', () => {
    cursor_1.classList.add("expand");

    setTimeout(() => {
        cursor_1.classList.remove("expand");
    }, 500)
})

// Login Start
let body = document.body;
let sidebar = document.querySelector('.sidebar')
let darkBtn = document.querySelector('.darkBtn')
let menubutton = document.querySelector('#menubutton')

menubutton.addEventListener('click', function(e) {
    sidebar.classList.toggle('open')
    darkBtn.classList.toggle('darkBtnActive')
});

body.addEventListener('click', function(e) {
        if (e.target !== menubutton && !sidebar.contains(e.target)) {
            sidebar.classList.remove('open')
            darkBtn.classList.remove('darkBtnActive')
        }
    })
    // Login End

const alrt = () => {
    swal({
        title: "Good job!",
        text: "Thanks For Contacti US. Our Team Contact You as Soon as Possible!",
        icon: "success",
        button: "Okay",
    });
}