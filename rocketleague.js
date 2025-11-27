
document.addEventListener('DOMContentLoaded', function() {

    const toggleButton = document.getElementById('rank-info-toggle');
    const rankDisplay = document.getElementById('rank-display');


    let isRankListVisible = false;


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


    toggleButton.addEventListener('click', function() {
        if (!isRankListVisible) {
    
            rankDisplay.innerHTML = rankListHTML;
            toggleButton.textContent = 'Ocultar Rangos';
            isRankListVisible = true;
        } else {
    
            rankDisplay.innerHTML = '<p>Haz clic en el botón "Ver Rangos" para ver la lista de las divisiones competitivas.</p>';
            toggleButton.textContent = 'Ver Rangos';
            isRankListVisible = false;
        }
    });
});