// const qs = function qs(element) {
//     return document.querySelector(element);
// };

window.addEventListener('load', function () {
    console.log('Vinculación exitosa');
  
    let formulario = qs('form#create');
  
    let elements = formulario.elements;
  
      let campoImage = qs('input#img');
  
      let campoNombre = qs('input#nameProduct');
  
      let campoDescripcion = qs('#description');
  
      let campoPrecio = qs('#price');
  
      campoNombre.addEventListener('blur', function(){
          switch(true){
              case this.value == 0:
                  errorName.innerHTML = 'El producto necesita un nombre';
                  this.classList.add('is-invalid');
                  break;
              case this.value.length < 7:
                  errorName.innerHTML = 'El nombre es demasiado corto';
                  break;
              default:
                  this.classList.remove('is-invalid');
                  this.classList.add('is-valid');
                  errorName.innerHTML = '';
          }
      })
  
      campoImage.addEventListener('blur', function(){
  
          function hasExtension(inputID, exts) {
              var fileName = document.getElementById(inputID).value;
              return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
          }
  
          if (!hasExtension('img', ['.jpg', '.jpeg', '.png'])) {
              errorImage.innerHTML= 'El formato de la imágen es incorrecto.\nPor favor, verifique que el formato sea jpg, jpeg o png'
              this.classList.add('is-invalid');
              this.value = ""
          } else {
              this.classList.add('is-valid')
              errorImage.innerHTML= '';
          }
      })
  
      campoDescripcion.addEventListener('blur', function(){
          switch(true){
              case this.value.length < 7 || this.value.length > 120:
                  errorDescription.innerHTML = 'La descripción debe tener entre 7 y 120 caracteres';
                  this.classList.add('is-invalid');
                  break;
              default:
                  this.classList.remove('is-invalid');
                  this.classList.add('is-valid');
                  errorDescription.innerHTML = '';
          }
      })
  
      campoPrecio.addEventListener('blur', function(){
          switch(true){
              case this.value == '':
                  errorPrice.innerHTML = 'Ingrese el precio del producto';
                  this.classList.add('is-invalid');
                  break;
              case this.value.isInteger() :
                  errorPrice.innerHTML = 'Ingrese un precio numérico';
                  this.classList.add('is-invalid');
                  break;
              default:
                  this.classList.remove('is-invalid');
                  this.classList.add('is-valid');
                  errorPrice.innerHTML = '';
          }
      })
  
      formulario.addEventListener('submit', function(e){
          e.preventDefault();
  
          let error = false;
          for (let i = 0; i < elements.length - 1; i++) {
          if (elements[i].value == 0) {
          elements[i].classList.add('is-invalid');
          error = true;
        }
      }
          if (!error) {
        formulario.submit();
        // console.log('test submit');
          } else {
        // console.log('test span');
        errorSumbitAdd.innerHTML = 'Los campos señadados son obligatorios';
          }
      });
  })
  
