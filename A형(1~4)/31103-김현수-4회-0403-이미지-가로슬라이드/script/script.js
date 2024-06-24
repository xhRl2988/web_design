jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
        $(".bgmenu").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
        $(".bgmenu").stop().slideUp()
    })



    //일정 간격으로 반복해
    setInterval(function(){
        //inglen을 움직여(왼쪽여백을 -1200)
        $(".imglen").animate({marginLeft:-1200},2000,function(){
            //첫번째 li를 막내로 집어넣기
            $(".imglen li:first").appendTo(".imglen")
            //inglen의 왼쪽여백을 0으로
            $(".imglen").css({marginLeft:0})
        })
    })

})