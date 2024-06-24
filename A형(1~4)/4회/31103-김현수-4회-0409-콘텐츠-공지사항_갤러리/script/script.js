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
        //팝업을 보여줘
    
    //버튼을 클릭하면
        //팝업을 숨겨줘


    $(".notice li").click(function(){
        $(".popup").show()
    })
    
    $("button").click(function(){
        $(".popup").hide()
    })

})