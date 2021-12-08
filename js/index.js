// スリックのスライダー
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:false,
    centerMode: true,
    centerPadding: '100px',
});

// モーダル表示ーーーーーーーーーーーーーーーーーーーー
$(function(){
  $('.js-modal-open').click(function() {
      $(modal).fadeIn();
        return false;
      });
  });
  $('.js-modal-close').click(function() {
      $('.js-modal').fadeOut();
        return false;
  });

// ハンバーガーメニューの表示と非表示ーーーーーーーーーーーーーーーーーーー
let nav = document.querySelector('.hamburger');
let box = document.querySelector('.hamburger_nav');
let openclose = function(el) {
  el.classList.toggle('nav-open');
}
nav.addEventListener('click', function() {
  openclose(box);
}, false);

// ハンバーガーボタンのopeとcloseの切り替えーーーーーーーーーーーーーーーーーーーーーー
let imgList = {image1:"./img/sp_menu_open.png", image2:"./img/sp_menu_close.png"};
let num = 1;
document.getElementById('js_hamburger').addEventListener('click', function(){
  num++;
  let imgPath = imgList['image'+num];
  document.querySelector('#js_hamburger img').src = imgPath;
  if (num === 2) {
    num = 0;
  } 
});