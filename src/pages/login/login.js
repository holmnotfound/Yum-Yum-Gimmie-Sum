import { storeUsers } from "../../../src/utils/usersStorage.js";

//testar och loggar activeUser
getActiveUser();

//ser till att validateForm byter sida till menu korrekt
if(window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
    console.log(menuNew);  
}

document.addEventListener("DOMContentLoaded", function() {
    addEventListeners(); 
});


//loggar vilka users som finns
const users = storeUsers.getUsersInfo();
console.log(users);


function addEventListeners() {
    const submitBtn = document.querySelector(".login-btn"); 
    submitBtn.addEventListener('click', validateForm);


    const registerBtn = document.querySelector(".register-btn");
    registerBtn.addEventListener('click', Event => {
        alert('Byter sida till registreringssidan')
        window.location.href="./pages/register.html"
    });  
}

// validerar form genom find, söker efter rätt user och kollar mail & lösen.
// vid lyckad inloggning - sätter user som activeUser och byter sida till menu
// om inloggningen misslyckas - alert
function validateForm() {


    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = storeUsers.getUsersInfo();
    
    let user = userList.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`${user.username} är inloggad`);
        setActiveUser(user);
        getActiveUser();
        
        window.location.href = "../../../src/pages/menu/menu.html";
        
    } else {
        alert("Fel e-post/lösenord");
    }
}

function setActiveUser(user){
        localStorage.setItem("activeUser", JSON.stringify(user));
}

export function getActiveUser(){
        let activeUser = localStorage.getItem("activeUser");
        console.log(activeUser);
        return activeUser;
}