// const qs = function qs(element) {
//   return document.querySelector(element);
// };

window.addEventListener('load', function () {
  console.log('test JS vinculado en login');

  let formLogin = qs('form#login-form');
  // console.log(formLogin);

  let elements = formLogin.elements;

  let inputEmail = qs('#email');
  let inputPassword = qs('#password');

  let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

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
    }
  });
  inputPassword.addEventListener('blur', function () {
    if (this.value == 0) {
      errorPassword.innerHTML = 'El campo no puede estar vacio';
      this.classList.add('is-invalid');
    } else {
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      errorPassword.innerHTML = '';
    }
  });
  formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    let error = false;
    for (let i = 0; i < elements.length - 1; i++) {
      if (elements[i].value == 0) {
        elements[i].classList.add('is-invalid');
        error = true;
      }
    }
    if (!error) {
      formLogin.submit();
      // console.log('test submit');
    } else {
      // console.log('test span');
      errorSumbitLog.innerHTML = 'Los campos señadados son obligatorios';
    }
  });
});
