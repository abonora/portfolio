

$(window).scroll(function(){
  var offsettest = $('body .full-page-wrapper .info-wrapper').offset();
console.log(offsettest.top);
  if ($(window).scrollTop() >= offsettest.top) {
    $('nav').addClass('sticky');
    $('#FullPageOne .info-wrapper').addClass('hideme');
  }
  else {
    $('nav').removeClass('sticky');
    $('#FullPageOne .info-wrapper').removeClass('hideme');
  }
});