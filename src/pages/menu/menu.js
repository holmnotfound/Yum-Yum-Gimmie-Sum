import { closeSidebar, clickHam} from "../../components/navbar/navbar.js";
import { activeUser } from "../../../main.js";

closeSidebar(), clickHam();

export function buildMenu(menu) {
    menu.items.forEach((menuItem) => {
        
        if(menuItem.type === 'wonton'){
            buildWonton(menuItem)
        } 

        if(menuItem.type === 'dip'){
            buildDip(menuItem)
        }
    
        if(menuItem.type === 'drink'){
            buildDrink(menuItem)
        }

    })  
}

function buildWonton(wonton) {
    let menuWontonRef = document.querySelector(".menu__wontons")

    menuWontonRef.innerHTML += ` 
        <div class="menu__wonton" id="${wonton.id}">    
            <div class="menu__wonton-name">    
                    <h3>${wonton.name}</h3>
                    <h3>${wonton.price} sek</h3>
                </div>
                <div class="menu__wonton-detail">
                    <p>${wonton.ingredients.join(", ")}</p>
                </div>    
            </div>
        </div>
    `
    
    setTimeout(() => {
        let newWonton = document.getElementById(wonton.id);
        if (newWonton) {
            newWonton.addEventListener("click", () => handleMenuItemClick(wonton.id));
        }
    }, 0);
    
}


function buildDip(dip) {
    let menuDipsRef = document.querySelector(".menu__dips")
    document.querySelector(".menu__dip-price").textContent = `${dip.price} sek`

    menuDipsRef.innerHTML += `
        <div class="menu__dips-dip" id="${dip.id}">
                <p>${dip.name}</p>
        </div>
    `
    setTimeout(() => {
        let newWonton = document.getElementById(dip.itemId);
        if (newWonton) {
            newWonton.addEventListener("click", () => handleMenuItemClick(dip.id));
        }
    }, 0);
}

function buildDrink(drink) {
    let menuDrinksRef = document.querySelector(".menu__drinks")
    document.querySelector(".menu__drink-price").textContent = `${drink.price} sek`

    menuDrinksRef.innerHTML += `
        <div class="menu__drinks-drink" id="${drink.id}">
                <p>${drink.name}</p>
        </div>
    `
    setTimeout(() => {
        let newWonton = document.getElementById(drink.id);
        if (newWonton) {
            newWonton.addEventListener("click", () => handleMenuItemClick(drink.id));
        }
    }, 0);
}

function handleMenuItemClick(itemId) {
    console.log('clicked');
    activeUser.addItemToShoppingCart(itemId)
    console.log(activeUser.getShoppingCart());
}

