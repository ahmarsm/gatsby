// JavaScript Document
$(document).ready(function () {

    var winw = $(window).width();
    var winh = $(window).height();


//Cumstom Menu For Mobile
    $(".menu-show").click(function () {
        $(this).toggleClass("active");
        $(".menuconainer").toggleClass("active");
    });
    $(".closeMenu").click(function () {
        $(".menu-show, .menuconainer").removeClass("active");
    });

//Cumstom Menu For Mobile
    if (winw < 991) {
        $(".menubx li.menu-item-has-children").prepend("<i class='sidr-dropdown-toggler'></i>");

        $(".menubx li.menu-item-has-children > i").click(function () {
            $(this).parent().find(".sub-menu").slideToggle();
            $(this).parent().toggleClass("nav-item-open");
        });
        $(".menubx li.menu-item-depth-1 > i").click(function () {
            $(this).parent().find(".sub-sub-menu").slideToggle();
            $(this).parent().toggleClass("sub-nav-item-open");
        });
    }


    new WOW().init();

    // Accordian
    $(".faqsingle h4").click(function() {
		// $(this).parent().siblings('.faqsingle').find('.textbx').slideUp();
		// $(this).parent().siblings('.faqsingle').find('h4').removeClass('active');
        $(this).toggleClass("active");
        $(this).next(".textbx").slideToggle();
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() >= 150) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }
    });

});

