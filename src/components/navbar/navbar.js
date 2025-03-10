
function showSidebar() {
    const sidebar = document.querySelector('.nav__list--sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav__list--sidebar');
    sidebar.style.display = 'none';
}

export function clickHam() {
    const hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        console.log('hello')
        showSidebar();
    })
}

export function closeSidebar() {
    const xClose = document.querySelector('#x-solid');
    xClose.addEventListener('click', () => {
        hideSidebar();
    })
}

//Dessa två functions ska till script.main
closeSidebar(); clickHam();