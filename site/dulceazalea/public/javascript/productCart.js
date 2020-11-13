window.addEventListener('load', function(){
    console.log('Vinculación exitosa')

    let cartContainer = document.querySelector('div.products__cart')

    let buttonPay = document.querySelector('.buttonPay')

    function addItemToCart(itemName, itemImage, itemPrice){
        let productsCartRow = document.createElement('div');
        let cartContent = `
        <div class="Articulo">
                <div class="col-4 imagen">
                  <img src="${itemImage}" alt="" />
                </div>
                <div class="col-9">
                  <h3>${itemName}</h3>
                  <div>
                    <span class="precio-unitario">$${itemPrice}</span>
                    <br>
                    <span class="cantidad">
                        <span>Cantidad: 
                      <input
                        type="number"
                        class="number-spinner"
                        value="1"
                        min="1"
                        max="100"
                      />
                      </span>
                    </span>
                    <button class="btn btn-danger buttonDelete" type="button"><i class="fas fa-trash"></i
                    ></button>
                  </div>
                </div>
              </div>
        `

        productsCartRow.innerHTML = cartContent;
        cartContainer.append(productsCartRow)

        productsCartRow.querySelector('.buttonDelete').addEventListener('click', removeItem);

        productsCartRow.querySelector('input.number-spinner').addEventListener('change', quantityChanged)
    }

    if(localStorage.length == 0){

        let productsCartRow = document.createElement('div.row.justify-content-center');
        let cartContent = `
        <h5>Tu carrito está vacío!</h5>
        <form action="/products">
              <button type="submit" id="boton">IR A PRODUCTOS</button>
            </form>
        `

        productsCartRow.innerHTML = cartContent
        cartContainer.append(productsCartRow)
        

    }else{
        for(i=0; i<localStorage.length;i++){

            let lsItem = JSON.parse(localStorage.getItem(localStorage.key(i)))

            console.log(localStorage.key(i))
            console.log(lsItem.name)
            console.log(lsItem.price)
            console.log(lsItem.image)
            
            let itemName = lsItem.name;
            let itemImage = lsItem.image;
            let itemPrice = lsItem.price

            addItemToCart(itemName,itemImage,itemPrice)

            updateTotal()

        }
    
    }

    function updateTotal(){
        let total = 0;

        let cartTotal = document.querySelector('span.cartTotal')

        let cartArticles = document.querySelectorAll('div.Articulo')

        cartArticles.forEach(function(article){
            let articlePrice = article.querySelector('span.precio-unitario')

            let cartArticlePrice  = Number(articlePrice.textContent.replace('$',''))

            let cartArticleQuantityElement = article.querySelector('input.number-spinner')

            let cartArticleQuantity = Number(cartArticleQuantityElement.value)

            total = total + cartArticlePrice * cartArticleQuantity
        });

        cartTotal.innerHTML = `$${total.toFixed(2)}`
    }

    function removeItem(event){
        let buttonClicked = event.target;
        buttonClicked.closest('.Articulo').remove();
        updateTotal();
    }

    function quantityChanged(event){
        let input = event.target
        if(input.value<=0){
            input.value = 1
        }
        updateTotal()
    }

    buttonPay.addEventListener('click', function(){
        let compra = confirm('¿Estás seguro que quieres confirmar tu compra?')
        if(compra){
            alert('Gracias por tu compra!');
            localStorage.clear();
        }
    })
})