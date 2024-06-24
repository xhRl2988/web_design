jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").animate({marginLeft:-1200},1000,function(){
            $(".imglen li:first").appendTo(".imglen>ul")
            $(".imglen").css({marginLeft:0})
        })
    })

    //탭2를 클릭하면
    //gal을 보여줘
    //notice는 숨겨줘
    //탭2에서 off 클래스 삭제
    //탭1에는 off 클래스 추가

    $("#tab2").click(function(){
        $(".gal").show()
        $(".notice").hide()
        $("#tab2").removeClass("off")
        $("#tab1").addClass("off")
    })
    $("#tab1").click(function(){
        $(".gal").hide()
        $(".notice").show()
        $("#tab1").removeClass("off")
        $("#tab2").addClass("off")
    })
})