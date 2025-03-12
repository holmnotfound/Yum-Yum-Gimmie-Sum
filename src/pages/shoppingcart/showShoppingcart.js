import { createShoppingCartHTML } from '../../components/shoppingCart/shoppingCart.js';

const activeUser = JSON.parse(localStorage.getItem('activeUser'));
const shoppingCart = activeUser ? activeUser.shoppingCart : [];

console.log('Shopping Cart:', shoppingCart);

const menuItemsContainer = document.querySelector('.menu-items');

if (shoppingCart.length > 0) {
    shoppingCart.forEach((item) => {
        item.price = item.price * item.quantity;
    });

    shoppingCart.forEach((item) => {
        const menuItemElement = createShoppingCartHTML(item);
        menuItemsContainer.innerHTML += menuItemElement;
    });
} else {
    menuItemsContainer.textContent = "Din kundkorg är tom.";
}

const totalAmount = shoppingCart.reduce((total, item) => total + item.price, 0);
const totalAmountElement = document.querySelector('.total-amount-checkout');
if (totalAmountElement) {
    totalAmountElement.textContent = `${totalAmount} kr`;
}

const orderButton = document.querySelector('.order__button--primary');
orderButton.addEventListener('click', () => {
    window.location.href = '../orderconfirmation/orderConf.html';
});