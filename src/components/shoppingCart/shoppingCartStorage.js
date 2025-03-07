

export const shoppingCartStorage = {
    shoppingCartLocalStorage: JSON.parse(localStorage.getItem('shoppingCart')) || [],

    addItemToCart: function (item) {
        console.log(item)
        if(item) {
            this.shoppingCartLocalStorage.push(item);
            localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCartLocalStorage));
        }
    },

/*     removeItemFromCart: function(item) {
        let elementFound = shoppingCartStorage.shoppingCartLocalStorage.find((item ) => {
            return item.id === id;
        })
        this.shoppingCartLocalStorage.splice(this.shoppingCartLocalStorage.indexOf(elementFound), 1);
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCartLocalStorage));
    }, */

    getCartInfo: function () {
        return JSON.parse(localStorage.getItem('shoppingCart')) || [];    
    }
}
