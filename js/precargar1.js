$( "#precargado1" ).click(function() {
    
    //Scrollea hasta el cuadro correspondiente
    $('html, body').animate({
        scrollTop: $("#menuDeArmado").offset().top
    }, 500);

    var myjson =$.getJSON("json/precargado1.json", function(json) {
        console.log(json);
        //si logre entrar

        var marco=json.marco;
        cargar(marco,"#imgMarco");
        var motor= json.motor;
        cargar(motor,"#imgMotor");
        var bateria = json.bateria; cargar(bateria,"#imgBateria");
        var camara = json.camara;
        cargar(camara,"#imgCamara");
        var gps = json.GPS;
        cargar(gps,"#imgGps");
        var mando = json.radioreceptor;
        cargar(mando,"#imgMando");
    });
});



function cargar(modelo,i,j){
    $(i).attr('src',modelo.imagen);


}
