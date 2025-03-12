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
export const activeUser = new Customer('Rasmus', '123', 'Customer', 'rasmus@123.gmail.com', 'google')
storeUsers.addUserToStorage(activeUser)
activeUser.addItemToShoppingCart(menuNew.items[0].id)
activeUser.addItemToShoppingCart(menuNew.items[1].id)
activeUser.addItemToShoppingCart(menuNew.items[0].id)
activeUser.addItemToShoppingCart(menuNew.items[1].id)
activeUser.addItemToShoppingCart(menuNew.items[13].id)
activeUser.addItemToShoppingCart(menuNew.items[16].id)
activeUser.addItemToShoppingCart(menuNew.items[16].id)
activeUser.addItemToShoppingCart(menuNew.items[6].id)

console.log('MAIN KÖRS')



const calle = new Customer('Calle', 'x', 'x', 'x','x')
storeUsers.addUserToStorage(calle)
calle.addItemToShoppingCart(menuNew.items[0].id)
calle.addItemToShoppingCart(menuNew.items[0].id)
calle.addItemToShoppingCart(menuNew.items[7].id)
setUpShoppingCartEventListeners();

