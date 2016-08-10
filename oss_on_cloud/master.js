$(function(){
  <!-- 読み込み後処理 -->
  window.onload = function(){
    $('section.mainvisual .titlewrap').css("background","#113157");
  };

  <!-- スムーズスクロール -->
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 1000; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

   <!-- スクロール変化 -->
   $(window).scroll(function(){
       if($(this).scrollTop() > 200){
         $('header nav').css("height","50px");
         $('header nav a img').css("width","30px");
         $('header nav ul li a').css("line-height","50px");
       }else{
         $('header nav').css("height","70px");
         $('header nav a img').css("width","50px");
         $('header nav ul li a').css("line-height","70px");
       }
   });

});
