jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().fadeIn()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().fadeOut()
    })
})