jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").animate({marginTop:-300},2000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    })

    $("#tab1").click(function(){
        $("#tab1").removeClass("off")
        $("#tab2").addClass("off")
        $(".notice").show()
        $(".gal").hide()
    })
    $("#tab2").click(function(){
        $("#tab2").removeClass("off")
        $("#tab1").addClass("off")
        $(".gal").show()
        $(".notice").hide()
    })

    $(".notice li:first").click(function(){
        $(".popup").show()
    })
    $(".p_button").click(function(){
        $(".popup").hide()
    })
})