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