var texto = $.cookie("cssCambio");
if(texto == null) {
$.cookie('cssCambio','css/style.css');
var texto = $.cookie("cssCambio");
$('link[id="cascadaStyles"]').attr('href',texto);
}
else {
var texto = $.cookie("cssCambio");
$('link[id="cascadaStyles"]').attr('href',texto);
}