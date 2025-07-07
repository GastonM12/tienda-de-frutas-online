
const agregarAlCarrito = (frutaId) => {
   if (frutaId > 0) {
      const encontrarFruta = productos.find(
         (fruta) => fruta.id === parseInt(frutaId)
      );
      if (encontrarFruta !== undefined) {
         carritoFrutas.push(encontrarFruta);
         almacenarCarrito();
      }
   }
};

const almacenarCarrito = () => {
   carritoFrutas.length > 0 &&
      localStorage.setItem("carrito", JSON.stringify(carritoFrutas));
};

const recuperarCarrito = () => {
   return JSON.parse(localStorage.getItem("carrito")) || [];
};


const carritoFrutas = recuperarCarrito();