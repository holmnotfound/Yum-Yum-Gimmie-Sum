import { fetchMenu } from "./src/api/api.js";
import { buildMenu } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { Customer } from "./src/utils/createUsers.js"
import { storeUsers } from "./src/utils/usersStorage.js";
import { Admin } from "./src/utils/createUsers.js";


if(window.location.pathname === '/src/pages/menu/menu.html') {
    buildMenu(menuNew)
    console.log(menuNew);  
}

/* const newUser = new Customer('Rasmus', '123', 'Customer', 'rasmus@123.gmail.com', 'google')
storeUsers.addUserToStorage(newUser)
console.log(storeUsers.getUsersInfo()); */

