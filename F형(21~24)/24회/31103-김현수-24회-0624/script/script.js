jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub,.bg_menu").stop().slideDown()
    }) 
    $(".main>li").mouseout(function(){
        $(".sub,.bg_menu").stop().slideUp()
    }) 

    setInterval(function(){
        $(".imglen").animate({marginTop:-350},2000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    })

    $(".notice li:first").click(function(){
        $(".popup,.bg_popup").show()
    })
    $(".p_button").click(function(){
        $(".popup,.bg_popup").hide()
    })
})