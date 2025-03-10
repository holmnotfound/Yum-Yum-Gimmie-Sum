import { menuNew } from "../storage/data.js";

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
        const itemToBeAdded = menuNew.items.find(item => item.id === itemID);
        this.shoppingCart.push(itemToBeAdded);
    }
    
    removeItemFromCart(itemID) {
        const itemToBeRemoved = this.shoppingCart.findIndex(item => item.id === itemID);
        this.shoppingCart.splice(itemToBeRemoved, 1);
    }
    
    getShoppingCart() {
        return [...this.shoppingCart];
    }
    
    addOrderHistoryEvent() {
        /* Ska skapa ett orderhistory event av vid tillfället den shoppingcart vid köp */
    }
    
    getOrderHistoryEvent() {
        return [...this.orderHistory]
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
