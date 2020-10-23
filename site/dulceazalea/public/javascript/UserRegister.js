const qs = function qs(element) {
  return document.querySelector(element);
};

window,
  addEventListener('load', function () {
    console.log('test JS vinculado');

    let form = qs('form#register');
    // console.log(formulario);

    let elements = form.elements;
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
    inputPassword_confirmation.addEventListener('blur', function () {
      switch (true) {
        case this.value == 0:
          errorPassword_confirmation.innerHTML =
            'El campo no puede estar vacio';
          this.classList.add('is-invalid');
          break;
        case inputPassword.value != this.value:
          errorPassword_confirmation.innerHTML = 'Las contraseñas no coinciden';
          this.classList.add('is-invalid');
          break;
        default:
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          errorPassword_confirmation.innerHTML = '';
          break;
      }
    });
    // inputAvatar.addEventListener('change', function () {
    //   let reader = new FileReader();

    //   reader.readAsDataURL(e.target.file[0]);

    //   reader.onload = function () {
    //     vistaPrevia.src = reader.result;
    //     inputAvatar.classList.remove('is-invalid');
    //     inputAvatar.classList.add('is-valid');
    //     errorAvatar.innerHTML = '';
    //   };
    // });

    form.addEventListener('submit', function (event) {
      event.preventDefault(); //evita el sumit salvo que se cumple todo
      let error = false;
      for (let index = 0; index < elements.length - 1; index++) {
        if (elements[index].value == 0) {
          elements[index].classList.add('is-invalid');
          error = true;
        }
      }
      if (!error) {
        form.submit();
      } else {
        errorSumbit.innerHTML = 'Los campos señadados son obligatorios';
      }
    });
  });
