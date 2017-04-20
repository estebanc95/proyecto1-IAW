$( "#imgMotor" ).click(function() {
    $("#claseDeComp,#tablaComp").empty();
    $("#claseDeComp").prepend("Motores");
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
        var motores=json.motores;
        for (i=0, len=motores.length; i<len ; i++){
            cargarElementos(0,motores[i],i);
        }
    });
});










