"use strict";

/*SLIDER*/
$(document).ready(function(){
    $('.slider_responds').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });
    $('.slider_mentors').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });

    /*SLIDER DOTS ADJUSTMENT*/
    let wideScreenBP = document.getElementsByClassName('course_block');
    let showDots;

    let mediumScreenBP = document.getElementsByClassName('course_block');
    let showDots4mediumScreen;

    let smallScreenBP = document.getElementsByClassName('course_block');
    let showDots4smallScreen;


    /*4 WIDE SCREEN*/
    if (wideScreenBP.length>3){
        showDots = true;
        console.log("display dots 4 wide screen");    
    } else {
        showDots = false;
        console.log("hide dots 4 wide screen");
    }

    /*4 MIDDLE SCREEN*/
    if (mediumScreenBP.length>2) {
        showDots4mediumScreen = true;
        console.log("display dots 4 medium screen");    
    } else {
        showDots4mediumScreen = false;
        console.log("hide dots 4 medium screen");
    }

    /*4 SMALL SCREENS*/
    if (smallScreenBP.length>1) {
        showDots4smallScreen = true;
        console.log("display dots 4 small screen");    
    } else {
        showDots4smallScreen = false;
        console.log("hide dots 4 small screen");
    }

    $('.slider_courses').slick({
        slidesToShow:3,
        dots: showDots,
        arrows: false,
        responsive:[
            {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                dots: showDots4mediumScreen,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: showDots4smallScreen,
            }
        }
    ]
    });
});

/*BURGER MENU*/
$(document).ready(function() {
    $('.header_burger, .header_link, .header_apply_button').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
    });
});