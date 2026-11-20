/* =========================================================
   Burri Brownies — interacción
   1. Catálogo con filtros
   2. Opiniones
   3. Enlaces de contacto y año del footer
   4. Menú móvil (offcanvas)
   ========================================================= */
(() => {
  "use strict";

  const IMG_PATH = "./assets/img/";
  const TONOS = ["tone-pink", "tone-butter", "tone-mint", "tone-lilac"];

  /* ---------- Utilidades ---------- */
  const capitalizar = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);
  const formatoPrecio = (precio) => `$${precio} MXN`;

  // Convierte el JSON de productos en una lista plana con toda la información
  const listaProductos = Object.entries(productos).flatMap(([categoria, sabores]) =>
    sabores.map((sabor) => {
      const info = categorias[categoria] || {};
      const extra = detalles[`${categoria}/${sabor}`] || {};
      return {
        categoria,
        sabor,
        nombre: extra.nombre || `${info.singular || capitalizar(categoria)} de ${sabor}`,
        descripcion: extra.descripcion || "",
        imagen: extra.imagen ? IMG_PATH + extra.imagen : IMG_PATH + "logo_burribrownies.jpg",
        precio: info.precio,
        etiqueta: info.singular || capitalizar(categoria),
      };
    })
  );

  /* ---------- 1. Catálogo con filtros ---------- */
  const filtrosEl = document.getElementById("filtros");
  const gridEl = document.getElementById("product-grid");
  let filtroActivo = "todos";

  function crearTarjeta(producto, indice) {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <article class="product-card">
        <div class="product-image ${TONOS[indice % TONOS.length]}">
          <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="751" height="1000">
          <span class="product-tag">${producto.etiqueta}</span>
        </div>
        <div class="product-info">
          <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
          </div>
          <strong>${formatoPrecio(producto.precio)}</strong>
        </div>
      </article>`;
    return col;
  }

  function renderProductos() {
    const visibles =
      filtroActivo === "todos"
        ? listaProductos
        : listaProductos.filter((p) => p.categoria === filtroActivo);

    gridEl.replaceChildren(...visibles.map(crearTarjeta));
  }

  function renderFiltros() {
    const opciones = [["todos", "Todos"], ...Object.keys(productos).map((c) => [c, categorias[c]?.titulo || capitalizar(c)])];

    filtrosEl.replaceChildren(
      ...opciones.map(([valor, texto]) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = texto;
        boton.dataset.filtro = valor;
        boton.setAttribute("aria-pressed", String(valor === filtroActivo));
        return boton;
      })
    );
  }

  function aplicarFiltro(valor) {
    filtroActivo = valor;
    filtrosEl.querySelectorAll("button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.filtro === valor));
    });
    renderProductos();
  }

  filtrosEl.addEventListener("click", (e) => {
    const boton = e.target.closest("button[data-filtro]");
    if (boton) aplicarFiltro(boton.dataset.filtro);
  });

  // Enlaces del footer que abren el catálogo con un filtro aplicado
  document.querySelectorAll("a[data-ir-filtro]").forEach((enlace) => {
    enlace.addEventListener("click", () => aplicarFiltro(enlace.dataset.irFiltro));
  });

  renderFiltros();
  renderProductos();

  /* ---------- 2. Opiniones ---------- */
  const testimoniosEl = document.getElementById("testimonial-grid");
  const tonosOpinion = ["tone-pink", "tone-butter", "tone-mint"];

  testimoniosEl.innerHTML = testimonios
    .map(
      (t, i) => `
      <div class="col">
        <article class="testimonial ${tonosOpinion[i % tonosOpinion.length]}">
          <span class="quote-mark" aria-hidden="true">“</span>
          <p>${t.texto}</p>
          <footer><strong>${t.nombre}</strong><span>${t.lugar}</span></footer>
        </article>
      </div>`
    )
    .join("");

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
