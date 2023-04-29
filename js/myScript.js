$("#small-header").css("display","none");
$('#menu-click').click(function(){
    var a =   $('#small-header').css('display');
    if(a=="none"){
        $("#small-header").css("display","flex");
    }else{
        $("#small-header").css("display","none");

    }
})
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header-top').hide();
      $('.main-header').css("background","grey")
    } else {
      $('.header-top').show();
      $('.main-header').css("background","")
    }
  });
