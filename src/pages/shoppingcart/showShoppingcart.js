import { changeProductAmountClick } from '../../components/shoppingCart/eventListeners.js';
import { createShoppingCartHTML } from '../../components/shoppingCart/shoppingCart.js';
import { activeUserStorage } from '../../utils/usersStorage.js';

const menuItemsContainer = document.querySelector('.menu-items');

function renderCart() {
    const activeCustomer = activeUserStorage.getActiveUser();
    const shoppingCart = activeCustomer ? activeCustomer.getShoppingCart() : [];

    if (shoppingCart.length > 0) {
        shoppingCart.forEach((item) => {
            const menuItemElement = createShoppingCartHTML(item);
            menuItemsContainer.innerHTML += menuItemElement;
        });
    } else {
        menuItemsContainer.textContent = "Din kundkorg är tom.";
    }
    
    const totalAmount = shoppingCart.reduce((total, item) => total + item.quantity * item.price, 0);
    let totalAmountMoms = totalAmount * 1.25;
    const totalAmountElement = document.querySelector('.total-amount-checkout');
    if (totalAmountElement) {
        totalAmountElement.textContent = `${totalAmountMoms} SEK`;
    }
}

renderCart()

changeProductAmountClick(menuItemsContainer);
menuItemsContainer.addEventListener('click', (e) => {
    menuItemsContainer.innerHTML = ''
    renderCart()
})

const orderButton = document.querySelector('.order__button--primary');
orderButton.addEventListener('click', () => {
    window.location.href = '../orderconfirmation/orderConf.html';
});