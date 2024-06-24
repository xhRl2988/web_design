jQuery(document).ready(function(){
    $(function(){
        const tabBtn = $(".notice .title > ul >li");
        const tabCont = $(".notice .cont >div");

        tabCont.hide().eq(0).show();

        tabBtn.click(function(e){
            e.preventDefault();

            const index = $(this).index();

            $(this).addClass("active").siblings().removeClass("active");
            tabCont.eq(index).show().siblings().hide();
        });

        $(".nav>ul>li").mouseenter(function(){
            $(this).find(">ul").stop().slideDown();
        })
        $(".nav>ul>li").mouseleave(function(){
            $(this).find(">ul").stop().slideUp();
        })
        

        let currentIndex =0;
        setInterval(function(){
            let nextIndex = (currentIndex+1)%3;

            $(".slider").eq(currentIndex).fadeOut(800);
            $(".slider").eq(nextIndex).fadeIn(800);

            currentIndex = nextIndex;
        },3000)
    })
})