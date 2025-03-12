/* import { activeUser } from "../../main";
 */
import { ActiveCustomer } from "../utils/createUsers.js";

export const storeUsers = {
    localUsers: [],

    addUserToStorage: function(user) {
        if(user) {
            this.localUsers.push(user);
            this.saveUsers();
        }
    },

    removeUserFromStorage: function(user) {
    let userFound = this.localUsers.find((user) => {
        return user.id === id;
    })
    this.localUsers.splice(this.usersStorage.indexOf(userFound), 1);
    this.saveUsers()
    },

    clearUsersStorage: function () {
        this.usersStorage = [];
        this.saveUsers();
    },

    getUsersInfo: function () {
        return JSON.parse(localStorage.getItem('Users')) || [];    
    },

    saveUsers: function() {
        localStorage.setItem('Users', JSON.stringify(this.localUsers));
    },

    updateUser: function(user) {
        this.localUsers.indexOf((targetUser) => {
            if (targetUser.username === user.username) {
                this.localUsers.replace(this.usersStorage.indexOf(userFound), user);
            }
        })
    }
}

export const activeUserStorage = {
    localActiveCustomer: null,

    addUserToStorage: function(user) {
        if(user) {
            const activeCustomer = new ActiveCustomer(
                user.username, 
                user.password, 
                user.role, user.email, 
                user.profile_image, 
                user.shoppingCart
            )

            this.localActiveCustomer = activeCustomer;
            this.saveUsers();
        }
    },

    saveUsers: function() {
        if (!this.localActiveCustomer) {
            console.warn("No active customer to save!");
            return;
        }
    
        localStorage.setItem('activeCustomer', JSON.stringify({
            username: this.localActiveCustomer.username,
            password: this.localActiveCustomer.password,
            role: this.localActiveCustomer.role,
            email: this.localActiveCustomer.email,
            profile_image: this.localActiveCustomer.profile_image,
            shoppingCart: this.localActiveCustomer.shoppingCart
        }));
    },

    getActiveUser: function() {
        let activeCustomerLocalStorage = localStorage.getItem("activeCustomer");
        activeCustomerLocalStorage = JSON.parse(activeCustomerLocalStorage);

            this.localActiveCustomer = new ActiveCustomer(
            activeCustomerLocalStorage.username,
            activeCustomerLocalStorage.password,
            activeCustomerLocalStorage.role,
            activeCustomerLocalStorage.email,
            activeCustomerLocalStorage.profile_image,
            activeCustomerLocalStorage.shoppingCart || []
        );

    return this.localActiveCustomer; 
    }
}