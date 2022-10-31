var width = $(window).width(); 

$(function(){
    setTimeout(function(){
      $('html, body')
      .css({
        'overflow': 'auto'
      })
      .animate({
        scrollTop: $('.myDiv').offset().top
      }, 3500);
    }, 3500);
  });

window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        $("#header").css("background","rgba(211,211,211,0.8");
        $("#logoname").css("color","#000");
        $("#header").css("color","#000");
        $("#navigation").css("color","rgba(5, 26, 22, 1)");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgba(5, 26, 22, 1)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#logoname").css("color","#fff");
        $("#header").css("color","#fff");
        $("#navigation").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgba(255, 255, 255, 1)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},2800);

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });

  