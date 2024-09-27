import { createCafeContainer } from './containers.js';

export default function menuPage(){

    const { cafe, container } = createCafeContainer()

    const menu = document.createElement('div');
    menu.classList.add('menu');
    container.appendChild(menu);
    
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Menu';
    menu.appendChild(menuHeader);
    
    function boxes(){
        const box = document.createElement('div');
        box.classList.add('box');
    
    const productTitle = document.createElement('h3');
    productTitle.textContent = 'Espresso One';
    const desc =  document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = 'Lorem ipsum dolor sit amet.';
    const frame = document.createElement('div');
    frame.classList.add('frame');
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = '$3.50';
    
    box.appendChild(productTitle);
    box.appendChild(desc);
    box.appendChild(frame);
    box.appendChild(price);
    
    return box;
    
    }
    
    for(let i = 0; i< 5; i++){
        const newbox = boxes();
        menu.appendChild(newbox)
    }

    console.log('Menu loaded:', cafe);
    
    return cafe;
}

