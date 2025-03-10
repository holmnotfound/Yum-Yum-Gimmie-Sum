import { placeHolderData } from "../../../main.js";

export const userShoppingCart = () => {
    let shoppingCart = [];

    return {
        addItemToCart: function(id) {
            const itemToBeAdded = placeHolderData.items.find(item => item.id === id);
            shoppingCart.push(itemToBeAdded);
        },
        removeItemFromCart: function(id) {
            const itemToBeRemoved = shoppingCart.findIndex(item => item.id === id);
            shoppingCart.splice(itemToBeRemoved, 1);
        },
        getShoppingCart: function() {
            console.log(shoppingCart)
            return shoppingCart;
        }
    }
}

/* export const shoppingCartStorage = {
    shoppingCartLocalStorage: JSON.parse(localStorage.getItem('shoppingCart')) || [],

    addItemToCart: function (id) {
        console.log(id)
        if(item) {
            this.shoppingCartLocalStorage.push(item);
            localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCartLocalStorage));
        }
    },

        removeItemFromCart: function(item) {
        let elementFound = shoppingCartStorage.shoppingCartLocalStorage.find((item ) => {
            return item.id === id;
        })
        this.shoppingCartLocalStorage.splice(this.shoppingCartLocalStorage.indexOf(elementFound), 1);
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCartLocalStorage));
    },

    clearShoppingCart: function () {
        this.shoppingCartLocalStorage = [];
    },

    getCartInfo: function () {
        return JSON.parse(localStorage.getItem('shoppingCart')) || [];    
    }
} */




