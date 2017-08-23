$(document).ready(function () {

    // scrollspy nav

    $('body').scrollspy({target: '#navbar-example'});

    // carousel

    $('.carousel').carousel({
        interval: 2000
    });

    // pop up gallery

    $('.popup-gallery').each(function () {
        var $container = $(this);
        var $imageLinks = $container.find('.item');

        var items = [];
        $imageLinks.each(function () {
            var $item = $(this);
            var type = 'image';

            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');
            items.push(magItem);
        });

        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery: {
                enabled: true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function () {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                        this.goTo(index);
                    }
                }
            }
        });


        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery: {
                enabled: true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function () {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                        this.goTo(index);
                    }
                }
            }
        });
    });


    // read more link

    $(".toggle").click(function (e) {

        var readMoreElement = $(this);
        if (readMoreElement.text() === "Read More") {
            readMoreElement.text("Read Less");
            readMoreElement.siblings(".readMoreText").slideDown();
        } else {
            readMoreElement.text("Read More");
            readMoreElement.siblings(".readMoreText").slideUp();
        }
        e.preventDefault();
    });


    // Add smooth scrolling on all links inside the navbar

    $("#navigationBar a").on('click', function (e) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();
            // Store hash
            var hashtag = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hashtag).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hashtag;
            });
        } // end if
    }); // smooth scrolling nav

    $(".scrollToSection").on('click', function (e) {
        e.preventDefault();

        $('body, html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600)
    }); // jump to section
    var shuffleme = (function( $ ) {
        'use strict';
        var $grid = $('#grid'), //locate what we want to sort
            $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories
            $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

            init = function() {

                // None of these need to be executed synchronously
                setTimeout(function() {
                    listen();
                    setupFilters();
                }, 100);

                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    sizer: $sizer
                });
            },



            // Set up button clicks
            setupFilters = function() {
                var $btns = $filterOptions.children();
                $btns.on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this),
                        isActive = $this.hasClass( 'active' ),
                        group = isActive ? 'all' : $this.data('group');

                    // Hide current label, show current label in title
                    if ( !isActive ) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }

                    $this.toggleClass('active');

                    // Filter elements
                    $grid.shuffle( 'shuffle', group );
                });

                $btns = null;
            },

            // Re layout shuffle when images load. This is only needed
            // below 768 pixels because the .picture-item height is auto and therefore
            // the height of the picture-item is dependent on the image
            // I recommend using imagesloaded to determine when an image is loaded
            // but that doesn't support IE7
            listen = function() {
                var debouncedLayout = $.throttle( 300, function() {
                    $grid.shuffle('update');
                });

                // Get all images inside shuffle
                $grid.find('img').each(function() {
                    var proxyImage;

                    // Image already loaded
                    if ( this.complete && this.naturalWidth !== undefined ) {
                        return;
                    }

                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $( proxyImage ).on('load', function() {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });

                // Because this method doesn't seem to be perfect.
                setTimeout(function() {
                    debouncedLayout();
                }, 500);
            };

        return {
            init: init
        };
    }( jQuery ));

    $(document).ready(function()
    {
        shuffleme.init(); //filter portfolio
    });
}); // init
