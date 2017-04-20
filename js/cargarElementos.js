function cargarElementos(num,modelo,i){
    var htmlSave = "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"+
        "<div id='parteDeComp' class='parteDisp'>"+
        modelo.modelo + "<br>" + modelo.marca + "<img onClick='cambiarComponentes("+num+","+modelo.id+")'  src='" + modelo.imagen + "' class='img-responsive center-block imgClick' alt='Responsive image'/>" + "</div></div>";

    $("#tablaComp").append(htmlSave);

}