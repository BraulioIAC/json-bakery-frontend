/* =========================================================
   Burri Brownies — datos del sitio
   Todo el contenido dinámico vive aquí como objetos JSON.
   Para agregar un producto: añádelo a `productos` y, si quieres,
   dale nombre, imagen y descripción en `detalles`.
   ========================================================= */

// Listado de productos (estructura original)
const productos = {
  brownies: ["oreo", "nuez", "clasicos", "almendra"],
  galletas: ["nuez", "doble chocolate", "chispas", "red velvet"],
  cupcakes: ["vainilla", "elote", "chocolate"],
};

// Información general de cada categoría (precio en MXN)
const categorias = {
  brownies: { titulo: "Brownies", singular: "Brownie", precio: 20 },
  galletas: { titulo: "Galletas", singular: "Galleta", precio: 15 },
  cupcakes: { titulo: "Cupcakes", singular: "Cupcake", precio: 15 },
};

// Detalles por producto. La llave es "categoria/sabor".
// Las imágenes marcadas como provisionales son genéricas (sacadas de internet):
// reemplázalas cuando tengas foto propia.
const detalles = {
  "brownies/oreo": {
    nombre: "Brownie Oreo",
    imagen: "brownie_oreo.jpg",
    descripcion: "Chocolate intenso con trozos de galleta Oreo por dentro y por encima.",
  },
  "brownies/nuez": {
    nombre: "Brownie de Nuez",
    imagen: "brownie_nuez.jpg",
    descripcion: "Brownie húmedo cubierto con nuez troceada.",
  },
  "brownies/clasicos": {
    nombre: "Brownie Clásico",
    imagen: "brownie_clasico.jpg",
    descripcion: "El de siempre: puro chocolate y costrita crujiente.",
  },
  "brownies/almendra": {
    nombre: "Brownie de Almendra",
    imagen: "brownie_almendra.jpg",
    descripcion: "Chocolate con almendra fileteada tostada encima.",
  },
  "galletas/nuez": {
    nombre: "Galleta de Nuez",
    imagen: "generic_cookies.jpg",
    provisional: true,
    descripcion: "Galleta suavecita con trozos de nuez.",
  },
  "galletas/doble chocolate": {
    nombre: "Galleta Doble Chocolate",
    imagen: "generic_cookies.jpg",
    provisional: true,
    descripcion: "Masa de cacao con trozos de chocolate.",
  },
  "galletas/chispas": {
    nombre: "Galleta con Chispas",
    imagen: "galletas_chispas.jpg",
    descripcion: "La clásica galleta con chispas de chocolate.",
  },
  "galletas/red velvet": {
    nombre: "Galleta Red Velvet",
    imagen: "galleta_red_velvet.jpg",
    descripcion: "Red velvet con chispas de chocolate blanco.",
  },
  "cupcakes/vainilla": {
    nombre: "Cupcake de Vainilla",
    imagen: "cupcakes_vainilla.jpg",
    descripcion: "Pan de vainilla con betún cremoso y galleta Oreo.",
  },
  "cupcakes/elote": {
    nombre: "Cupcake de Elote",
    imagen: "cupcakes_elote.jpg",
    descripcion: "Pan de elote esponjoso con un toque de Oreo.",
  },
  "cupcakes/chocolate": {
    nombre: "Cupcake de Chocolate",
    imagen: "cupcakes_chocolate.jpg",
    descripcion: "Pan de chocolate húmedo y esponjoso.",
  },
};

// TODO: reseñas de EJEMPLO. Reemplázalas por reseñas reales antes de publicar.
const testimonios = [
  {
    nombre: "Mariana G.",
    lugar: "ESCA Tepepan",
    texto: "El brownie de Oreo desapareció antes de que pudiera tomarle foto. Eso lo dice todo.",
  },
  {
    nombre: "Diego R.",
    lugar: "ESCA Tepepan",
    texto: "Pedí cupcakes de elote para un cumpleaños y no sobró ni uno. Ya tengo proveedor oficial.",
  },
  {
    nombre: "Fernanda L.",
    lugar: "Ciudad de México",
    texto: "La galleta red velvet es mi antojo de cada semana. Llegan bien empacadas y bonitas.",
  },
];

// Enlaces de contacto. Cada botón con data-contacto="<clave>" toma su URL de aquí.
// Si una clave queda vacía (""), sus botones apuntan a la sección de contacto.
const contacto = {
  instagram: "https://www.instagram.com/burri_brownies",
};
