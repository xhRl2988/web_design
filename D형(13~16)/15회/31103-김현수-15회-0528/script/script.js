jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub,.bgmenu").stop().slideDown();
    })
    $(".main>li").mouseout(function(){
        $(".sub,.bgmenu").stop().slideUp();
    })
})