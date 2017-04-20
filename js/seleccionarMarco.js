$( "#imgMarco" ).click(function() { 
    $("#claseDeComp,#tablaComp").empty();
    $("#claseDeComp").prepend("Marcos");
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
        var marcos=json.marcos;
        for (i=0, len=marcos.length; i<len ; i++){
            cargarElementos(1,marcos[i],i);
        }
    });
});

