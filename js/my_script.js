
$(function(){
 
    /* TOP-Pageボタン制御 */
    $('.page-top').hide();  // TOP-Pageボタン非表示
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {    // スクロールが100に達したらボタン表示
          $('.page-top').fadeIn();
        } else {
          $('.page-top').fadeOut();
        }
    });

        // タブパネル 
      var select_panel = $('ul.tab li a.selected').attr('href');  //タブで選択されている hrefの値を取得
      $('ul.panel li:not('+select_panel+')').hide();  //パネルの選択されているところ以外を非表示にする

      // タブクリックイベント時
      $('ul.tab li a').click(function(){
        $('ul.tab li a.selected').removeClass('selected');  // selected クラスを外す
        $(this).addClass('selected');   // クリックされたタブにselectedクラスをつける
        $('ul.panel li').hide();        // 一旦、パネル部分を非表示
        $($(this).attr('href')).show(); // クリックされたタブにリンクするパネルだけを表示させる
        return false;   // jQueryのクリックイベントだけ実行させるため、return falseする。
      });

  
    $('.page-top').click(function () {      // TOP-Pageボタンクリックされた時
        $('body,html').animate({scrollTop: 0}, 500);  // TOPへスクロール
        return false;
    });

    /* ドロップダウンメニュー */

  /* ドロップダウンメニュークリック時の処理 */
  $('#spnavi li').click(function(){
    if($('#drop_menu_hidden').is(':hidden')){
      $('#drop_menu_hidden:not(:animated)').slideDown('fast');
    }
    else {
      $('#drop_menu_hidden:not(:animated)').slideUp('fast');
    }
  });
  
   /* WayPoint */
   $('.Prefecture-OSAKA img').waypoint(function(){
    if($('.Prefecture-OSAKA img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.Prefecture-OSAKA img').css('visibility','visible');
      $('.Prefecture-OSAKA img').toggleClass('animated fadeInRight');
    }
  },{offset: '50%'}
  );

  /* WayPoint */
  $('.Prefecture-KYOTO img').waypoint(function(){
    if($('.Prefecture-KYOTO img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.Prefecture-KYOTO img').css('visibility','visible');
      $('.Prefecture-KYOTO img').toggleClass('animated fadeInLeft');
    }
  },{offset: '50%'}
  );

  /* WayPoint */
  $('.Prefecture-HYOGO img').waypoint(function(){
    if($('.Prefecture-HYOGO img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.Prefecture-HYOGO img').css('visibility','visible');
      $('.Prefecture-HYOGO img').toggleClass('animated fadeInRight');
    }
  },{offset: '50%'}
  );

  /* WayPoint */
  $('.Prefecture-SHIGA img').waypoint(function(){
    if($('.Prefecture-SHIGA img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.Prefecture-SHIGA img').css('visibility','visible');
      $('.Prefecture-SHIGA img').toggleClass('animated fadeInLeft');
    }
  },{offset: '50%'}
  );

  /* WayPoint */
  $('.Prefecture-NARA img').waypoint(function(){
    if($('.Prefecture-NARA img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.Prefecture-NARA img').css('visibility','visible');
      $('.Prefecture-NARA img').toggleClass('animated fadeInRight');
    }
  },{offset: '50%'}
  );

  /* WayPoint */
  $('.Prefecture-WAKAYAMA img').waypoint(function(){
    if($('.Prefecture-WAKAYAMA img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.Prefecture-WAKAYAMA img').css('visibility','visible');
      $('.Prefecture-WAKAYAMA img').toggleClass('animated fadeInLeft');
    }
  },{offset: '50%'}
  );
    
  });
  
  
  