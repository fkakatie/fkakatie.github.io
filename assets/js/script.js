$(document).ready(function() {

    // grab topnav coordinates
    var topnav = $('.navbar');
    var navCoords = topnav.offset();

    function resetCoords() {
        topnav = $('.navbar');
        navCoords = topnav.offset();
    }

    // reset topnav coordinates on all page resizes
    $(window).on('resize', resetCoords);

    function stickyNav() {
        // if window y position is greater than or equal to the navbar y position...
        if (window.scrollY >= navCoords.top) {
            // make the navbar stick to the top of the page
            $('#wrapper').css('padding-top', '48px');
            $('.navbar').addClass('stickyNav');
        } else {
            // remove the navbar's stickiness
            $('#wrapper').css('padding-top', '0px');
            $('.navbar').removeClass('stickyNav');
        }
    }

    // check if the sticky nav is needed on every scroll
    $(window).on('scroll', stickyNav);

    

});