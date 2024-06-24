jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })



    //세로 슬라이드
    //무한반복
    //marginTop을 -300준다  
    //첫번째 이미지를 위로 올려준다 
    //첫번째 이미지를 imglen의 마지막으로 이동시킨다
    //marginTop을 0을 준다

    setInterval(function(){
        $(".imglen").animate({marginTop:-300},1000,function(){
            $(".imglen li:first").appendTo(".imglen>ul")
            $(".imglen").css({marginTop:0})
        })
    })
    

    
    //공지사항의 첫번째 li를 클릭하면 
        //모달을 보여줘

    // $(".notice li:first").click(function(){
    //     $(".modal").show()
    // })

    //버튼을 클릭하면
        //모달을 숨겨줘
    
    // $("button").click(function(){
    //     $(".modal").hide()
    // })


    //tab1을 클릭하면
    //notice 보여줘
    //gal 숨겨줘
    //tab1에서 class off 지워줘
    //tab2에 class off 추가해

    $("#tab1").click(function(){
        $(".notice").show()
        $(".gal").hide()
        $("#tab1").removeClass("off")
        $("#tab2").addClass("off")
    })


    //tab2을 클릭하면
    //gal 보여줘
    //notice 숨겨줘
    //tab2에서 class off 지워줘
    //tab1에 class off 추가해

    $("#tab2").click(function(){
        $(".gal").show()
        $(".notice").hide()
        $("#tab2").removeClass("off")
        $("#tab1").addClass("off")
    })

})