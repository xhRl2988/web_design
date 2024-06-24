jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub,.bg_menu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub,.bg_menu").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").animate({marginTop:-300},2000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    },1000)
})