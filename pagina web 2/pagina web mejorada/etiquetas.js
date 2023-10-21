function selectFilterGroup(group) {
    // Mostrar todas las imágenes cuando se selecciona "Todos"
    if (group === "todos") {
        const imagenes = document.querySelectorAll(".imagen");
        imagenes.forEach(function (imagen) {
            imagen.style.display = "block";
        });
        return;
    }

    // Ocultar todas las imágenes
    const imagenes = document.querySelectorAll(".imagen");
    imagenes.forEach(function (imagen) {
        imagen.style.display = "none";
    });

    // Mostrar solo las imágenes con la etiqueta seleccionada
    const etiqueta = group; // La etiqueta es igual al ID del grupo
    imagenes.forEach(function (imagen) {
        const etiquetasImagen = imagen.getAttribute("data-tags");
        if (etiquetasImagen.includes(etiqueta)) {
            imagen.style.display = "block";
        }
    });
}