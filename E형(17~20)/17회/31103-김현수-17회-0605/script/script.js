jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    $(".notice li:first").click(function(){
        $(".popup,.bg_popup").show()
    })
    $(".p_bottom button").click(function(){
        $(".popup,.bg_popup").hide()
    })
})