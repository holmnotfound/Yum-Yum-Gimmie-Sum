import { activeUserStorage } from "../../utils/usersStorage.js"


const setUpUserProfile = () => {
    const activeUser = activeUserStorage.getActiveUser()
    setUpUserName(activeUser.username);
    setUpProfilePic(activeUser.profile_image);
    setUpUserEmail(activeUser.email);
    setUpUserPassword(activeUser.password);
    setUpChangeEmailButton();
    setUpChangePasswordButton();
}


const setUpUserName = (username) => {
    const userNameElement = document.querySelector('.username');
    userNameElement.innerText = username;
}

const setUpProfilePic = (profilePic) => {
    const profilePicElement = document.querySelector('.profile-pic-link');
    profilePicElement.innerText = profilePic === undefined ? 'No pic available' : profilePic;
}

const setUpUserEmail = (email) => {
    const emailInput = document.querySelector('#email-input');
    emailInput.classList.add('hide-element')
    const userEmailElement = document.querySelector('.email')
    userEmailElement.innerText = email;
}

const setUpUserPassword = (password) => {
    const passwordInputNew = document.querySelector('#password-input-new');
    passwordInputNew.classList.add('hide-element');


    const userPasswordElement = document.querySelector('.password')
    const passwordStarred = password.replace(/./g, '*')
    userPasswordElement.innerText = passwordStarred;
}

const setUpChangeEmailButton = () => {
    const button = document.querySelector('#change-email-button');
    const emailInput = document.querySelector('#email-input');
    const userEmailElement = document.querySelector('.email')

    button.addEventListener('click', () => {
        emailInput.classList.toggle('hide-element')
        userEmailElement.classList.toggle('hide-element')
    })
}

const setUpChangePasswordButton = () => {
    const button = document.querySelector('#change-password-button');
    const passwordInputNew = document.querySelector('#password-input-new');
    const passwordElement = document.querySelector('.password');

    button.addEventListener('click', () => {
        passwordInputNew.classList.toggle('hide-element')
        passwordElement.classList.toggle('hide-element')
    })
}

setUpUserProfile();