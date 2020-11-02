// const qs = function qs(element) {
//     return document.querySelector(element);
// };

window.addEventListener('load', function () {
  console.log('Vinculación exitosa');

  let formulario = qs('form #create');

  let elements = formulario.elements;

  let campoImage = qs('input #img');

  let campoNombre = qs('input #nameProduct');

  let campoDescripcion = qs('input #description');

  let campoPrecio = qs('input #price');
});
