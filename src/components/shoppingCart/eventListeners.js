

export const setUpShoppingCartEventListeners = () => {
    toggleShoppingCart();
}


const toggleShoppingCart = () => {
    const shoppingCartImg =  document.querySelector('.shopping-cart__img')
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    shoppingCartImg.addEventListener('click', () => {
        shoppingCartList.classList.toggle('toggle-cart')
        
        shoppingCartList.getAttribute('aria-hidden') === 'true' ?
        shoppingCartList.setAttribute('aria-hidden', 'false') :
        shoppingCartList.setAttribute('aria-hidden', 'true')

        
        
        console.log(shoppingCartList.getAttribute('aria-hidden'))
    })
}