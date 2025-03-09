import { fetchMenu } from "./src/api/api.js";
import { buildMenu } from "./src/pages/menu/menu.js";

if(window.location.pathname === '/src/pages/menu/menu.html') {
    let menu = await fetchMenu()
    console.log(menu);
    buildMenu(menu)
}


