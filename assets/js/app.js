


 $(document).ready(function(){

   // Initialize the Side Nav
   $('.sidenav').sidenav();
   $(".materialboxed").materialbox();
   $(".parallax").parallax();
   $(".tabs").tabs();
   $(".datepicker").datepicker({
     disableWeekends: true
   });
   $(".tooltipped").tooltip();
   $(".scrollspy").scrollSpy();
   $('.slider').slider();
   $('.carousel').carousel();
   $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


   $(window).on("scroll",function(){
    if ($(window).scrollTop()){
      $("nav").addClass("scroll_transition black-text");
      $(".brand-logo").addClass("black-text");
      $("nav").removeClass("transparent white-text");
      $("#nav_menu a").addClass("black-text");
      $("#menu_icon").addClass("black-text");
    }
    else{
      $("nav").removeClass("scroll_transition black-text");
      $(".brand-logo").removeClass("black-text");
      $("#nav_menu a").removeClass("black-text");
      $("#menu_icon").removeClass("black-text");
    }
   })


 });