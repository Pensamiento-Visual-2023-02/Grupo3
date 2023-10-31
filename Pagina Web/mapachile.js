$(document).ready(function(){

    var regiones = $(".region")

    var textooriginal = $("#titulo").text();

    regiones.mouseenter(function(){
        var idregion = $(this).attr("id")
        $("#titulo").text(idregion);
        $(this).fadeTo("fast",0.5);


    });

    regiones.mouseleave(function(){
        $("#titulo").text(textooriginal);
        $(this).fadeTo("fast",1);

    });

});