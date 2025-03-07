

export const setUpShoppingCartEventListeners = () => {
    toggleShoppingCart();
}


const toggleShoppingCart = () => {
    const shoppingCartImg =  document.querySelector('.shopping-cart__img')
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    shoppingCartImg.addEventListener('click', () => {
        shoppingCartList.classList.toggle('toggle-cart')
        shoppingCartImg.classList.toggle('spin-cart')
        
        shoppingCartList.getAttribute('aria-hidden') === 'true' ?
        shoppingCartList.setAttribute('aria-hidden', 'false') :
        shoppingCartList.setAttribute('aria-hidden', 'true')
        })
}