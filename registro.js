let totalInscritos = Number(localStorage.getItem("totalInscritos")) || 0;

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const mensaje = document.getElementById("mensaje");
  const contador = document.getElementById("contador");

  // Inicializar contador al cargar
  contador.textContent = totalInscritos;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página

    // Capturar valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const idJuego = document.getElementById("idjuego").value.trim();
    const plataforma = document.getElementById("plataforma").value;

    // Validaciones
    if (nombre === "" || apellido === "") {
      mensaje.textContent = "Nombre y apellido son obligatorios.";
      mensaje.style.color = "red";
      mensaje.classList.remove("oculto");
      return;
    }

    const regexCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!regexCorreo.test(correo)) {
      mensaje.textContent = "El correo no es válido.";
      mensaje.style.color = "red";
      mensaje.classList.remove("oculto");
      return;
    }

    if (idJuego === "") {
      mensaje.textContent = "El ID del juego es obligatorio.";
      mensaje.style.color = "red";
      mensaje.classList.remove("oculto");
      return;
    }

    if (plataforma === "") {
      mensaje.textContent = "Debes seleccionar una plataforma.";
      mensaje.style.color = "red";
      mensaje.classList.remove("oculto");
      return;
    }

    // Si todo está bien → contador + mensaje
    totalInscritos++;
    localStorage.setItem("totalInscritos", totalInscritos);

    mensaje.textContent = "¡Registrado correctamente!";
    mensaje.style.color = "green";
    mensaje.classList.remove("oculto");

    contador.textContent = totalInscritos;

    formulario.reset(); // limpia el formulario

    // Opcional: ocultar mensaje después de 3 segundos
    setTimeout(() => {
      mensaje.classList.add("oculto");
    }, 3000);
  });
});
