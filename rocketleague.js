// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos
    const toggleButton = document.getElementById('rank-info-toggle');
    const rankDisplay = document.getElementById('rank-display');

    // Estado para saber si el contenido ya está visible
    let isRankListVisible = false;

    // Contenido dinámico a cargar
    const rankListHTML = `
        <ul style="list-style-type: none; padding: 0; color: #efefef;">
            <li>🥇 Supersónico Leyenda</li>
            <li>💎 Diamante</li>
            <li>🪙 Platino</li>
            <li>🥈 Oro</li>
            <li>🥉 Plata</li>
        </ul>
        <p style="color: #ffd700; font-size: 0.9em;">¡Sigue jugando para subir!</p>
    `;

    // 2. Función para cargar/ocultar el contenido
    toggleButton.addEventListener('click', function() {
        if (!isRankListVisible) {
            // Cargar el contenido
            rankDisplay.innerHTML = rankListHTML;
            toggleButton.textContent = 'Ocultar Rangos';
            isRankListVisible = true;
        } else {
            // Ocultar el contenido y mostrar el mensaje original
            rankDisplay.innerHTML = '<p>Haz clic en el botón "Ver Rangos" para ver la lista de las divisiones competitivas.</p>';
            toggleButton.textContent = 'Ver Rangos';
            isRankListVisible = false;
        }
    });
});