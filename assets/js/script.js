$(document).ready(function() {

    console.log('javascript file linked.');

    var topnav = $('.navbar');
    var navCoords = topnav.offset();

    function stickyNav() {

        console.log('stickyNav running');

        console.log(navCoords.top);
        console.log(window.scrollY);

        if (window.scrollY >= navCoords.top) {

            $('#wrapper').css('padding-top', '48px');

            $('.navbar').addClass('stickyNav');

        } else {

            $('#wrapper').css('padding-top', '0px');

            $('.navbar').removeClass('stickyNav');

        }
      }

      $(window).on('scroll', stickyNav);

});