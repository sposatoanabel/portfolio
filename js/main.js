$(document).ready(function () {
// Initialize and Configure Magnific Popup Lightbox Plugin
    /*$('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    }); // magnificPopup function
*/


    $('.popup-gallery').each(function() {
        var $container = $(this);
        var $imageLinks = $container.find('.item');

        var items = [];
        $imageLinks.each(function() {
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
            gallery:{
                enabled:true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
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
            gallery:{
                enabled:true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                        this.goTo(index);
                    }
                }
            }
        });
    });


    // read more link
    $("#toggle").click(function () {

        var readMoreTextElement = $(this).text();
        if (readMoreTextElement == "Read More") {
            $(this).text("Read Less");
            $("#readMoreText").slideDown();
        } else {
            $(this).text("Read More");
            $("#readMoreText").slideUp();
        }
    });

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar ", offset: 50});

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
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 600)
    }); // jump to section



}); // init
