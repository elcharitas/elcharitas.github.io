declare var { $, jQuery, WOW, feather, this: any, lightGallery, particlesJS }: any;

/**
 * Inject required scripts into head
 *
 * @param string src
 * @returns void
 */
function loadScript(src, cb = (glob?: any) => undefined) {
    var el = document.createElement("script");
    el.src = src;
    el.async = true;
    el.defer = true;
    //detach the loaded script
    el.onload = function () {
        cb(window)
        head.removeChild(el);
    }
    head.appendChild(el);
}

function loadStyle(href, cb = () => undefined) {
    var el = document.createElement('link');
    el.href = href;
    el.type = "text/css";
    el.rel = "stylesheet";
    el.media = "all";
    el.onload = function () {
        if ('caches' in window) {
            window.caches.open("elcharitas").then(function (cache) {
                cache.add(href)
            })
        }
        cb()
    }
    head.appendChild(el);
}

/**
 * Simple function to save or retrieve user details
 * Uses localStorage | cookies | object
 *
 * @param {string} key
 * @param {any|undefined} item
 * @returns string
 */
function store(key: string, item = null) {
    var handle = localStorage || {
        getItem: function (key) {
            return StoreX[key];
        },
        setItem: function (key, item) {
            document.cookie = key + '=' + item;
            return StoreX[key] = item;
        }
    };

    if (key && item === null) {
        return handle.getItem(key);
    } else if (key) {
        return handle.setItem(key, item);
    }
}

//optimal data storage
var StoreX = {};

//the head tag
var head = document.getElementsByTagName("head")[0];

/*------------------------------------------------
Trydo Html5 Creative Ahency Template
All Main Js Here

Index All JS
-----------------------
        01. Wow Active
        02. Counter Up
        03. Feature Icon Activation
        04. Youtub Popup
        05. Slick Activation
        06. Paralax Window
        07. LightBox
        08. Parallax Activation
        09. Masonry Activation
        10. ScrollUp Activation
        11. Mobile Menu Activation
        12. Smoth Scroll
--------------------------------------------------*/


