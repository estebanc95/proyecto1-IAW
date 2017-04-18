$( "#precargado1" ).click(function() {
    $(".imagenComp").empty();



    //Scrollea hasta el cuadro correspondiente
    $('html, body').animate({
        scrollTop: $("#menuDeArmado").offset().top
    }, 500);

    var myjson =$.getJSON("json/precargado1.json", function(json) {
        console.log(json);
        //si logre entrar

        var marco=json.marco;
        cargar(marco,"imgMarco","#divMarco");
        var motor= json.motor;
        cargar(motor,"imgMotor","#divMotor");
        var bateria = json.bateria;
        cargar(bateria,"imgBateria","#divBateria");
        var camara = json.camara;
        cargar(camara,"imgCamara","#divCamara");
        var gps = json.GPS;
        cargar(gps,"imgGps","#divGps");
        var mando = json.radioreceptor;
        cargar(mando,"imgMando","#divMando");
    });
});



function cargar(modelo,i,j){
    var htmlSave = "<img id='"+i+ "' src='" + modelo.imagen + "' class='img-responsive center-block' alt='Responsive image'/>" + "</div></div>";
    $(j).append(htmlSave);


}
