$( "#precargado2" ).click(function() {

    //Scrollea hasta el cuadro correspondiente
    $('html, body').animate({
        scrollTop: $("#menuDeArmado").offset().top
    }, 500);

    var myjson =$.getJSON("json/precargado2.json", function(json) {
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
        
        
        var idMarco = marco.id;
        var idMotor = motor.id;
        var idBateria = bateria.id;
        var idCamara = camara.id;
        var idGps = gps.id;
        var idMando = mando.id;
        
        //cargarComponentes(idMotor,idMarco,idMando,idBateria,idCamara,idGps);
        //BORRAR TODOS LOS CARGAR Y LLAMAR A CARGARCOMPONENTE CON CADA ID OBTENIDO
        
    });
});

