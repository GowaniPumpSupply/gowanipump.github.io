//Close the menu (shows up on md size) when clicked anywhere on the page
$(document).on('click',function(){
  $('.navbar-collapse').collapse('hide');
})

//Smooth scroll
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
      window.location.hash = target;
    });
  });
});


// get the value of the top ~25% of the #main element by adding the offset of that element plus 25% of its height, set it as a variable
var first_quarter = $('#main').offset().top + ($('#main').height() * 0.25);
console.log($('#main').height());
//get the value of the end of #main element
var main_bottom = $('#main').offset().top + $('#main').height();
//get the value of the end of second page -- "#about"
var second_bottom = $('#about').offset().top + $('#about').height();

// on scroll, 
$(window).on('scroll',function(){
  
  var stop = $(window).scrollTop();

  //Add classes once scrolled past certain pages
  if(stop > main_bottom){
    $('.navbar-brand').addClass('past-main-navbar-brand'); //smooth transition from bigger to smaller font
    $('.navbar').addClass('past-main-navbar');
    $('.navbar').addClass('navbar-font-size');
    $('.navbar-brand').removeClass('main-navbar-brand'); 
    $('.navbar-brand').addClass('crimson-font-color');
    $('.navbar-toggler').addClass('crimson-font-color');
    $('.navbar-toggler').addClass('navbar-toggler-reduce');
    $('.navbar-toggler').removeClass('navbar-toggler-increase');
  } else if (stop > first_quarter) {
    $('.navbar-brand').addClass('past-main-navbar-brand'); //smooth transition from bigger to smaller font
    $('.navbar').addClass('past-main-navbar');
    $('.navbar').addClass('navbar-font-size');
    $('.navbar-brand').removeClass('main-navbar-brand'); 
    $('.navbar-brand').removeClass('crimson-font-color');
    $('.navbar-toggler').removeClass('crimson-font-color');
    $('.navbar-toggler').addClass('navbar-toggler-reduce');
    $('.navbar-toggler').removeClass('navbar-toggler-increase');
  } else {
    $('.navbar-brand').removeClass('past-main-navbar-brand');
    $('.navbar-brand').addClass('main-navbar-brand'); //smooth transition from smaller to bigger font
    $('.navbar').removeClass('past-main-navbar');
    $('.navbar-brand').removeClass('crimson-font-color');
    $('.navbar-toggler').removeClass('crimson-font-color');
    $('.navbar-toggler').removeClass('navbar-toggler-reduce');
    $('.navbar-toggler').addClass('navbar-toggler-increase'); //looks weird when website is first opened and scrolled just a bit (animation is performed)
  }
});