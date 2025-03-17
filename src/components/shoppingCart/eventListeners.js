import { renderShoppingCart } from "../../../src/components/shoppingCart/shoppingCart.js";
import { activeUserStorage } from "../../utils/usersStorage.js";

export const setUpShoppingCartEventListeners = () => {
    toggleShoppingCart();
    changeProductAmount()
}


const toggleShoppingCart = () => {
    const shoppingCartImg =  document.querySelector('.shopping-cart__img')
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartImg && shoppingCartList) {
        shoppingCartImg.addEventListener('click', () => {
            const activeCustomer = activeUserStorage.getActiveUser()
            renderShoppingCart(activeCustomer.getShoppingCart())
    
            shoppingCartList.classList.toggle('toggle-cart')
            shoppingCartImg.classList.toggle('spin-cart')
            
            shoppingCartList.getAttribute('aria-hidden') === 'true' ?
            shoppingCartList.setAttribute('aria-hidden', 'false') :
            shoppingCartList.setAttribute('aria-hidden', 'true')
        })
    }

}

const changeProductAmount = () => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartList) {
        shoppingCartList.addEventListener('click', (e) => {
            const itemID = e.target.closest('li').getAttribute('data-id')
            const activeCustomer = activeUserStorage.getActiveUser()
            if (itemID) {
                if (e.target.classList.contains('arrow-increment')) {
                    activeCustomer.addItemToShoppingCart(itemID)
                    renderShoppingCart(activeCustomer.getShoppingCart())
                }
                
                if (e.target.classList.contains('arrow-decrement')) {
                    activeCustomer.removeItemFromCart(itemID)
                    renderShoppingCart(activeCustomer.getShoppingCart())
                }
            }
        })
    }
}

