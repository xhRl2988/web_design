jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub,.bgmenu").stop().fadeIn();
    })
    $(".main>li").mouseout(function(){
        $(".sub,.bgmenu").stop().fadeOut();
    })
})