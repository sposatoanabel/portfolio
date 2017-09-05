(function () {

    // scrollspy nav

    $('body').scrollspy({target: '#my-navbar'});

    // carousel

    $('.carousel').carousel({
        interval: 2000
    });

    /**
     * name: hideParagraph
     * description: This function will will hide and show paragraphs.
     * Read more and read less buttons have been created dynamically in order to achieve the desired effect.
     *
     */

    var hideParagraph = function () {

        $(".toggle").click(function (e) {

            var readMoreElement = $(this);
            if (readMoreElement.text() === "Read More") {
                readMoreElement.text("Read Less");
                readMoreElement.siblings(".readMoreText").slideDown();
            } else {
                readMoreElement.text("Read More");
                readMoreElement.siblings(".readMoreText").slideUp();
            } // else
            e.preventDefault();
        }); // read more link
    }; // hideParagraph

    /**
     * name: scrollToSection
     * description: This function will execute a code allowing users to go to the link they clicked in the navbar.
     *
     */

    var scrollToSection = function () {

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
    };// scrollToSection


    /**
     * name: jumpToSection
     * description: a this function will allow the user to jump straight away to
     * the section he is looking for, in this case portfolio.
     */
    var jumpToSection = function () {


        $(".scrollToSection").on('click', function (e) {
            e.preventDefault();

            $('body, html').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 600)
        }); // jump to section
    };// jumpToSection()

    /**
     * name: backToTop
     * description: a this function will execute a piece of code to go back to the top and it will receive an
     * event handler of click every time the user press the button.
     */



    var backToTop = function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollUpTo').fadeIn();
            } else {
                $('.scrollUpTo').fadeOut();
            } // else
        });// scroll()

        $('.scrollUpTo').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        }); // click()

    };// backToTop

    init = function () {
        hideParagraph();
        scrollToSection();
        jumpToSection();
        backToTop();
    };// init


    window.addEventListener("load", init);

})(jQuery); // IIFE function
