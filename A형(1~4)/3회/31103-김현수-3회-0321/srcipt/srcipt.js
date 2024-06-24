jQuery(document).ready(function(){

    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown()
    })
    
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp()
    })

})