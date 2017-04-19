$("#estilo2").click(function() {
    var texto = $.cookie("cssCambio");
    $.cookie('cssCambio','css/estilo.css');
    $('link[id="cascadaStyles"]').attr('href','css/estilo.css');
    $("#headerEstilo1").hide();
    $("#headerEstilo2").show();
    $("#infoTexto").hide();

}
                   );


$("#estilo1").click(function() {
    var texto = $.cookie("cssCambio");
    $.cookie('cssCambio','css/style.css');
    $('link[id="cascadaStyles"]').attr('href','css/style.css');
    $("#headerEstilo1").show();
    $("#headerEstilo2").hide();
    $("#infoTexto").show();
}
                   );