(function (this: any, $) {
    'use strict';

    /*--------------------
        01. Wow Active
    --------------------*/

    new WOW().init();


    /*-----------------------
        02. Counter Up
    -------------------------*/

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /*---------------------------
        04. Youtub Popup
    -----------------------------*/

    $('.play__btn').yu2fvl();

    /*--------------------------
        05. Slick Activation
    ----------------------------*/

    function slickactivation() {
        // Check if element exists
        $.fn.elExists = function () {
            return this.length > 0;
        };
        // Variables
        var $html = $('html'),
            $elementCarousel = $('.rn-slick-activation');
        if ($elementCarousel.elExists()) {
            var slickInstances = [];
            $elementCarousel.each(function (this: any, index, element) {
                var $this = $(this);
                // Carousel Options
                var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';
                var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween) : 0,
                    $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl) : 0,
                    $isCustomArrow = $options.isCustomArrow ? $options.isCustomArrow : false,
                    $customPrev = $isCustomArrow === true ? ($options.customPrev ? $options.customPrev : '') : '',
                    $customNext = $isCustomArrow === true ? ($options.customNext ? $options.customNext : '') : '',
                    $vertical = $options.vertical ? $options.vertical : false,
                    $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
                    $asNavFor = $options.asNavFor ? $options.asNavFor : '',
                    $fade = $options.fade ? $options.fade : false,
                    $autoplay = $options.autoplay ? $options.autoplay : false,
                    $autoplaySpeed = $options.autoplaySpeed ? $options.autoplaySpeed : 5000,
                    $swipe = $options.swipe ? $options.swipe : false,
                    $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : false,

                    $arrows = $options.arrows ? $options.arrows : false,
                    $dots = $options.dots ? $options.dots : false,
                    $infinite = $options.infinite ? $options.infinite : false,
                    $centerMode = $options.centerMode ? $options.centerMode : false,
                    $centerPadding = $options.centerPadding ? $options.centerPadding : '',
                    $speed = $options.speed ? parseInt($options.speed) : 1000,
                    $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="' + $options.prevArrow.buttonClass + '"><i class="' + $options.prevArrow.iconClass + '"></i></span>' : '<button class="slick-prev">previous</span>') : '',
                    $nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="' + $options.nextArrow.buttonClass + '"><i class="' + $options.nextArrow.iconClass + '"></i></span>' : '<button class="slick-next">next</span>') : '',
                    $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
                    $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;

                /*Responsive Variable, Array & Loops*/
                var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
                    $responsiveSettingLength = $responsiveSetting.length,
                    $responsiveArray = [];
                for (var i = 0; i < $responsiveSettingLength; i++) {
                    $responsiveArray[i] = $responsiveSetting[i];

                }

                // Adding Class to instances
                $this.addClass('slick-carousel-' + index);
                $this.parent().find('.slick-dots').addClass('dots-' + index);
                $this.parent().find('.slick-btn').addClass('btn-' + index);

                if ($spaceBetween != 0) {
                    $this.addClass('slick-gutter-' + $spaceBetween);
                }
                if ($spaceBetween_xl != 0) {
                    $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
                }
                $this.slick({
                    slidesToShow: $slidesToShow,
                    slidesToScroll: $slidesToScroll,
                    asNavFor: $asNavFor,
                    autoplay: $autoplay,
                    autoplaySpeed: $autoplaySpeed,
                    speed: $speed,
                    infinite: $infinite,
                    arrows: $arrows,
                    dots: $dots,
                    vertical: $vertical,
                    focusOnSelect: $focusOnSelect,
                    centerMode: $centerMode,
                    centerPadding: $centerPadding,
                    fade: $fade,
                    adaptiveHeight: $adaptiveHeight,
                    prevArrow: $prevArrow,
                    nextArrow: $nextArrow,
                    responsive: $responsiveArray,
                });

                if ($isCustomArrow === true) {
                    $($customPrev).on('click', function () {
                        $this.slick('slickPrev');
                    });
                    $($customNext).on('click', function () {
                        $this.slick('slickNext');
                    });
                }
            });

            // Updating the sliders in tab
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                $elementCarousel.slick('setPosition');
            });
        }
    }
    slickactivation()


    /*--------------------------
        06. Paralax Window
    --------------------------*/

    $('.parallax-window').parallax({
        naturalWidth: 600,
        naturalHeight: 400
    });

    /* -------------------------
        07. LightBox
    ----------------------------*/

    lightGallery(document.getElementById('animated-thumbnials'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false
    });

    /*--------------------------------
        08. Parallax Activation
    ---------------------------------*/

    function stellarParallax() {
        if ($(window).width() > 1024) {
            $.stellar();
        } else {
            $.stellar('destroy');
            $('.parallax').css('background-position', '');
        }
    }

    function SetResizeContent() {
        stellarParallax();
    }
    SetResizeContent();


    /*--------------------------------
        09. Masonry Activation
    ---------------------------------*/
    $('.rn-masonary-wrapper').imagesLoaded(function () {
        // filter items on button click
        $('.messonry-button').on('click', 'button', function (this: any) {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.mesonry-list').isotope({
            itemSelector: '.masonry_item',
            percentPosition: true,
            transitionDuration: '0.7s',
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
    });
    $('.messonry-button button').on('click', function (this:any, event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });

    /*--------------------------------
        10. ScrollUp Activation
    ---------------------------------*/

    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });


    /*--------------------------------
        12. Smoth Scroll
    ---------------------------------*/

    $(document).on('click', '.smoth-animation', function (this: any, event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });



    $(window).scroll(function (this: any) {
        if ($(this).scrollTop() > 50) {
            $('.header--sticky').addClass('sticky')
        } else {
            $('.header--sticky').removeClass('sticky')
        }
    })



    /*-------------------------------------------------------------
      Contact Form Activation
    ---------------------------------------------------------------*/

    $(function () {

        // Get the form.
        var form = $('#contact-form-active');

        // Get the messages div.
        var formMessages = $('.form-messege-active');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#contact-form input,#contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });

    });

    $(document).find('#particles-js').each(function () {

        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 4
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }

        );
    })

    var introbun = $('#introbun').ready(function () {
        var start = 0;
        var tag = "";
        var words = [
            "Hello There!",
            "I'm elcharitas...",
            "I love to code!",
            "It's a thrill..."
        ]
        var group = words.length;
        setInterval(function () {
            var word = words[group] || "", curWord, span;
            if (typeof (curWord = word[start++]) !== "undefined") {
                if (tag) span = document.createElement(tag), span.innerText = curWord
                introbun.html(introbun.html() + (span ? span.outerHTML : curWord))
                if (curWord == " ") tag = "span"
            } else group++, introbun.html('<i class="invisible">.</i>'), start = 0, tag = "";
            if (group > words.length) group = 0;
        }, 450)
    })

})(jQuery)

if (navigator.onLine === true) {
    //offload site fonts...
    loadStyle('https://fonts.googleapis.com/css2?family=Langar&family=Montserrat:wght@200;300;400&family=Poppins:wght@200;300;400&display=swap');

    //offload commentbox
    if (document.querySelector(".powr-comments")) loadScript("https://www.powr.io/powr.js?platform=html");

    //offload twitter box
    if (document.querySelector("#tweets")) loadScript("https://platform.twitter.com/widgets.js")

    //offload google analytics
    loadScript("https://www.googletagmanager.com/gtag/js?id=G-Q06SN22SHK", () => {

        let dataLayer = window["dataLayer"] || [];

        function gtag(name: string, value: any) {
            dataLayer.push(name, value);
        }

        gtag('js', new Date());

        gtag('config', 'G-Q06SN22SHK');
    })
}