const qs = function qs(element) {
  return document.querySelector(element);
};

window,
  addEventListener('load', function () {
    console.log('test JS vinculado');

    let formulario = qs('form#register');
    // console.log(formulario);

    let element = formulario.elements;
    // console.log(element);

    let inputFirst_name = qs('#first_name');
    let inputLast_name = qs('#last_name');
    let inputEmail = qs('#email');
    let inputPassword = qs('#password');
    let inputPassword_confirmation = qs('#password_confirmation');
    let inputAvatar = qs('#avatar');

    let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    inputFirst_name.addEventListener('blur', function () {
      switch (true) {
        case this.value == 0:
          errorFirst_name.innerHTML = 'El campo no puede estar vacio';
          this.classList.add('is-invalid');
          console.log('error1');
          break;
        case this.value.trim().length <= 2:
          errorFirst_name.innerHTML = 'El nombre debe ser mayor a 3 caracteres';
          this.classList.add('is-invalid');
          console.log('error2');
          break;
        default:
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorFirst_name.innerHTML = '';
          // console.log('todo ok');
          break;
      }
    });
    inputLast_name.addEventListener('blur', function () {});
  });
