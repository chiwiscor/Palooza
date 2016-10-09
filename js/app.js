$(document).foundation()

$("[data-toggle-dia]").click(function(ev){
  const panel = $(this).data("toggleDia")
  console.log(panel)
  $("#lineup-tabs").foundation("selectTab",panel)
})

const $menuOff = $("#menuOff")
const $body = $("body")
const $contenedorCanvas=$(".js-off-canvas-exit")

$contenedorCanvas.click(function(eve){
  $body.addClass("fondo-imagen").removeClass("fondo-solido");
})

//para cuando se da click en el item del offCanvas
const $offCanvas = $("#offCanvas")
const $sticky = $("#data-sticky")

$offCanvas.find('li').click(function(ev){
  $body.addClass("fondo-imagen").removeClass("fondo-solido");
  $offCanvas.foundation('close')
  setTimeout(function(){
    $sticky.css('left','0px')
  }, 300)

})


//para agregar y/o quitar css al body
$menuOff.click(function(ev){
  $body.addClass("fondo-solido").removeClass("fondo-imagen");
})
