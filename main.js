import { fetchMenu } from "./src/api/api.js";
import { buildMenu, filterMenu } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { Customer } from "./src/utils/createUsers.js"
import { storeUsers } from "./src/utils/usersStorage.js";
import { Admin } from "./src/utils/createUsers.js";
import { setUpShoppingCart, renderShoppingCart, quickContentShoppingCart } from "./src/components/shoppingCart/shoppingCart.js";
import { setUpShoppingCartEventListeners } from "./src/components/shoppingCart/eventListeners.js";
import { clickHam, closeSidebar, kundkorg } from "./src/components/navbar/navbar.js";


if(window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
    filterMenu()
    quickContentShoppingCart()
}

setUpShoppingCartEventListeners();

/* ska detta ligga här?? */

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

menuBtn()
logInBtn()

