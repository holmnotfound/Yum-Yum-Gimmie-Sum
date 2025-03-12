import { calculateTotal } from "../../utils/calculateTotal.js";
import { activeUserStorage } from "../../utils/usersStorage.js";



export const setUpShoppingCart = () => {
    const shoppingCartContainer = document.createElement('section');
    shoppingCartContainer.classList.add('shopping-cart__container');
    
    const shoppingCartImg = document.createElement('img');
    shoppingCartImg.src = '../../../images/shopping-cart-white.svg';
    shoppingCartImg.classList.add('shopping-cart__img')
    shoppingCartContainer.appendChild(shoppingCartImg)

    const shoppingCartList = document.createElement('ul');
    shoppingCartList.replaceChildren();
    shoppingCartList.classList.add('shopping-cart__list')
    shoppingCartList.setAttribute('aria-hidden', 'true');
    shoppingCartContainer.appendChild(shoppingCartList);

    const shoppingCartNav = document.createElement('li');
    shoppingCartNav.classList.add('shopping-cart__nav');
    
    return shoppingCartContainer; 
}

export const renderShoppingCart = (shoppingCart) => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    shoppingCartList.replaceChildren()
        
    if (shoppingCart.length === 0) {
        const emptyCartElement = createEmptyShoppingCartHtml();
        shoppingCartList.innerHTML += `${emptyCartElement}`
    }
    else {
        shoppingCart.forEach((item) => {
            const menuItemElement = createShoppingCartHTML(item);
            shoppingCartList.innerHTML += `${menuItemElement}`
        })
    }
    shoppingCartList.innerHTML += createShoppingCartNavHTML();
}

const createShoppingCartHTML = (item) => {
    const{id, type, name, description, price, quantity} = item; 

    return `
        <li class="shopping-cart__list-item" data-id=${id}>
            <section class="shopping-cart__navigation">
                <a class="shopping-cart__decrement-product">
                    <img class="arrow arrow-decrement" src="../../../images/arrow-decrement.svg" alt="Remove ${name} from your order"/>
                </a>
                <span class="number-of-products">${quantity}</span>
                <a class="shopping-cart__increment-product">
                    <img class="arrow arrow-increment" src="../../../images/arrow-increment.svg" alt="Add another ${name} to your order"/>
                </a>
            </section>
            <section class="shopping-cart__products">
            <h2 class="shopping-cart__menu-item--heading" aria-label="${name}">
                ${name} 
            </h2>
            <h2 class="shopping-cart__menu-item--price" aria-label="${price}">
                ${price} SEK
            </h2>    
            </section>
        </li>    
    `
}

const createShoppingCartNavHTML = () => {
    const activeUser = activeUserStorage.getActiveUser();

    let total = calculateTotal(activeUser.getShoppingCart())
    return `
        <li class="shopping-cart__nav">
            <h2 class="total-amount">Total: ${total} SEK</h2>
            <button class="shopping-cart__nav--button">
                TILL KASSAN
            </button>
        </li>
    `
}

const createEmptyShoppingCartHtml = () => {
    return `
        <span class="empty-cart">Your cart is empty!</span>
    `
}