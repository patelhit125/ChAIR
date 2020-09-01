$(document).ready(function(){
  $('.tab1').on('click', function(){
    $('.section2').addClass('hidden');
    $('.section1').removeClass('hidden');
    $('.tab1').removeClass('stroke');
    $('.tab2').addClass('stroke');
  });
  $('.tab2').on('click', function(){
    $('.section1').addClass('hidden');
    $('.section2').removeClass('hidden');
    $('.tab2').removeClass('stroke');
    $('.tab1').addClass('stroke');
  });
})