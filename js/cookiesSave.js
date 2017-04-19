var texto = $.cookie("cssCambio");
if(texto == null) {
    $.cookie('cssCambio','css/style.css');
    var texto = $.cookie("cssCambio");
    $('link[id="cascadaStyles"]').attr('href',texto);
    $("#headerEstilo1").show();
    $("#headerEstilo2").hide();
}
else {
    var texto = $.cookie("cssCambio");
    
    if(texto=="css/estilo.css") {
        $("#headerEstilo1").hide();
        $("#headerEstilo2").show();
        $("#infoTexto").hide();
    }
    else {
        $("#headerEstilo1").show();
        $("#headerEstilo2").hide();
        $("#infoTexto").show();
    }
    $('link[id="cascadaStyles"]').attr('href',texto);
}