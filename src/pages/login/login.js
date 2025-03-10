document.addEventListener("DOMContentLoaded", function() {
    addEventListeners(); 
});

// funktion som hämtar användarens, anropar funktion som hämtar testdata, loopar och jämför mail och lösenord
async function validateForm(){
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = await fetchTestdata();

    let userFound = false;
        userList.forEach(user => {
            if (email === user.email && password === user.password) {
                userFound = true;
                alert("Välkommen till appen");
                window.location.href=":/pages/menu.html"
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

async function fetchTestdata(){
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
}