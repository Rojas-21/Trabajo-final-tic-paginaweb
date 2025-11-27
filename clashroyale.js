// Espera a que todo el DOM (la estructura HTML) esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtenemos referencias a los elementos que vamos a manipular
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // 2. Añadimos un "escuchador de eventos" (event listener) al botón
    menuToggle.addEventListener('click', function() {
        // 3. Cuando se hace clic, alternamos (quitamos/ponemos) la clase 'active'
        //    que definimos en CSS para mostrar/ocultar el menú.
        sidebar.classList.toggle('active');

        // Opcional: Cambiamos el texto del botón para que indique que hace
        if (sidebar.classList.contains('active')) {
            menuToggle.textContent = '❌ Cerrar Menú';
        } else {
            menuToggle.textContent = '☰ Menú Lateral';
        }
    });

    // Opcional: Si el usuario hace clic en un enlace del sidebar, se cierra
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            menuToggle.textContent = '☰ Menú Lateral';
        });
    });
});