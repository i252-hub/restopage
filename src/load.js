import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

let content = document.querySelector('#content');

export function loadcontent(){
   loadHome();
}

export function loadHome(){
    content.textContent = '';
    const home = homePage();
    content.appendChild(home);
}

export function loadMenu(){
    content.textContent = '';
    const menu = menuPage();
    content.appendChild(menu);
}

export function loadContact(){
    content.textContent = '';
    const contact = contactPage();
    content.appendChild(contact);

}