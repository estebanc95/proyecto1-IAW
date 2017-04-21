$( "#randomModelos" ).click(function() {

    //Scrollea hasta el cuadro correspondiente
    $('html, body').animate({
        scrollTop: $("#menuDeArmado").offset().top
    }, 500);

    var myjson =$.getJSON("json/datosDron.json", function(json) {

        
        var randomMarco = Math.floor((Math.random() * json.marcos.length));
        var marco=json.marcos[randomMarco];
        var idMarco = marco.id;
        cargar(marco,"#imgMarco");
        
        
        var randomMotores = Math.floor((Math.random() * json.motores.length));
        var motor= json.motores[randomMotores];
        var idMotor = motor.id;
        cargar(motor,"#imgMotor");
        
        
        var randomBaterias = Math.floor((Math.random() * json.baterias.length));
        var bateria = json.baterias[randomBaterias];
        var idBateria = bateria.id;
        cargar(bateria,"#imgBateria");
        
        var randomCamaras = Math.floor((Math.random() * json.camaras.length));
        var camara = json.camaras[randomCamaras];
        var idCamara = camara.id;
        cargar(camara,"#imgCamara");
        
        
        
        var randomGPS = Math.floor((Math.random() * json.gps.length));
        var gps = json.gps[randomGPS];
        var idGps = gps.id;
        cargar(gps,"#imgGps");
        
        var randomControles = Math.floor((Math.random() * json.controles.length));
        var mando = json.controles[randomControles];
        var idMando = mando.id;
        cargar(mando,"#imgMando");
        
        
        //cargarComponentes(idMotor,idMarco,idMando,idBateria,idCamara,idGps);
        
        //BORRAR TODOS LOS CARGAR Y LLAMAR A CARGARCOMPONENTE CON CADA ID OBTENIDO
    });
});


