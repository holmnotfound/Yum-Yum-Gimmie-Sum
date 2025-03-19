/* changeHamMeny(); */

export function changeHamMeny(){
    let activUserRef = localStorage.getItem('activeCustomer')

    let loginElement = document.querySelector("#last-list-item a");
    let profilElement = document.querySelector("#profil")

    if(activUserRef){
        loginElement.textContent = "LOGGA UT"
        loginElement.href = "#"

        loginElement.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem("activeCustomer");
            alert('Du loggas ut')
            location.reload();
        })
    } else if (!activUserRef){
        profilElement.style.display = "none";
    }
}