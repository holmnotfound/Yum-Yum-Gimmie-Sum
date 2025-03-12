import { fetchMenu } from "./src/api/api.js";
import { buildMenu } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { Customer } from "./src/utils/createUsers.js"
import { storeUsers } from "./src/utils/usersStorage.js";
import { Admin } from "./src/utils/createUsers.js";
import { setUpShoppingCart, renderShoppingCart } from "./src/components/shoppingCart/shoppingCart.js";
import { setUpShoppingCartEventListeners } from "./src/components/shoppingCart/eventListeners.js";
import { clickHam, closeSidebar, kundkorg } from "./src/components/navbar/navbar.js";

if(window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
}

storeUsers.clearUsersStorage();
const rasmus = new Customer('Rasmus', 'x', 'Customer', 'x', 'google')
storeUsers.addUserToStorage(rasmus)

rasmus.addItemToShoppingCart(menuNew.items[0].id)
rasmus.addItemToShoppingCart(menuNew.items[1].id)
rasmus.addItemToShoppingCart(menuNew.items[0].id)
rasmus.addItemToShoppingCart(menuNew.items[1].id)
rasmus.addItemToShoppingCart(menuNew.items[13].id)
rasmus.addItemToShoppingCart(menuNew.items[16].id)
rasmus.addItemToShoppingCart(menuNew.items[16].id)
rasmus.addItemToShoppingCart(menuNew.items[6].id)

setUpShoppingCartEventListeners();

