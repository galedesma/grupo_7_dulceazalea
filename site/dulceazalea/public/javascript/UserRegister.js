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
          // console.log('error1');
          break;
        case this.value.trim().length <= 2:
          errorFirst_name.innerHTML = 'El nombre debe ser mayor a 3 caracteres';
          this.classList.add('is-invalid');
          // console.log('error2');
          break;
        default:
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorFirst_name.innerHTML = '';
          // console.log('todo ok');
          break;
      }
    });
    inputLast_name.addEventListener('blur', function () {
      switch (true) {
        case this.value == 0:
          errorLast_name.innerHTML = 'El campo no puede estar vacio';
          this.classList.add('is-invalid');
          break;
        case this.value.trim().length <= 2:
          errorLast_name.innerHTML =
            'El apellido debe ser mayor a 3 caracteres';
          this.classList.add('is-invalid');
          break;
        default:
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorLast_name.innerHTML = '';
          break;
      }
    });
    inputEmail.addEventListener('blur', function () {
      switch (true) {
        case this.value == 0:
          errorEmail.innerHTML = 'El campo no puede estar vacio';
          this.classList.add('is-invalid');
          break;
        case !regExEmail.test(this.value):
          errorEmail.innerHTML = 'Ingrese un mail válido';
          this.classList.add('is-invalid');
          break;
        default:
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorEmail.innerHTML = '';
          break;
      }
    });
    inputPassword.addEventListener('blur', function () {
      switch (true) {
        case this.value == 0:
          errorPassword.innerHTML = 'El campo no puede estar vacio';
          this.classList.add('is-invalid');
          break;
        case !regExPass.test(this.value):
          errorPassword.innerHTML =
            'La contraseña debe tener entre 6 y 12 caracteres, una mayúscula una minúscula y un número';
          this.classList.add('is-invalid');
          break;
        default:
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorPassword.innerHTML = '';
          break;
      }
    });
  });
