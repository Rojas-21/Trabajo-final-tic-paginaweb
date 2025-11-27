document.addEventListener('DOMContentLoaded', function() {
    // 1. Lógica para mostrar/ocultar el menú de Contacto (Dropdown)
    const contactoToggle = document.querySelector('.contacto-toggle');
    const redesSubmenu = document.querySelector('.redes-submenu');

    if (contactoToggle && redesSubmenu) {
        contactoToggle.addEventListener('click', function(e) {
            e.preventDefault();
            redesSubmenu.classList.toggle('show');
        });
        
        document.addEventListener('click', function(e) {
            if (!contactoToggle.contains(e.target) && !redesSubmenu.contains(e.target)) {
                redesSubmenu.classList.remove('show');
            }
        });
    }

    // --- FUNCIONALIDAD DINÁMICA: Carga de Reglas ---
    const reglasPanel = document.getElementById('reglas-panel');
    const reglasButtons = document.querySelectorAll('.btn-reglas');

    const reglasData = {
        rl: { 
            titulo: "Reglas Oficiales: Copa Turbo de Rocket League",
            contenido: "<li>Modo de juego: Competitivo 3v3.</li><li>Servidor: Sudamérica (Default).</li><li>Duración del partido: 5 minutos.</li><li>No se permiten reinicios por abandono.</li>"
        },
        mc: {
            titulo: "Reglas Oficiales: Desafío BedWars",
            contenido: "<li>Plataforma: Java Edition (1.8 o superior).</li><li>Uso de cualquier cliente externo (hack) resulta en descalificación.</li><li>Prohibido el uso de TNT y bolas de fuego en la base inicial.</li>"
        },
        cr: {
            titulo: "Reglas Oficiales: Batalla Real de Clash Royale",
            contenido: "<li>Formato: Torneo (sin límites de nivel de carta).</li><li>El mazo debe ser reportado 1 hora antes.</li><li>Si un jugador pierde conexión, la partida continúa.</li>"
        }
    };

    reglasButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gameId = this.getAttribute('data-game-id');
            const data = reglasData[gameId];
            
            let htmlContent = `
                <h2>${data.titulo}</h2>
                <ul style="list-style: disc; padding-left: 40px; margin-top: 15px;">
                    ${data.contenido}
                </ul>
                <p style="margin-top: 20px;">¡Es responsabilidad del equipo leer todas las reglas antes de inscribirse!</p>
            `;
            
            reglasPanel.innerHTML = htmlContent;
            reglasPanel.style.display = 'block';

            reglasPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // --- Lógica de Animación de Scroll para hacer visibles los torneos ---
    const torneos = document.querySelectorAll('.torneo-card');

    function checkScroll() {
        // La animación se dispara cuando el elemento está un 15% arriba del final de la ventana
        const triggerBottom = window.innerHeight * 0.85; 

        torneos.forEach(torneo => {
            const torneoTop = torneo.getBoundingClientRect().top;
            if (torneoTop < triggerBottom) {
                torneo.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    
    // **CORRECCIÓN:** Ejecutamos la función al cargar para mostrar los primeros elementos.
    checkScroll(); 
});
  const contactoLinks = document.querySelectorAll(".redes-submenu a");
  const contactoPanel = document.getElementById("contacto-panel");

  const plantillas = {
    discord: `
        <div class="social-item discord">
        <img class="icono" src="img/disc.png" alt="Discord">
        <div>
          <strong>Discord:</strong> <a href="https://discord.gg/HeduBGVU"_blank">jr_xplay#1234</a>
          <div><small>Click para abrir tu Discord</small></div>
        </div>
      </div>
    `,
    gmail: `
        <div class="social-item gmail">
        <img class="icono" src="img/gmail.png" alt="Gmail">
        <div>
          <strong>Gmail:</strong> <a href="mailto:jr.xplay@gmail.com">jr.xplay@gmail.com</a>
          
        </div>
      </div>
    `,
    instagram: `
      <div class="social-item instagram">
        <img class="icono" src="img/ig.png" alt="Instagram">
        <div>
          <strong>Instagram:</strong> <span>@jr.xplay</span>
          <div><small>Perfil y novedades</small></div>
        </div>
      </div>
    `
  };

  contactoLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const red = link.dataset.red;
      const html = plantillas[red] || "";
      if (!html) return;

      contactoPanel.innerHTML = html;
      contactoPanel.classList.add("visible");
      contactoPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });


