var $ = require("jquery");

$(window).scroll(function() {
  var scroll = $(window).scrollTop();


  if (scroll >= 550) {

    $(".top-header").addClass("fix");
    $(".top-header").addClass("fade-in-top");
    $(".top-header__wrapper").css("border-bottom", "none");
    $(".btn__menu").addClass("btn__scroll");
  } else {
    $(".top-header").removeClass("fix");
    $(".top-header").removeClass("fade-in-top");
    $(".top-header__wrapper").css("border-bottom", "solid 1px rgb(144, 144, 144)");
    $(".btn__menu").removeClass("btn__scroll");


  }
});

$(document).ready( function() {

    $(".parent__drop-down").hover(
      function() {
        $(".drop-down").addClass("active")
      });

    $(".parent__drop-down").mouseleave(
      function() {
        $(".drop-down").removeClass("active")
      })
  }
)
