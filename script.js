document.addEventListener("DOMContentLoaded", () => {
  // Menú JUEGOS desplegable
  const toggle = document.querySelector(".menu-toggle");
  const submenu = document.querySelector(".submenu");

  if (toggle && submenu) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
        submenu.classList.remove("show");
      }
    });
  }

  // Animación de juegos destacados
  const juegos = document.querySelectorAll(".juego");

  const mostrarJuego = () => {
    juegos.forEach(juego => {
      const rect = juego.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        juego.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", mostrarJuego);
  mostrarJuego();

  // Menú CONTACTO desplegable
  const contactoToggle = document.querySelector(".contacto-toggle");
  const redesSubmenu = document.querySelector(".redes-submenu");

  if (contactoToggle && redesSubmenu) {
    contactoToggle.addEventListener("click", (e) => {
      e.preventDefault();
      redesSubmenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!contactoToggle.contains(e.target) && !redesSubmenu.contains(e.target)) {
        redesSubmenu.classList.remove("show");
      }
    });
  }

  // Carga dinámica de redes
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
});

