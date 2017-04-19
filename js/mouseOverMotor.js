$( "#imgMotor" )
    .mouseover(function() {
    var texto = "<p id='textoMotor'>Hola</p>";
    $("#imgMotor").hide();
    $("#divMotor").append(texto)
})
    .mouseout(function() {
    $("#textoMotor").remove();
    $("#imgMotor").show();
});