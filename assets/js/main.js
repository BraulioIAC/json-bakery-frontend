/* =========================================================
   Burri Brownies — interacción
   1. Catálogo con filtros
   2. Opiniones
   3. Enlaces de contacto y año del footer
   4. Menú móvil (offcanvas)
   ========================================================= */
(() => {
  "use strict";

  /* ---------- 4. Menú móvil ---------- */
  // En móvil, al tocar un enlace se cierra el menú y luego se hace scroll a la sección.
  const offcanvasEl = document.getElementById("menuOffcanvas");

  offcanvasEl.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      if (!offcanvasEl.classList.contains("show")) return; // escritorio: comportamiento normal
      e.preventDefault();
      const destino = document.querySelector(enlace.getAttribute("href"));
      offcanvasEl.addEventListener(
        "hidden.bs.offcanvas",
        () => destino?.scrollIntoView({ behavior: "smooth" }),
        { once: true }
      );
      bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl).hide();
    });
  });
})();
