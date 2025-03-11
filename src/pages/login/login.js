import { storeUsers } from "../../../src/utils/usersStorage.js";

document.addEventListener("DOMContentLoaded", function() {
    addEventListeners(); 
});




// funktion som hämtar användarens, anropar funktion som hämtar testdata, loopar och jämför mail och lösenord
function validateForm(){
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = storeUsers.getUsersInfo();

    let userFound = false;
        userList.forEach(user => {
            if (email === user.email && password === user.password) {
                userFound = true;

                alert("Välkommen till appen");
                console.log( user.username, 'är inloggad');
                
                //window.location.href = "/pages/menu/menu.html";
            }
        });

        if (!userFound) {
            alert("Fel e-post/lösenord");
        }
}

function addEventListeners() {
    const submitBtn = document.querySelector(".login-btn"); 
    submitBtn.addEventListener('click', validateForm);
    const registerBtn = document.querySelector(".register-btn");
    registerBtn.addEventListener('click', Event => {
        alert('Byter sida till registreringssidan')
        window.location.href="./pages/register.html"
    });  
}
