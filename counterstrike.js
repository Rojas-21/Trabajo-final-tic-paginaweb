// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Definimos la fecha objetivo (Ejemplo: Un torneo el 1 de Enero del próximo año)
    const targetDate = new Date("Jan 1, 2026 08:00:00").getTime();

    // Referencias a los elementos del HTML
    const daysSpan = document.getElementById('dias');
    const hoursSpan = document.getElementById('horas');
    const minutesSpan = document.getElementById('minutos');
    const secondsSpan = document.getElementById('segundos');
    const countdownDiv = document.getElementById('countdown');

    // Función que se ejecuta cada segundo
    const updateCountdown = function() {
        const now = new Date().getTime();
        const distance = targetDate - now; // Distancia en milisegundos

        // Lógica de cálculo de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar el HTML
        if (daysSpan) daysSpan.textContent = days + "D";
        if (hoursSpan) hoursSpan.textContent = hours + "H";
        if (minutesSpan) minutesSpan.textContent = minutes + "M";
        if (secondsSpan) secondsSpan.textContent = seconds + "S";

        // Cuando la cuenta regresiva termina
        if (distance < 0) {
            clearInterval(timerInterval);
            if (countdownDiv) {
                countdownDiv.innerHTML = "¡El torneo ha comenzado!";
                countdownDiv.style.fontSize = "1.5em";
            }
        }
    };

    // Ejecuta la función por primera vez inmediatamente
    updateCountdown();

    // Ejecuta la función cada 1000 milisegundos (1 segundo)
    const timerInterval = setInterval(updateCountdown, 1000);
});