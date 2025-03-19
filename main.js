import { buildMenu, filterMenu, menuItemClick } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { quickContentShoppingCart } from "./src/components/shoppingCart/shoppingCart.js";
import { setUpShoppingCartEventListeners } from "./src/components/shoppingCart/eventListeners.js";

if (window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
    filterMenu()
    // quickContentShoppingCart()
    menuItemClick()

} else if (window.location.pathname.includes('index.html')) {
    menuBtn()
    logInBtn()
}

if (!window.location.pathname.includes('index.html')) {
    quickContentShoppingCart()
}

setUpShoppingCartEventListeners();

function menuBtn() {
    const menuBtn = document.querySelector(".landing__button--primary");
    const navigateToMenu = () => {
        window.location.href = "src/pages/menu/menu.html";
    };

    menuBtn.addEventListener('click', navigateToMenu);
    menuBtn.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateToMenu();
        }
    });
}

function logInBtn() {
    const menuBtn = document.querySelector(".landing__button--secondary");
    const navigateToMenu = () => {
        window.location.href = "src/pages/login/login.html";
    };

    menuBtn.addEventListener('click', navigateToMenu);
    menuBtn.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateToMenu();
        }
    });
}