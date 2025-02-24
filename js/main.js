$(function () {
  // slick
  $(".news").slick({
    slidesToShow:3,
    slideToScroll:1,
    centerMode:true,
    responsive: [{
      breakpoint: 767, // ブレイクポイントを指定
      settings: {
        slidesToShow: 1,
        autoPlay:true,
        speed: 600,
      },},]
    });
  
  // スクロール時のイベント
  $(window).scroll(function () {
    // //   // fadeinクラスに対して順に処理を行う
      $(".fadein").each(function () {
  
    // //     // スクロールした距離
        let scroll = $(window).scrollTop();
    // //     // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
          $(this).css("opacity", "1");
          $(this).css("transform", "translateY(0)");
        }
      });
    });

    $(window).scroll(function () {
      $(".slide-left").each(function () {
  
        var scroll = $(window).scrollTop();
  
        var target = $(this).offset().top;
  
        var windowHeight = $(window).height();
  
        if (scroll > target - windowHeight + $(this).outerHeight()) {
          // outerHeight()はpaddingを含めた高さを取得する
          $(this).addClass("anime-left");
        }
      });
    });
    // // これを複数使う
    $(window).scroll(function () {
      $(".slide-right").each(function () {
  
        var scroll = $(window).scrollTop();
  
        var target = $(this).offset().top;
  
        var windowHeight = $(window).height();
  
        if (scroll > target - windowHeight + $(this).outerHeight()) {
          // outerHeight()はpaddingを含めた高さを取得する
          $(this).addClass("anime-right");
        }
      });
    });

    $('a[href^="#"]').click(function() {
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $('body,html').animate({scrollTop : position}, 600, 'swing');
        return false;
    });

    $('.toggle_btn').on('click', function() {
      if ($('header').hasClass('open')) {
        $('header').removeClass('open');
      } else {
        $('header').addClass('open');
      }
    });

    $(".navi-menu a").on("click", function () {
      $("header").toggleClass("open");
    });
});