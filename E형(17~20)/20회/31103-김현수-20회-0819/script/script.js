jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().fadeIn()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().fadeOut()
    })

    $(".notice li:first").click(function(){
        $(".popup").show()
        $(".bg_popup").show()
    })
    $(".p_button").click(function(){
        $(".popup").hide()
        $(".bg_popup").hide()
    })

    setInterval(function(){
        $(".imglen").animate({marginLeft:-100 + "%"},2000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginLeft:0})
        })
    })

})