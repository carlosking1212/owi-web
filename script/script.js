
$(document).ready(function () {
    
    $(window).scroll(function(){

        var altura = $(window).scrollTop();
        $(".contador").html(altura);

        if(altura >= 400){
            $(".menu").css("background","rgb(45, 45, 114, 1)");
        }

        if(altura == 0){
            $(".menu").css("background","rgb(45, 45, 114, 0.4)");
        }
    });

    
});

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).on('scroll', function(){
    if(isScrolledIntoView('.titulo-planos')){
        $(".anim-google").css("animation-play-state","running");
        $(".anim-yahoo").css("animation-play-state","running");
        $(".anim-bing").css("animation-play-state","running");
        $(".anim-h2").css("animation-play-state","running");
    }

    if(isScrolledIntoView('.lista')){
        $(".anim-planos2").css("animation-play-state","running");
    }

    if(isScrolledIntoView('#inicio')){
        $("#link-inicio").addClass("active");
        $("#link-sobre").removeClass("active");
    }
    if(isScrolledIntoView('#sobre-borda')){
        $("#link-sobre").addClass("active");
        $("#link-inicio").removeClass("active");
        $("#link-como-funciona").removeClass("active");
    }
    if(isScrolledIntoView('#cf-borda')){
        $("#link-como-funciona").addClass("active");
        $("#link-sobre").removeClass("active");
        $("#link-planos").removeClass("active");
    }

    if(isScrolledIntoView('#pl-borda')){
        $("#link-planos").addClass("active");
        $("#link-como-funciona").removeClass("active");
    }
    
});


$.ajax({
    url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.4.1/jquery.appear.min.js',
    dataType: 'script',
    cache: true,
    success: function() {


        
        $("#inicio").appear();
        $("#sobre").appear();
        $("#como-funciona").appear();

        $("#anim-pesquisas").appear();

        $("body").on("appear", "#sobre", function() {
            
            $("#anim-sobre-left").addClass("anim-sobre-left");
            $("#anim-sobre-right").addClass("anim-sobre-right");
        });

        $("body").on("appear","#como-funciona", function(){
          
            $("#cf-anim1").addClass("anim-cf-funciona");
            $("#cf-anim2, #cf-anim3").addClass("anim-cf-funciona1");
            $("#cf-anim4").addClass("anim-cf-funciona2");
        });

    }
});


