# Burri Brownies 🧁

Sitio web informativo de **Burri Brownies**, un emprendimiento estudiantil de repostería artesanal de **ESCA Tepepan (IPN)**, en la Ciudad de México. La página presenta el catálogo de brownies, galletas y cupcakes, explica cómo se elaboran y dirige a los clientes a Instagram para hacer pedidos.

El diseño se migró de un prototipo creado con Figma Make (React + Tailwind) a **HTML, CSS y JavaScript sin frameworks de JS**, usando Bootstrap para la cuadrícula y algunos componentes.

## Contenido de la página

Es una sola página (`index.html`) dividida en secciones, y cada enlace de la navbar lleva a la suya:

| Sección | Descripción |
|---|---|
| **Navbar** | Logo, enlaces por sección con resaltado automático al hacer scroll (ScrollSpy) y menú lateral (offcanvas) en móvil. |
| **Inicio (hero)** | Presentación con imagen principal, stickers decorativos y botones hacia productos y "Nosotros". |
| **Ticker** | Banda animada con mensajes de la marca. |
| **Destacados** | Tarjeta principal, frase de la casa y acceso a pedidos especiales. |
| **Productos** | Catálogo generado con JavaScript a partir de `data.js`, con filtros por categoría. |
| **Nosotros** | Los cuatro pasos del proceso de elaboración. |
| **Opiniones** | Reseñas de clientes y foto de pedidos. |
| **Contacto** | Bloque para pedidos especiales con enlace a Instagram. |
| **Footer** | Marca, enlaces que abren el catálogo ya filtrado, ubicación y redes. |

### Productos y precios

| Categoría | Sabores | Precio |
|---|---|---|
| Brownies | Oreo, nuez, clásico, almendra | $20 MXN |
| Galletas | Nuez, doble chocolate, chispas, red velvet | $15 MXN |
| Cupcakes | Vainilla, elote, chocolate | $15 MXN |

## Tecnologías

- **HTML5** con etiquetas semánticas y atributos de accesibilidad (`aria-*`, textos alternativos, foco visible).
- **CSS3** propio, con variables (custom properties), Flexbox, Grid, `clamp()` para tipografía fluida, animaciones con `@keyframes` y soporte para `prefers-reduced-motion`.
- **JavaScript (ES6+)** sin librerías: genera el catálogo, los filtros y las reseñas, configura los enlaces de contacto y controla el menú móvil.
- **[Bootstrap 5.3.8](https://getbootstrap.com/)** (CDN): cuadrícula responsiva, navbar, offcanvas y ScrollSpy.
- **[Google Fonts](https://fonts.google.com/)**: *Fraunces* para los títulos y *Outfit* para el texto.
- **Datos en objetos JSON** dentro de `assets/js/data.js`. No hay backend ni base de datos.

## Estructura del proyecto

```
json-bakery-frontend/
├── index.html              # Página única con todas las secciones
├── README.md
└── assets/
    ├── css/
    │   └── index.css       # Estilos organizados por sección (cada una con sus media queries)
    ├── js/
    │   ├── data.js         # Productos, precios, descripciones, reseñas y enlaces de contacto
    │   └── main.js         # Catálogo con filtros, reseñas, contacto y menú móvil
    └── img/                # Imágenes optimizadas para web
```

## Cómo ejecutarlo

No requiere instalación ni compilación.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/BraulioIAC/json-bakery-frontend.git
   ```
2. Abre `index.html` en el navegador (doble clic), o usa la extensión **Live Server** de VS Code para que la página se recargue al guardar cambios.

> Necesitas conexión a internet para que carguen Bootstrap y las fuentes desde sus CDN.

## Cómo editar el contenido

Casi todo el contenido dinámico se cambia en **`assets/js/data.js`**:

- **Agregar un sabor:** añádelo a la lista de su categoría en `productos`.
- **Cambiar precios:** edita `precio` en `categorias`.
- **Nombre, descripción o foto de un producto:** edítalos en `detalles`, cuya llave tiene la forma `"categoria/sabor"` (por ejemplo `"brownies/oreo"`).
- **Reseñas:** edita la lista `testimonios`.
- **Redes de contacto:** edita `contacto`. Todos los elementos con `data-contacto="instagram"` toman esa URL.

Si agregas una categoría nueva, su botón de filtro aparece automáticamente.

### Imágenes

- Usa las versiones optimizadas de `assets/img/` (máximo 1000 px por lado y unos 100 KB).
- Los archivos que empiezan con **`generic_`** son imágenes de referencia obtenidas de internet. El resto son fotos propias.
- Las galletas de **nuez** y **doble chocolate** usan `generic_cookies.jpg` de forma provisional hasta tener foto propia.

## Diseño responsivo

Se usan los mismos puntos de quiebre de Bootstrap:

| Breakpoint | Ancho | Cambios principales |
|---|---|---|
| Móvil | < 576 px | Una columna, hero centrado, menú lateral |
| `sm` | ≥ 576 px | Catálogo y pasos en 2 columnas |
| `md` | ≥ 768 px | Navbar horizontal, hero en 2 columnas |
| `lg` | ≥ 992 px | Catálogo en 3 columnas, pasos en 4, hero a pantalla completa |

## Créditos

- Diseño basado en un prototipo generado con **Figma Make**.
- Desarrollado por **Braulio Alejo** ([@BraulioIAC](https://github.com/BraulioIAC)).
