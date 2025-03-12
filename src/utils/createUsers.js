import { menuNew } from "../storage/data.js";
import { activeUserStorage, storeUsers } from "./usersStorage.js";

class User {
    constructor(username, password, role, email, profile_image) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.profile_image = profile_image;
    }

    //Change user info
    changeUserName(newUsername) {
        this.username = newUsername;
    }
    changePassword(newPassword) {
        this.password = newPassword;
    }
    changeEmail(newEmail) {
        this.email = newEmail;
    }
    changeProfilePicture(newProfilePic) {
        this.profile_image = newProfilePic;
    }
}


export class Customer extends User {
    constructor(username, password, role, email, profile_image) {
        super(username, password, role, email, profile_image)
        this.shoppingCart = [];
        this.orderHistory = [];
    }

    //Handle orders
    addItemToShoppingCart(itemID) {
        
        const itemToBeAdded = menuNew.items.find(item => item.id === Number(itemID));
        
        const itemExists = this.shoppingCart.find(item => itemToBeAdded.id === item.id)
        
        if (itemExists) {
            itemExists.quantity++;
        }
        else {
            this.shoppingCart.push({...itemToBeAdded, quantity: 1});
        }
        storeUsers.saveUsers()
    }
    removeItemFromCart(itemID) {
        const itemToBeRemoved = this.shoppingCart.find(item => item.id === Number(itemID));

        if (itemToBeRemoved.quantity > 1) {
            itemToBeRemoved.quantity--;
            storeUsers.saveUsers()
        }
        else {
            const index = this.shoppingCart.findIndex(item => item.id === Number(itemID));
            this.shoppingCart.splice(index, 1);
            storeUsers.saveUsers();    
        }

    }
    
    getShoppingCart() {
        return [...this.shoppingCart];
    }
    
    //Handle order history
    addOrderHistoryEvent() {
        /* Ska skapa ett orderhistory event av vid tillfället den shoppingcart vid köp */
    }
    
    getOrderHistoryEvent() {
        return [...this.orderHistory]
    } 
}

export class ActiveCustomer extends Customer {
    constructor(username, password, role, email, profile_image, shoppingCart) {
        super(username, password, role, email, profile_image);    
        this.shoppingCart = shoppingCart;
    }

    addItemToShoppingCart(itemID) {
        const itemToBeAdded = menuNew.items.find(item => item.id === Number(itemID));
        
        const itemExists = this.shoppingCart.find(item => itemToBeAdded.id === item.id)
        
        if (itemExists) {
            itemExists.quantity++;
        }
        else {
            this.shoppingCart.push({...itemToBeAdded, quantity: 1});
        }
        activeUserStorage.localActiveCustomer = this;
        activeUserStorage.saveUsers();
    }

    removeItemFromCart(itemID) {
        const itemToBeRemoved = this.shoppingCart.find(item => item.id === Number(itemID));

        if (itemToBeRemoved.quantity > 1) {
            itemToBeRemoved.quantity--;
            activeUserStorage.saveUsers();   
        }
        else {
            const index = this.shoppingCart.findIndex(item => item.id === Number(itemID));
            this.shoppingCart.splice(index, 1);
            activeUserStorage.localActiveCustomer = this;
            activeUserStorage.saveUsers();   
        }

    }
}

export class Admin extends User {
    constructor(username, password, role, email, profile_image) {
        super(username, password, role, email, profile_image)
    }
    
    getCustomerHistory(){
        /* Sammanställer samtliga kunders ordrar */
    }
}
