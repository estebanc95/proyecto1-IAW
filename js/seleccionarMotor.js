$( "#imgMotor" ).click(function() {
  var data;
  $.getJSON("json/datosDron.json", function(data){
      $.each(data.motores, function(i,s){
        var elemento = $( ".parteDisp" )[i];
        elemento.append("<img src="+s.imagen+" alt=tt>");
        elemento.append("<p> "+s.nombre+" </p>");
        elemento.append( "<b>" + s.nombre + "</b>");
        console.log(s.nombre);
        console.log(s.marco);
      });
  });
  console.log(data.count);
});
