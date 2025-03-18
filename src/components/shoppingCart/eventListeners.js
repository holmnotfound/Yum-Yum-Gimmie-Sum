import { renderShoppingCart, quickContentShoppingCart } from "../../../src/components/shoppingCart/shoppingCart.js";
import { activeUserStorage } from "../../utils/usersStorage.js";

export const setUpShoppingCartEventListeners = () => {
    toggleShoppingCartClick();
    changeProductAmount()
    changeProductAmountClick();
}


/* const toggleShoppingCart = () => {
    const shoppingCartImg =  document.querySelector('.shopping-cart__img')
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartImg && shoppingCartList) {

        shoppingCartImg.addEventListener('keydown', (event) => {
            

            const activeCustomer = activeUserStorage.getActiveUser()
            renderShoppingCart(activeCustomer.getShoppingCart())
    
            shoppingCartList.classList.toggle('toggle-cart')
            shoppingCartImg.classList.toggle('spin-cart')
            
            shoppingCartList.getAttribute('aria-hidden') === 'true' ?
            shoppingCartList.setAttribute('aria-hidden', 'false') :
            shoppingCartList.setAttribute('aria-hidden', 'true')
            console.log()
        })
    }

} */

/* function toggleShoppingCart() {
    const shoppingCartImg =  document.querySelector('.shopping-cart__img')
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartImg && shoppingCartList && event.key === 'Enter' || event.key === ' ')) {

        shoppingCartImg.addEventListener('keydown', () => {
            

            const activeCustomer = activeUserStorage.getActiveUser()
            renderShoppingCart(activeCustomer.getShoppingCart())
    
            shoppingCartList.classList.toggle('toggle-cart')
            shoppingCartImg.classList.toggle('spin-cart')
            
            shoppingCartList.getAttribute('aria-hidden') === 'true' ?
            shoppingCartList.setAttribute('aria-hidden', 'false') :
            shoppingCartList.setAttribute('aria-hidden', 'true')
            console.log()
        })
    }
} */

function toggleShoppingCart(event) {
    const shoppingCartImg = document.querySelector('.shopping-cart__img');
    const shoppingCartList = document.querySelector('.shopping-cart__list');

    if (event.key === 'Enter' || event.key === ' ') {
        const activeCustomer = activeUserStorage.getActiveUser();
        renderShoppingCart(activeCustomer.getShoppingCart());

        shoppingCartList.classList.toggle('toggle-cart');
        shoppingCartImg.classList.toggle('spin-cart');

        shoppingCartList.getAttribute('aria-hidden') === 'true'
            ? shoppingCartList.setAttribute('aria-hidden', 'false')
            : shoppingCartList.setAttribute('aria-hidden', 'true');
    }
}

const shoppingCartImg = document.querySelector('.shopping-cart__img');
if (shoppingCartImg) {
    shoppingCartImg.addEventListener('keydown', toggleShoppingCart);
}


function toggleShoppingCartClick(){
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
            console.log()
        })
    }
}


/* const changeProductAmount = () => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartList) {
        shoppingCartList.addEventListener('keydown', (e) => {
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
} */

const changeProductAmount = () => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartList) {
        shoppingCartList.addEventListener('keydown', (e) => {
            if (e.key === "Enter" || e.key === " ") { 
                
                const itemID = e.target.closest('li')?.getAttribute('data-id');
                const activeCustomer = activeUserStorage.getActiveUser();
                
                if (itemID) {
                    if (e.target.classList.contains('arrow-increment')) {
                        activeCustomer.addItemToShoppingCart(itemID);
                        renderShoppingCart(activeCustomer.getShoppingCart());
                    }
                    
                    if (e.target.classList.contains('arrow-decrement')) {
                        activeCustomer.removeItemFromCart(itemID);
                        renderShoppingCart(activeCustomer.getShoppingCart());
                    }
                }
            }
        });
    }
};

// const changeProductAmountClick = () => {
//     const shoppingCartList = document.querySelector('.shopping-cart__list');
    
//     if (shoppingCartList) {
//         shoppingCartList.addEventListener('click', (e) => {
//             const itemID = e.target.closest('li').getAttribute('data-id')
//             const activeCustomer = activeUserStorage.getActiveUser()
//             if (itemID) {
//                 if (e.target.classList.contains('arrow-increment')) {
//                     activeCustomer.addItemToShoppingCart(itemID)
//                     renderShoppingCart(activeCustomer.getShoppingCart())
//                 }
                
//                 if (e.target.classList.contains('arrow-decrement')) {
//                     activeCustomer.removeItemFromCart(itemID)
//                     renderShoppingCart(activeCustomer.getShoppingCart())
//                 }
//             }
//         })
//     }
// }

const changeProductAmountClick = () => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    
    if (shoppingCartList) {
        shoppingCartList.addEventListener('click', (e) => {
            const itemID = e.target.closest('li')?.getAttribute('data-id');
            const activeCustomer = activeUserStorage.getActiveUser();
            
            if (itemID) {
                if (e.target.classList.contains('arrow-increment')) {
                    activeCustomer.addItemToShoppingCart(itemID);
                    renderShoppingCart(activeCustomer.getShoppingCart());
                    quickContentShoppingCart();
                }
                
                if (e.target.classList.contains('arrow-decrement')) {
                    activeCustomer.removeItemFromCart(itemID);
                    renderShoppingCart(activeCustomer.getShoppingCart());
                    quickContentShoppingCart();
                }
            }
        });
    }
};