
document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones de filtro
    const botonesFiltro = document.querySelectorAll(".filtro");

    // Agrega un controlador de eventos a cada botón
    botonesFiltro.forEach(function (boton) {
        boton.addEventListener("click", function () {
            // Obtiene la etiqueta del botón de filtro
            const etiqueta = boton.getAttribute("data-tag");

            // Muestra todas las imágenes con la etiqueta correspondiente y oculta las demás
            const imagenes = document.querySelectorAll(".imagen");
            imagenes.forEach(function (imagen) {
                const etiquetasImagen = imagen.getAttribute("data-tags");
                if (etiquetasImagen.includes(etiqueta)) {
                    imagen.style.display = "block";
                } else {
                    imagen.style.display = "none";
                }
            });
        });
    });
});