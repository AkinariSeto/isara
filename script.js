$(function () {


        $(".page-box-title .fa-angle-up").hide();
    $(".page-box-title").click(function(){
        $(this).next().slideToggle(200);
        $(this).find(".fa-angle-down").toggle();
        $(this).find(".fa-angle-up").toggle();
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