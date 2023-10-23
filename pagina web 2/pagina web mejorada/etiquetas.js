
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones de filtro
    const botonesFiltro = document.querySelectorAll(".filtro");

    // Obtén todos los enlaces de la lista
    const listaEnlaces = document.querySelectorAll("ul li a");

    // Agrega un controlador de eventos a cada botón
    botonesFiltro.forEach(function (boton) {
        boton.addEventListener("click", function () {
            // Obtiene la etiqueta del botón de filtro
            const etiqueta = boton.getAttribute("data-tag");

            // Oculta todos los enlaces
            listaEnlaces.forEach(function (enlace) {
                enlace.style.display = "none";
            });

            // Muestra los enlaces con la etiqueta correspondiente
            listaEnlaces.forEach(function (enlace) {
                const enlaceEtiqueta = enlace.getAttribute("data-tag");
                if (enlaceEtiqueta === etiqueta) {
                    enlace.style.display = "block";
                }
            });
        });
    });
});