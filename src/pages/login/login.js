import { activeUserStorage, storeUsers } from "../../../src/utils/usersStorage.js";
import { ActiveCustomer} from "../../utils/createUsers.js";
import { setUpShoppingCartEventListeners } from "../../components/shoppingCart/eventListeners.js";
import { kundkorg } from "../../components/navbar/navbar.js";


const currentAdmin = new Admin ("x", "x", "admin", "x", "x");
storeUsers.addUserToStorage(currentAdmin);
console.log(currentAdmin);


//Detta måste stå kvar
    /* kundkorg(); */
 setUpShoppingCartEventListeners();
 addEventListeners(); 

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