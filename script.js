$(function () {



    $(window).on("load", function () {
        $(".question-list-item > p").on("click", function () {
            if ($(":animated").length) return;
            $(this).parent().find("div").slideToggle("0.3s");
        });
    });



    // $('.question-list-item').click(function () {
    //     let $answer = $(this).find('.answer');

    //     if ($answer.hasClass('open')) {
    //         $answer.removeClass('open');
    //         $answer.slideUp();
    //         $(this).find('span').text('↓');

    //     } else {
    //         $answer.addClass('open');
    //         $answer.slideDown();
    //         $(this).find('span').text('^');
    //     }

});






let appear = false;
let pagetop = $('#page_top');
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) { //100pxスクロールしたら
        if (appear == false) {
            appear = true;
            pagetop.stop().animate({
                'bottom': '50px' //下から50pxの位置に
            }, 300); //0.3秒かけて現れる
        }
    } else {
        if (appear) {
            appear = false;
            pagetop.stop().animate({
                'bottom': '-100px' //下から-50pxの位置に
            }, 300); //0.3秒かけて隠れる
        }
    }
});
pagetop.click(function () {
$('body, html').animate({
    scrollTop: 0
}, 500); //0.5秒かけてトップへ戻る
return false;
});



});