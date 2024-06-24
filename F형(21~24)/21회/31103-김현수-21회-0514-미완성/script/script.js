jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    $(".imgslide li:gt(0)").hide()
    setInterval(function(){
        $(".imgslide li:first").fadeOut()
        .next("li").fadeIn()
        .end().appendTo(".imgslide>ul")
    },1000)
})