import { fetchMenu } from "./src/api/api.js";
import { buildMenu } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { Customer } from "./src/utils/createUsers.js"
import { storeUsers } from "./src/utils/usersStorage.js";
import { Admin } from "./src/utils/createUsers.js";
import { setUpShoppingCart, renderShoppingCart } from "./src/components/shoppingCart/shoppingCart.js";
import { setUpShoppingCartEventListeners } from "./src/components/shoppingCart/eventListeners.js";
import { clickHam, closeSidebar, kundkorg } from "./src/components/navbar/navbar.js";


if (!window.location.pathname.includes('/src/pages/menu/menu.html')) {
    console.log('Detta körs')
        storeUsers.clearUsersStorage();
        const rasmus = new Customer('Rasmus', 'x', 'Customer', 'x', 'google')
        storeUsers.addUserToStorage(rasmus)
        const Calle = new Customer('Calle', '1', 'Customer', '1', 'google')
        storeUsers.addUserToStorage(Calle)
        
        Calle.addItemToShoppingCart(menuNew.items[0].id)
        Calle.addItemToShoppingCart(menuNew.items[1].id)
        rasmus.addItemToShoppingCart(menuNew.items[0].id)
        rasmus.addItemToShoppingCart(menuNew.items[1].id)
        rasmus.addItemToShoppingCart(menuNew.items[13].id)
        rasmus.addItemToShoppingCart(menuNew.items[16].id)
        rasmus.addItemToShoppingCart(menuNew.items[16].id)
        rasmus.addItemToShoppingCart(menuNew.items[6].id)
}

if(window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
}


setUpShoppingCartEventListeners();

/* ska detta ligga här?? */
function menuBtn() {
    const menuBtn = document.querySelector(".landing__button");
   menuBtn.addEventListener('click', () => {
    window.location.href = "/src/pages/menu/menu.html"
   })
}

function logInBtn() {
    const login = document.querySelector(".landing__button--secondary");
    login.addEventListener('click', () => {
        window.location.href = "/src/pages/login/login.html"
    })
}

menuBtn()
logInBtn()

