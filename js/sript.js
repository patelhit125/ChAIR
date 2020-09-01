feather.replace();

$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
  if($(this).hasClass('open')){
    $('#navbarNav').slideDown();
    $("body").css("overflow","hidden");
  }
  else {
    $('#navbarNav').slideUp();
    $("body").css("overflow","auto");
  }
});

var text = ["KIDS", "OFFICE", "HOME", "STUDY", "BABY", "BEDROOM", "WORK FROME HOME"];
var counter = 0;
var inst = setInterval(change, 2000);

function change() {
  counter++;
  $("#changeText").slideUp(500, function () {
    $(this).text(text[counter]).slideDown(500);
  });
  if (counter >= text.length) {
    counter = 0;
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $('.navbar').removeClass("bg-transparent");
    $('.navbar').removeClass("navbar-light");
    $('.navbar').addClass("navbar-dark");
    $('.navbar').addClass("bg-dark");
  } else {
    $('.navbar').addClass("bg-transparent");
    $('.navbar').addClass("navbar-light");
    $('.navbar').removeClass("navbar-dark");
    $('.navbar').removeClass("bg-dark");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".toTop").fadeIn();
  } else {
    $(".toTop").fadeOut();
  }
});