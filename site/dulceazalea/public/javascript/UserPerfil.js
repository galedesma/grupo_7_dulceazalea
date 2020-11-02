// const qs = function qs(element) {
//   return document.querySelector(element);
// };
window.addEventListener('load', function () {
  console.log('tesr JS vinculado profile');

  let formProfile = qs('form#formProfile');
  // console.log(formProfile);
  let elements = form.elements;

  let inputAvatar = qs('#avatar');
  let submitBorrar = qs('#boton_borrar');

  inputAvatar.addEventListener('change', function (e) {
    let reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      vistaPrevia.src = reader.result;
    };
  });
  submitBorrar.addEventListener('click', function () {
    confirm('¿Estás seguro de que quieres eliminar tu cuenta?');
  });
});
