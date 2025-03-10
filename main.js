import { fetchMenu } from "./src/api/api.js";
import { buildMenu } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"

if(window.location.pathname === '/src/pages/menu/menu.html') {
    buildMenu(menuNew)
    console.log(menuNew);  
}


