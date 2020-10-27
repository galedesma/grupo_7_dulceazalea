const qs = function qs(element) {
    return document.querySelector(element);
    };

window.addEventListener('load', function(){
    console.log('validacion vinculada')
    let formulario = qs('form#edit');

    let campoName = qs('#name')
   /*  let errorName = qs('#errorName') */ //Hace falta capturar los errores?

    let campoDescription = qs('#description__product__edit')
    /* let errorDescription = qs('#errorDescription')
 */
    let campoCategoria = qs('#categoria')
    let errorCategoria = qs('#errorCategory')

    let campoPrice = qs('#price')
    let errorPrice = qs('#errorPrice')

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
    })

    campoName.addEventListener('blur', function(){
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

    campoDescription.addEventListener('blur', function(){
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

    /* campoCategoria.addEventListener('blur', function(){}) Hay errores para el campo categoría? */

    campoPrice.addEventListener('blur', function(){
        switch(true){
            case this.value == '':
                errorPrice.innerHTML = 'Ingrese el precio del producto';
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPrice.innerHTML = '';
        }
    })
})