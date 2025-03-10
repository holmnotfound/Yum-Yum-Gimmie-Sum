

export const storeUsers = {
    usersStorage: JSON.parse(localStorage.getItem('Users')) || [],

    addUserToStorage: function (user) {
        console.log(user)
        if(user) {
            this.usersStorage.push(user);
            localStorage.setItem('Users', JSON.stringify(this.usersStorage));
        }
    },

        removeUserFromStorage: function(user) {
        let userFound = storeUsers.usersStorage.find((user ) => {
            return user.id === id;
        })
        this.usersStorage.splice(this.usersStorage.indexOf(userFound), 1);
        localStorage.setItem('Users', JSON.stringify(this.usersStorage));
    },

    clearUsersStorage: function () {
        this.usersStorage = [];
    },

    getUsersInfo: function () {
        return JSON.parse(localStorage.getItem('Users')) || [];    
    }
}