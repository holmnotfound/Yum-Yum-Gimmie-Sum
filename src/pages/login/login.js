import { activeUserStorage, storeUsers } from "../../../src/utils/usersStorage.js";
import { menuNew } from "../../storage/data.js";
import { ActiveCustomer, Admin, Customer } from "../../utils/createUsers.js";
import { setUpShoppingCartEventListeners } from "../../components/shoppingCart/eventListeners.js";
import { kundkorg } from "../../components/navbar/navbar.js";

//lägger till admin med inlogg x x
const storedUsers = storeUsers.getUsersInfo();
const adminExists = storedUsers.some(user => user.role === "admin");

if (!adminExists) {
    const currentAdmin = new ActiveCustomer("x", "x", "admin", "x", "x", []);
    storeUsers.addUserToStorage(currentAdmin);
}


//ser till att validateForm byter sida till menu korrekt
/* if(window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
    console.log(menuNew);  
} */
    /* kundkorg(); */
 setUpShoppingCartEventListeners();
 addEventListeners(); 

//loggar vilka users som finns
const users = storeUsers.getUsersInfo();
console.log(users);


function addEventListeners() {
    const submitBtn = document.querySelector(".login-btn"); 
    if (submitBtn) {
        submitBtn.addEventListener('click', validateForm);
    }

    const registerBtn = document.querySelector(".register-btn");
    if (registerBtn) {
        registerBtn.addEventListener('click', Event => {
            window.location.href="../../../src/pages/register/register.html"
        });  
    }
}

// validerar form genom find, söker efter rätt user och kollar mail & lösen.
// vid lyckad inloggning - sätter user som activeUser och byter sida till menu
// om inloggningen misslyckas - alert
function validateForm() {

console.log('hej')
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = storeUsers.getUsersInfo();
    
    let user = userList.find(user => user.email === email && user.password === password);

    
  
    if (user) {
        if (user.role==="admin"){
            alert('Inloggad som admin');
            window.location.href = "../../../src/pages/admin/admin.html"
        }
        else{

            alert(`${user.username} är inloggad`);
            const activeCustomer = new ActiveCustomer(user.username, user.password, user.role, user.email, user.profile_image, user.shoppingCart)
            activeUserStorage.addUserToStorage(activeCustomer)
            
            window.location.href = "../../../src/pages/menu/menu.html";
            
        } 
    }

    else {
        alert("Fel e-post/lösenord");
       
    }
}