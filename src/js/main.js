$("a.target-burger").click(function (){
  $("nav.main-nav, a.target-burger").toggleClass("toggled");
});
$(document).mouseup(function (e){  
  let div = $("nav.main-nav, a.target-burger");
  if (!div.is(e.target) && div.has(e.target).length === 0) {  
    div.removeClass("toggled");
  }
});
$("a.item").click(function (){
  $("nav.main-nav, a.target-burger").removeClass("toggled");
});

// FAQ / Раскрывающиеся вкладки
jQuery("document").ready(function ($) {
  $(".dropdown__top").click(function () {
    if ($(this).parent(".dropdown").hasClass("open")) {
      $(this).parent(".dropdown").removeClass("open");
      $(this).siblings(".dropdown__btm").slideUp(500);
    } else {
      $(".dropdown").removeClass("open");
      $(".dropdown .dropdown__btm").slideUp(500);
      $(this).parent(".dropdown").addClass("open");
      $(this).siblings(".dropdown__btm").slideDown(500);
    }
  });
});