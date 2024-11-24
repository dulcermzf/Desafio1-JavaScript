const precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = 0;
let total = 0;
const botonSuma = document.getElementById("boton-suma");
const botonResta = document.getElementById("boton-resta");

botonSuma.addEventListener("click", () => {
  cantidad++;

  total = precio * cantidad;
  const cantidadSpan = document.querySelector(".cantidad");
  cantidadSpan.innerHTML = cantidad;
  const valorTotalSpan = document.querySelector(".valor-total");
  valorTotalSpan.innerHTML = total;
});

botonResta.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad--;
    total = precio * cantidad;
    const cantidadSpan = document.querySelector(".cantidad");
    cantidadSpan.innerHTML = cantidad;
    const valorTotalSpan = document.querySelector(".valor-total");
    valorTotalSpan.innerHTML = total;
  }
});
