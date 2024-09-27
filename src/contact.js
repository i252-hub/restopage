import { createCafeContainer } from './containers.js';
export default function contactPage(){

const { cafe, container } = createCafeContainer();
const contact = document.createElement('div');
contact.classList.add('contact');
container.appendChild(contact);

const contactHeader = document.createElement('h1');
contactHeader.textContent = "Contact Us";
const map = document.createElement('img');
map.src = 'fantasy.jpg';
map.alt = 'map';
const info = document.createElement('p');
info.classList.add('info');

contact.appendChild(contactHeader);
contact.appendChild(map);
contact.appendChild(info);



    return cafe;
}