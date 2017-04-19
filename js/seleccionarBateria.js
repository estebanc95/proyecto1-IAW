$( "#imgBateria" ).click(function() {
    $("#claseDeComp,#tablaComp").empty();
    $("#claseDeComp").prepend("Baterías");
    $("#claseDeComp").append("<hr>");

    //Scrollea hasta el cuadro correspondiente
    $('html, body').animate({
        scrollTop: $("#textoComponentes").offset().top
    }, 500);

    var myjson =$.getJSON("json/datosDron.json", function(json) {
        console.log(json);
        //si logre entrar
        var i=0;
        var len=0;
        var baterias=json.baterias;
        for (i=0, len=baterias.length; i<len ; i++){
            cargarBaterias(baterias[i],i);
        }
    });
});



function cargarBaterias(modelo,i){
    var htmlSave = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"+
        "<div id='parteDeComp' class='parteDisp'>"+
        modelo.voltaje+ "<img src='" + modelo.imagen + "' class='img-responsive center-block' alt='Responsive image'/>" + "</div></div>";

    $("#tablaComp").append(htmlSave);


}
