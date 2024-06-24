jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
        
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1000);
        $(".imglen").animate({marginTop:-400},1000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    })
})