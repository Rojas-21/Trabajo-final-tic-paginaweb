
document.addEventListener('DOMContentLoaded', function() {
   
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');


    menuToggle.addEventListener('click', function() {

        sidebar.classList.toggle('active');


        if (sidebar.classList.contains('active')) {
            menuToggle.textContent = '❌ Cerrar Menú';
        } else {
            menuToggle.textContent = '☰ Menú Lateral';
        }
    });

    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            menuToggle.textContent = '☰ Menú Lateral';
        });
    });
});