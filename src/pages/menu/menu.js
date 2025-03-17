import { closeSidebar, clickHam} from "../../components/navbar/navbar.js";
import { activeUserStorage } from "../../utils/usersStorage.js";
import { renderShoppingCart } from "../../components/shoppingCart/shoppingCart.js";

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
        <div class="menu__wonton" tabindex="${wonton.id}" id="${wonton.id}">    
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

            newWonton.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleMenuItemClick(wonton.id);
                }
            });
        
            newWonton.setAttribute("tabindex", "0");
        }
    }, 0);
    
}


function buildDip(dip) {
    let menuDipsRef = document.querySelector(".menu__dips")
    document.querySelector(".menu__dip-price").textContent = `${dip.price} sek`

    menuDipsRef.innerHTML += `
        <div class="menu__dips-dip" tabindex="${dip.id}" id="${dip.id}">
                <p>${dip.name}</p>
        </div>
    `
    setTimeout(() => {
        let newDip = document.getElementById(dip.id);
        if (newDip) {
            newDip.addEventListener("click", () => handleMenuItemClick(dip.id));
            newDip.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleMenuItemClick(dip.id);
                }
            });
        
            newDip.setAttribute("tabindex", "0");
        }
    }, 0);
}

function buildDrink(drink) {
    let menuDrinksRef = document.querySelector(".menu__drinks")
    document.querySelector(".menu__drink-price").textContent = `${drink.price} sek`

    menuDrinksRef.innerHTML += `
        <div class="menu__drinks-drink" tabindex="${drink.id}" id="${drink.id}">
                <p>${drink.name}</p>
        </div>
    `
    setTimeout(() => {
        let newDrink = document.getElementById(drink.id);
        if (newDrink) {
            newDrink.addEventListener("click", () => handleMenuItemClick(drink.id));

            newDrink.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleMenuItemClick(drink.id);
                }
            });
        
            newDrink.setAttribute("tabindex", "0");
        }
    }, 0);
}

function handleMenuItemClick(itemId) {
    console.log('clicked');
    const activeCustomer = activeUserStorage.getActiveUser();
    activeCustomer.addItemToShoppingCart(itemId)
    renderShoppingCart(activeCustomer.getShoppingCart())
}

