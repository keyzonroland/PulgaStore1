// RESUMEN DE IMPLEMENTACIÓN DEL PLUGIN JQUERY FANCYBOX
// 1. Se descargaron e incluyeron los archivos de jQuery y Fancybox (JS y CSS) en el proyecto.
// 2. Se agregaron los enlaces a estos archivos en el <head> de pulga_store.html y contacto.html.
// 3. Se modificó la galería de imágenes y la imagen decorativa para que usen Fancybox, envolviendo cada imagen en un <a> con los atributos data-fancybox y data-caption.
// 4. Se inicializó Fancybox usando $(document).ready() en ambos HTML.
// 5. (Opcional) Se pueden personalizar los estilos de Fancybox editando su CSS.
//
// Con esto, al hacer clic en una imagen de la galería o la imagen decorativa, se abrirá en un lightbox elegante.

// Script para mostrar fecha y hora actual en el contenedor con id fecha-hora
function mostrarFechaHora() {
    const contenedor = document.getElementById('fecha-hora');
    if (contenedor) {
        const ahora = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        contenedor.textContent = ahora.toLocaleString('es-ES', opciones);
    }
}

// Actualizar cada segundo
setInterval(mostrarFechaHora, 1000);
window.onload = mostrarFechaHora;
