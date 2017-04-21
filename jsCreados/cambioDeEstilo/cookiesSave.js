
$( document ).ready(function() {
    var texto = $.cookie("cssCambio");
    if(texto == null) {
        $.cookie('cssCambio','css/style.css');
        var texto = $.cookie("cssCambio");
        cambiarEstilo1a2();
    }
    else {
        var texto = $.cookie("cssCambio");

        if(texto=="css/estilo.css") {
            cambiarEstilo2a1();
        }
        else {
            cambiarEstilo1a2();
        }
    }
});