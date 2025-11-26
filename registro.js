let totalInscritos = 0;

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const mensaje = document.getElementById("mensaje");
  const contador = document.getElementById("contador");

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
      return;
    }

    const regexCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!regexCorreo.test(correo)) {
      mensaje.textContent = "El correo no es válido.";
      mensaje.style.color = "red";
      return;
    }

    if (isNaN(idJuego) || idJuego === "") {
      mensaje.textContent = "El ID del juego debe ser un número.";
      mensaje.style.color = "red";
      return;
    }

    if (plataforma === "") {
      mensaje.textContent = "Debes seleccionar una plataforma.";
      mensaje.style.color = "red";
      return;
    }

    // Si todo está bien → contador + mensaje
    totalInscritos++;
    mensaje.textContent = "¡Registrado correctamente!";
    mensaje.style.color = "green";
    contador.textContent = totalInscritos;

    formulario.reset(); // limpia el formulario
  });
});
