// Seleccionar el botón y el body
const boton = document.getElementById('cambiarColorBtn');
const body = document.body;

// Colores disponibles
const colores = ['#f5f0e6', '#e8dcc2', '#d2b48c', '#cbb092'];
let indice = 0;

// Cambiar el color de fondo cuando se hace clic
boton.addEventListener('click', () => {
  indice = (indice + 1) % colores.length;
  body.style.backgroundColor = colores[indice];
});
