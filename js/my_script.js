//TOPボタン
$(function(){

    $('.page-top').hide();  
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {    
          $('.page-top').fadeIn();
        } else {
          $('.page-top').fadeOut();
        }
    });
  
    $('.page-top').click(function () {      
        $('body,html').animate({scrollTop: 0}, 500);  
        return false;
    });
  });
  