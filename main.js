$(function () {
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();

});

 $('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

setSlide = function (direction = 'next') {
  $('.carousel.carousel-slider').carousel(direction);
}
