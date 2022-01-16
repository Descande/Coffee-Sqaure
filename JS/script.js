
/*TOOGLE MENU BUTTON*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
};

/*TOGGLE SEARCH BUTTON*/
let searchform = document.querySelector('.search-form');

document.querySelector('#Search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitems.classList.remove('active');
};


/*TOGGLE CART BUTTON*/
let cartitems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartitems.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');

};


window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
}
