$('.nav_burg').on('click',function(){
     $('.top_menu-sp').slideToggle();
});

$('.top_menu-item-sp').on('click',function(){
     $('.top_menu-sp').slideToggle();
});


$('.menu_circle-image').hover(function(){
    $(this).children('.hover').stop().fadeToggle();
});

// $('.menu_circle-images').on('click',function(){
//     $(this).children('.bread').stop().slideToggle();
// });

$('#theTarget').skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 800,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'bubble',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : false,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 5000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
});

// wow.jsを起動するコード
new WOW().init();

if (window.matchMedia('all and (max-width:767px)').matches) { 
    $('.menu_circle-images').unbind("click");
}else{
    $('.menu_circle-images').on('click',function(){
        $(this).children('.bread').stop().slideToggle();
    });
}