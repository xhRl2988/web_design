jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })


    //1번 그림이 화면에 보이게 설정
    // ==> li 인덱스값이 0보다 크면 숨겨
    
    $(".imgslide li:gt(0)").hide()
    setInterval(function(){
        $(".imgslide li:first").fadeOut()
        .next("li").fadeIn()
        .end().appendTo(".imgslide>ul")
    },1000+)
    //일정간격으로 반복해
        //1번 그림을 페이드 아웃시켜
        //다음 그림 페이드인해
        //1번 그림을 맨 뒤로 보내

    
    
    





})