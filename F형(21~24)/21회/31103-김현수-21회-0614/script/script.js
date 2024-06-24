jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    })

    $(".imgslide li:gt(0)").hide()
    setInterval(function(){
        $(".imgslide li:first").fadeOut()
        .next("li").fadeIn()
        .end().appendTo(".imgslide>ul")
    },2000)

    $("#tab1").click(function(){
        $("#tab1").removeClass("off")
        $("#tab2").addClass("off")
        $(".notice").show()
        $(".gal").hide()
    })
    $("#tab2").click(function(){
        $("#tab2").removeClass("off")
        $("#tab1").addClass("off")
        $(".notice").hide()
        $(".gal").show()
    })

    $(".notice li:first").click(function(){
        $(".popup").show()
    })

    $(".p_button").click(function(){
        $(".popup").hide()
    })
})