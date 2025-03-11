import { activeUser } from "../../../main.js";
import { renderShoppingCart } from "../../../src/components/shoppingCart/shoppingCart.js";

export const setUpShoppingCartEventListeners = () => {
    toggleShoppingCart();
    changeProductAmount()
}


const toggleShoppingCart = () => {
    const shoppingCartImg =  document.querySelector('.shopping-cart__img')
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    shoppingCartImg.addEventListener('click', () => {
        renderShoppingCart(activeUser.getShoppingCart())

        shoppingCartList.classList.toggle('toggle-cart')
        shoppingCartImg.classList.toggle('spin-cart')
        
        shoppingCartList.getAttribute('aria-hidden') === 'true' ?
        shoppingCartList.setAttribute('aria-hidden', 'false') :
        shoppingCartList.setAttribute('aria-hidden', 'true')
    })
}

const changeProductAmount = () => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    shoppingCartList.addEventListener('click', (e) => {
        const itemID = e.target.closest('li').getAttribute('data-id')

        if (e.target.classList.contains('arrow-increment')) {
            console.log(`increment id: ${itemID}`)
        }
        
        if (e.target.classList.contains('arrow-decrement')) {
            console.log(`decrement id: ${itemID}`)
        }
    })
}

