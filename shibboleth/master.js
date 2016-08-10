$(function(){
  <!-- スムーズスクロール -->
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 800; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 60;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function(){
  <!-- スクロール変化 -->
  $(window).scroll(function(){
      if($(this).scrollTop() > 250){
        $('header nav').css("height","50px");
        $('header nav').css("background","rgba(255,255,255,.9)");
        $('header nav').css("box-shadow","0 1px 20px rgba(0,0,0,.1)");
        $('header nav a img').css("width","30px");
        $('header nav ul li a').css("line-height","50px");
        $('.whiteSpace').css("background","rgba(255,255,255,.9)");
        $('section').css("background","rgba(255,255,255,.9)");
        $('section.mainvisual').css("background","transparent");
        $('section.mainvisual .titlewrap').css("background","transparent");
      }else{
        $('header nav').css("height","70px");
        $('header nav').css("background","rgba(255,255,255,.4)");
        $('header nav').css("box-shadow","0 0 0 transparent");
        $('header nav a img').css("width","50px");
        $('header nav ul li a').css("line-height","70px");
        $('.whiteSpace').css("background","rgba(255,255,255,.2)");
        $('section').css("background","rgba(255,255,255,.2)");
        $('section.mainvisual').css("background","transparent");
        $('section.mainvisual .titlewrap').css("background","#ffffff");
      }
  });
});
