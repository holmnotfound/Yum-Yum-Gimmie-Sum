/* import { activeUser } from "../../main";
 */

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