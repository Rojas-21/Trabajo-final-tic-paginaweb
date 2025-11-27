
document.addEventListener('DOMContentLoaded', function() {
 
    const targetDate = new Date("Jan 1, 2026 08:00:00").getTime();

 
    const daysSpan = document.getElementById('dias');
    const hoursSpan = document.getElementById('horas');
    const minutesSpan = document.getElementById('minutos');
    const secondsSpan = document.getElementById('segundos');
    const countdownDiv = document.getElementById('countdown');


    const updateCountdown = function() {
        const now = new Date().getTime();
        const distance = targetDate - now; 

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
        if (daysSpan) daysSpan.textContent = days + "D";
        if (hoursSpan) hoursSpan.textContent = hours + "H";
        if (minutesSpan) minutesSpan.textContent = minutes + "M";
        if (secondsSpan) secondsSpan.textContent = seconds + "S";

        if (distance < 0) {
            clearInterval(timerInterval);
            if (countdownDiv) {
                countdownDiv.innerHTML = "¡El torneo ha comenzado!";
                countdownDiv.style.fontSize = "1.5em";
            }
        }
    };


    updateCountdown();


    const timerInterval = setInterval(updateCountdown, 1000);
});