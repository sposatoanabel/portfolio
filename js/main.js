
    $(document).ready(function() {
// Initialize and Configure Magnific Popup Lightbox Plugin
        $('.popup-gallery').magnificPopup({
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
        $("#toggle").click(function () {

                var readMoreTextElement = $(this).text();
                if(readMoreTextElement == "Read More") {
                    $(this).text("Read Less");
                    $("#readMoreText").slideDown();
                } else {
                    $(this).text("Read More");
                    $("#readMoreText").slideUp();
                }
        });
    }); // init
