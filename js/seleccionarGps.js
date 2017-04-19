$( "#imgGps" ).click(function() {
    $("#claseDeComp,#tablaComp").empty();
    $("#claseDeComp").prepend("GPS");
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
        var gps=json.gps;
        for (i=0, len=gps.length; i<len ; i++){
            cargarGps(gps[i],i);
        }
    });
});



function cargarGps(modelo,i){
    var htmlSave = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"+
        "<div id='parteDeComp' class='parteDisp'>"+
        modelo.nombre + "<br>" + modelo.modelo + "<img src='" + modelo.imagen + "' class='img-responsive center-block' alt='Responsive image'/>" + "</div></div>";

    $("#tablaComp").append(htmlSave);


}
