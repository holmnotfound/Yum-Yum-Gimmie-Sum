import { storeUsers } from "../../utils/usersStorage.js";
import { Customer } from "../../utils/createUsers.js";
import { randomTimer } from "../../utils/randomNumber.js";



document.addEventListener("DOMContentLoaded", function() {
    addEventListeners(); 
});


/*const newUser = new Customer('Rasmus', '123', 'Customer', 'rasmus@123.gmail.com', 'google')
storeUsers.addUserToStorage(newUser)
console.log(storeUsers.getUsersInfo());*/



// funktion som hämtar användarens, anropar funktion som hämtar testdata, loopar och jämför mail och lösenord
/*function validateForm(){
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = storeUsers.getUsersInfo();
    

    let userFound = false;
        userList.forEach(user => {
            if (email === user.email && password === user.password) {
                userFound = true;
                alert("Välkommen till appen");
                console.log('Rasmus är inloggad');
                
                //window.location.href = "/pages/menu/menu.html";
            }
        });

        if (!userFound) {
            alert("Fel e-post/lösenord");
        }
}*/

let allUsers = storeUsers.getUsersInfo();
console.log(allUsers);

function validateForm() {
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = storeUsers.getUsersInfo();
    
    let user = userList.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`${user.username} är inloggad`);
        
    } else {
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

/*async function fetchTestdata(){
    try{
        const response = await fetch('https://santosnr6.github.io/Data/yumyumusers.json'); 
        if(!response.ok) {
            throw new Error(`HTTP ERROR! Status: ${response.status}`);
        }

        const data = await response.json();  
        console.log(data); 
        return data.users; 

        } catch (error){
        alert("Error fetching users:", error);
        return [];
    }
}*/