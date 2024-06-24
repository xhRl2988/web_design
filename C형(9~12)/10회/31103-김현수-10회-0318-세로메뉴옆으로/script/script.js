jQuery(document).ready(function(){

    //메인의 li에 마우스를 올리면
    //이것의 서브를 찾아서 한던거 멈추고 슬라이드 다운해

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    //메인의 li에 마우스를 치우면
    //이것의 서브를 찾아서 한던거 멈추고 슬라이드 업해

    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })


})