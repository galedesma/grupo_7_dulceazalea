// const { get } = require('../../src/routes/products');

const qs = function qs(element) {
  return document.querySelector(element);
};

window.addEventListener('load', function () {
  console.log('vinculacion JS');

  let halloween = qs('#halloween');
  let btnModeHalloween = 'ModeHalloween';
  let cont = 0;
  console.log(cont);
  console.log(sessionStorage);
  if (sessionStorage.getItem('modo') == 'ModeHalloween') {
    cont = 1;
    console.log(cont);
  }
  halloween.addEventListener('click', function () {
    console.log('test');
    cont++;

    // -------------------------------------------------------------------
    if (cont % 2 != 0) {
      console.log(sessionStorage);
      sessionStorage.setItem('modo', btnModeHalloween);
      // btnModeHalloween = sessionStorage.getItem('modo');
      console.log(btnModeHalloween);
      console.log(cont);
      console.log(sessionStorage);
    } else {
      sessionStorage.clear();
      console.log(cont);
      console.log(sessionStorage);
    }
    location.reload();
  });
  if (sessionStorage.getItem('modo') == 'ModeHalloween') {
    console.log('MODO HALLOWEEN ON');
    halloween.innerHTML = 'Modo Azalea';
    // -------------------------------------------------------

    document.querySelector('body').style.backgroundImage =
      "url('/img/fondo.jpg')";
    document.querySelector('body').style.backgroundRepeat = 'no-repeat';
    document.querySelector('body').style.backgroundRepeat = 'repeat';
    // -------------------------------------------------------------------
    document.querySelector('header').style.backgroundColor = '#B05502';
    document.getElementById('header').style.backgroundColor = '#B05502';

    let dropdown_menu_hw = document.querySelectorAll('.dropdown-menu');
    // console.log(dropdown_menu_hw);
    for (let dropdown_menu of dropdown_menu_hw) {
      dropdown_menu.style.backgroundColor = '#B05502';
    }

    // console.log(document.getElementById('product__Detail'));
    if (document.getElementById('product__Detail') != null) {
      document.getElementById('product__Detail').style.backgroundColor =
        '#B05502';
    }
    let products_hw = document.querySelectorAll('#form__create');
    // console.log(products_hw);
    for (let products of products_hw) {
      products.style.backgroundColor = '#d26502';
    }

    let articulos_hw = document.querySelectorAll('.articulos');
    // console.log(articulos_hw);
    for (let articulo of articulos_hw) {
      articulo.style.backgroundColor = '#d26502';
    }
    //
    document.querySelector('footer').style.backgroundColor = '#49258f';
    document.querySelector('footer').style.color = '#ffffff';

    let a_hw = document.querySelectorAll('#footer_a');
    // console.log(a_hw);
    for (let a of a_hw) {
      a.style.color = '#ffffff';
    }

    let user_hw = document.querySelectorAll('.form__reg');
    // console.log(user_hw);
    for (let userVista of user_hw) {
      userVista.style.backgroundColor = '#B05502';
    }
    let textos = document.querySelectorAll('.h2_titulo');
    for (let h2 of textos) {
      h2.style.color = '#ffffff';
    }
    // console.log(document.getElementsByClassName('products__cart'));
    // console.log(document.getElementsByClassName('products__cart__venta'));
    // let carrito = document.getElementsByClassName('products__cart');
    // let carritoSubmit = document.getElementsByClassName(
    //   'products__cart__venta'
    // );
    // carrito.style.backgroundColor = '#B05502';
    // carritoSubmit.style.backgroundColor = '#B05502';
    // let spans = document.querySelectorAll('span');
    // for (let span of spans) {
    //   span.style.backgroundColor = '#ffffff';
    // }
  } else {
    console.log('MODO AZALEA ON');
    // -------------------------------------------------------
  }
  // if (sessionStorage.getItem('modo') == null) {
  //   console.log('hola');
  // } else {
});
