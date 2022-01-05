

// TOGGLE NAVBAR //
const bar = document.getElementById('bar');
const cartMobile = document.getElementById('cart-mobile');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        cartMobile.classList.add('none');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        cartMobile.classList.remove('none');
    });
}


// SHOW SUB CATEGORIES

$(".category").focusin(function () {
    $("#sub-menu").show();
});
  
$(".category").focusout(function () {
    $("#sub-menu").hide();
});