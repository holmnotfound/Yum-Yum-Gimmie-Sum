import { fetchMenu } from "./src/api/api.js";
import { buildMenu } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { Customer } from "./src/utils/createUsers.js"
import { storeUsers } from "./src/utils/usersStorage.js";
import { Admin } from "./src/utils/createUsers.js";
import { setUpShoppingCart } from "./src/components/shoppingCart/shoppingCart.js";

if(window.location.pathname === '/src/pages/menu/menu.html') {
    buildMenu(menuNew)
    console.log(menuNew);  
}






/* storeUsers.clearUsersStorage();
export const activeUser = new Customer('Rasmus', '123', 'Customer', 'rasmus@123.gmail.com', 'google')
storeUsers.addUserToStorage(activeUser)
activeUser.addItemToShoppingCart(menuNew.items[0].id)
activeUser.addItemToShoppingCart(menuNew.items[1].id)
activeUser.addItemToShoppingCart(menuNew.items[0].id)
activeUser.addItemToShoppingCart(menuNew.items[1].id)
activeUser.addItemToShoppingCart(menuNew.items[13].id)


const calle = new Customer('Calle', 'x', 'x', 'x','x')
storeUsers.addUserToStorage(calle)
calle.addItemToShoppingCart(menuNew.items[0].id)
calle.addItemToShoppingCart(menuNew.items[0].id)
calle.addItemToShoppingCart(menuNew.items[7].id)

setUpShoppingCart(activeUser.shoppingCart); */

