/*hslint browser: true*/ /*global $*/

$(document).ready(function () {
  $(".slider").slick({
      adaptiveHeight: true,
      arrows: true,
      dots: true,
      draggable: false,
      easing: "ease",
      responsive: [
          {
              breakpoint: 760,
              settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
              }
          }
      ],
      slidesToScroll: 3,
      slidesToShow: 3,
      speed: 1000,
      waitForAnimate: true
  });
});