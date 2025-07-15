const tbody = document.querySelector("tbody");
const btnComprar = document.querySelector("button#btnComprar");
console.log(tbody);

const retornarTabla = (producto) => {
   return `  <tr>
                <th id="tablehead">${producto.imagen}</th>
                <th id="tablehead">${producto.nombre}</th>
                <th id="tablehead">${producto.precio}</th>
                <th id="tablehead">Quitar</th>
             </tr>`;
};

if (carritoFrutas.length > 0) {
   tbody.innerHTML = "";
   carritoFrutas.forEach((fruta) => {
      tbody.innerHTML += retornarTabla(fruta);
   });
}

btnComprar.addEventListener("click", () => {
   alert("Gracias por comprar");
   localStorage.removeItem("carrito");
   tbody.innerHTML = "";
});
