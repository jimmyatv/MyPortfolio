//? VANILLA JS





// $('h1').hide(3000); // test jQuery !

//* jQuery
$(document).ready(function() {

    //? FADEOUT EFFECT
    //   let typed = new Typed('.element', {
    //     strings: ['make a website for you.', 'create a web application for you.', 'optimize your website.'],
    //     typeSpeed: 70,
    //     backSpeed: 50,
    //     fadeOut: true,
    //     loop: true,
    //   });


      //? SMART BACKSPACE
      let typed = new Typed('.element', {
        strings: ['make a website for you.', 'create a web app for you.', 'optimize your website.'],
        typeSpeed: 60,
        backSpeed: 10,
        smartBackspace: true, // Default
        loop: true
      });


      //? FIXED NAVBAR IN JQUERY 
      $(window).on('scroll', function() {
        let scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $('.sticky').addClass('stickyAdd')
            $('.toTop').addClass('toTopAdd')
        } else {
            $('.sticky').removeClass('stickyAdd')
            $('.toTop').removeClass('toTopAdd')
        }
      });


    //? PROGRESS BAR
      let waypoint = new Waypoint({
        element: document.getElementById('experience'),
        handler: function() {
          let progress = document.querySelectorAll('.progress-bar');
          progress[0].setAttribute('style', 'width: 90%; transition:1s all;');
          progress[1].setAttribute('style', 'width: 95%; transition:2s all;');
          progress[2].setAttribute('style', 'width: 80%; transition:3s all;');
          progress[3].setAttribute('style', 'width: 70%; transition:4s all;');
        },

        offset: '90%'
      });


    //? OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    //? PORTFOLIO FILTERIZR
    let filterizd = $('.filter-container').filterizr({
        animationDuration: .5,
    });

});