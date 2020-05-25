$(document).ready(function () {
    var typed = new Typed('#typed', {
        strings: ["A Photographer.", "A Graphic Designer.", "Kerri Deo."],
        backSpeed: 100,
        typeSpeed: 100,
        loop: true,
        cursorChar: '|',
        autoInsertCss: true

    });

    //Owl-Carousel
    $('.clints').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplaySpreed: 2000,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    //Sticky Bar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.menu').addClass("sticky");
        }
        else {
            $('.menu').removeClass("sticky");
        }
    });
    //Smooth Scrool
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    //Mixed It Up
    var mixer = mixitup('.prt');

});
function openNav() { document.getElementById("myNav").style.width = "100%" }
function closeNav() { document.getElementById("myNav").style.width = "0%" }