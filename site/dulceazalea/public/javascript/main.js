const qs = function qs(element) {
  return document.querySelector(element);
};

window.addEventListener('load', function () {
  console.log('vinculacion JS');
  let halloween = qs('#halloween');
  halloween.addEventListener('click', function () {
    console.log('test');
    // -------------------------------------------------------------------
    document.querySelector('body').style.backgroundImage =
      "url('/img/fondo.jpg')";
    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
    document.querySelector('body').style.backgroundRepeat = 'repeat';
    // -------------------------------------------------------------------
    document.querySelector('header').style.backgroundColor = '#B05502';
    document.getElementById('header').style.backgroundColor = '#B05502';

    let dropdown_menu_hw = document.querySelectorAll('.dropdown-menu');
    console.log(dropdown_menu_hw);
    dropdown_menu_hw.forEach((dropdown_menu) => {
      dropdown_menu.style.backgroundColor = '#B05502';
    });

    console.log(document.getElementById('product__Detail'));
    if (document.getElementById('product__Detail') != null) {
      document.getElementById('product__Detail').style.backgroundColor =
        '#B05502';
    }
    let products_hw = document.querySelectorAll('#form__create');
    console.log(products_hw);
    products_hw.forEach((products) => {
      products.style.backgroundColor = '#d26502';
    });

    let articulos_hw = document.querySelectorAll('.articulos');
    console.log(articulos_hw);
    articulos_hw.forEach((articulo) => {
      articulo.style.backgroundColor = '#d26502';
    });
    //
    document.querySelector('footer').style.backgroundColor = '#49258f';
    document.querySelector('footer').style.color = '#ffffff';

    let a_hw = document.querySelectorAll('#footer_a');
    console.log(a_hw);
    a_hw.forEach((a) => {
      a.style.color = '#ffffff';
    });
    console.log(document.getElementsByClassName('products__cart'));
    console.log(document.getElementsByClassName('products__cart__venta'));
    document.getElementsByClassName('products__cart').style.backgroundColor =
      '#B05502';
    document.getElementsByClassName(
      'products__cart__venta'
    ).style.backgroundColor = '#B05502';
  });
});
