// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos
    const modal = document.getElementById('crafting-modal');
    const openButton = document.getElementById('show-crafting-modal');
    const closeButton = document.querySelector('.close-button');

    // 2. Función para abrir el modal
    openButton.addEventListener('click', function() {
        // Agregamos la clase 'visible' para mostrarlo (definida en CSS)
        modal.classList.add('visible');
    });

    // 3. Función para cerrar el modal usando el botón 'x'
    closeButton.addEventListener('click', function() {
        // Removemos la clase 'visible' para ocultarlo
        modal.classList.remove('visible');
    });

    // 4. Función para cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        // Si el evento de clic ocurrió exactamente en el fondo del modal (no en el contenido)
        if (event.target === modal) {
            modal.classList.remove('visible');
        }
    });
});