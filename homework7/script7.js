window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  $(document).ready(function(){
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
});

// window.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM fully loaded and parsed");

//   $(document).ready(function(){
//     $('.slider').slick({
//       arrows: true,
//       dots: true,
//       adaptiveHeight: true,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       speed: 1000,
//       easing: 'ease',
//       draggable: false,
//       waitForAnimate: true,
//       responsive: [
//         {
//           breakpoint: 760,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     });
//   });
// });