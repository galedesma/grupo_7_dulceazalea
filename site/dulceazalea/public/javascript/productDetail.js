window.addEventListener('load', function(){
    console.log('Vinculación exitosa')

    /* localStorage.clear() */

    console.log(localStorage)

    let id = String(window.location.pathname).slice(10)

    console.log(id)

    let addToCartButton  = document.querySelector('.addToCart');

    let productName = document.querySelector('h2.productName').textContent;

    let productPrice = document.querySelector('h2.productPrice').textContent;

    let productImage = document.querySelector('.productImage').src;

    addToCartButton.addEventListener('click', function(){
        
        let itemId = 'itemId'+id

        let item = {};
        item.name = productName.trim();
        item.price = productPrice.trim().slice(1);
        item.img = productImage.trim();


        localStorage.setItem(itemId, JSON.stringify({
            name: productName.trim(),
            price: productPrice.trim().slice(1), //Elimina el "$"
            image: productImage.trim()
            })
        )
    
        console.log(JSON.parse(localStorage.getItem(itemId)))
    })
})