jQuery(document).ready(function(){

    //메인에 마우스를 올리면
    //해당 서블르 찾아서 슬라이드 다운

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })

    //메인에 마우스를 때면
    //해당 서블르 찾아서 슬라이드 업

    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })
})