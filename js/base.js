// ===== スリックPC =====
$(function () {
  $('.main_visual_slick_pc').slick({ //{}を入れる
    fade: true,
    autoplay: true, //自動再生
    arrows: false, //矢印非表示
    dots: false, //ドット状のナビを表示
    slidesToShow: 1, //表示するスライド数
    slidesToScroll: 1, //1回で動くスライド数
    //「オプション名: 値」の形式で書く
    //複数書く場合は「,」でつなぐ
  });
});
// ===== スリックSP =====
$(function () {
  $('.main_visual_slick_sp').slick({ //{}を入れる
    fade: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
// ===== ハンバーガーボタン =====
$(function () {
  $('.ham_btn').on('click', function () {
    $(this).toggleClass('ham_btn_close'),$('.sp_menu').toggleClass('sp_menu_display')
  });
});
// ===== SPメニュー（アコーディオン） =====
$(function () {
  $('.page_link_accordion').on('click', function () {
    $(this).toggleClass('page_link_accordion_close'),
      $('.page_link > li > dl > dd > ul').slideToggle()
  });
});