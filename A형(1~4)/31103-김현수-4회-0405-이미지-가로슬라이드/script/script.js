jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })



    //일정간격 반복
    //imgslide의 왼쪽 여백 1200 줘
    //첫번째 이미지를 왼쪽 으로 보내
    //첫번째 이미지를 imglen의 마지막으로 보내
    //왼쪽 여백을 0로 바꿔

    setInterval(function(){
        $(".imglen").animate({marginLeft:-1200},1000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginLeft:0})
        })
    })

})