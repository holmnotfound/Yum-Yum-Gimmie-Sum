
export const setUpShoppingCart = (items) => {
    const shoppingCartContainer = document.createElement('section');
    shoppingCartContainer.classList.add('shopping-cart__container');
    
    const shoppingCartImg = document.createElement('img');
    shoppingCartImg.src = './images/shopping-cart-black.svg';
    shoppingCartImg.classList.add('shopping-cart__img')
    shoppingCartContainer.appendChild(shoppingCartImg)

    const shoppingCartList = document.createElement('ul');
    shoppingCartList.classList.add('shopping-cart__list')
    shoppingCartList.setAttribute('aria-hidden', 'true');
    shoppingCartContainer.appendChild(shoppingCartList);
    
    items.forEach((item) => {
        const menuItemElement = createShoppingCartHTML(item);
        shoppingCartList.innerHTML += `${menuItemElement}`
    })

    return shoppingCartContainer;
}

const createShoppingCartHTML = (item) => {
    const{id, type, name, description, ingredients, price} = item; 

    return `
        <li class="shopping-cart__list-item" data-id=${id}>
            <section class="shopping-cart__navigation">
                <a class="shopping-cart__decrement-product">
                    <img class="arrow arrow-decrement" src="./images/arrow-decrement.svg" alt="Remove ${name} from your order"/>
                </a>
                <span class="number-of-products">0</span>
                <a class="shopping-cart__increment-product">
                    <img class="arrow arrow-increment" src="./images/arrow-increment.svg" alt="Add another ${name} to your order"/>
                </a>
            </section>
            <section class="shopping-cart__products">
            <h2 class="shopping-cart__menu-item--heading" aria-label="${name}">
                ${name} 
            </h2>
            <h2 class="shopping-cart__menu-item--price" aria-label="${price}">
                ${price} SEK
            </h2>    
            </section>
        </li>    
    `
}


