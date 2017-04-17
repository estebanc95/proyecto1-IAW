$("#estilo2").click(function() {
var texto = $.cookie("cssCambio");
$.cookie('cssCambio','css/estilos.css');
$('link[id="cascadaStyles"]').attr('href','css/estilo.css');
}
);


$("#estilo1").click(function() {
    var texto = $.cookie("cssCambio");
$.cookie('cssCambio','css/style.css');
$('link[id="cascadaStyles"]').attr('href','css/style.css');
}
                    );