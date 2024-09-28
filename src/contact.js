import { createCafeContainer } from './containers.js';
import mapImage from './fantasy.jpg'

export default function contactPage(){

const { cafe, container } = createCafeContainer();
const contact = document.createElement('div');
contact.classList.add('contact');
container.appendChild(contact);

const contactHeader = document.createElement('h1');
contactHeader.textContent = "Contact Us";
const map = document.createElement('img');
map.src = mapImage;
map.alt = 'map';
map.classList.add('map');
const info = document.createElement('p');
info.classList.add('info');
info.textContent = "123 Main St, Anytown, USA";

contact.appendChild(contactHeader);
contact.appendChild(map);
contact.appendChild(info);



    return cafe;
}