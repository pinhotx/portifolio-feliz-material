$(function () {
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('.tabs').tabs();

});

 $('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

setSlide = function (direction = 'next') {
  $('.carousel.carousel-slider').carousel(direction);
}
