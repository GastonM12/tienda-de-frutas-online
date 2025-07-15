const productos = [];
const url = "js/productos.json";
const container = document.querySelector("div.container");
const retornarCardHTML = (producto) => {
   return `<div class="card">
   <div class="card-image">${producto.imagen}</div>
   <div class="card-name">${producto.nombre}</div>
   <div class="card-price">${producto.precio}</div>
   <div class="card-button">
   <button class="button button-outline button-add" id=${producto.id} title="Clic para agregar al carrito">+</button>
   </div>
   </div>`;
};

const activarBotones = () => {
   const botones = document.querySelectorAll(
      "button.button-outline.button-add"
   );

   if (botones != null) {
      botones.forEach((boton) => {
         boton.addEventListener("click", (e) => {
            agregarAlCarrito(e.target.id);
         });
      });
   }
};
const cargarProductos = (productos) => {
   if (productos.length > 0) {
      productos.forEach((producto) => {
         container.innerHTML += retornarCardHTML(producto);
         activarBotones();
      });
   }
};

const obtenerProductos = async () => {
   fetch(url)
      .then((data) => data.json())
      .then((result) => productos.push(...result))
      .then(()=>cargarProductos(productos))
};
obtenerProductos();
