import { createCafeContainer } from './containers.js';
import coffeeImage from './coffee.png'

export default function homePage(){
   
const { cafe, container } = createCafeContainer();

//3rd container
const title = document.createElement('div');
title.classList.add('title');
container.appendChild(title);

const coffee = document.createElement('img');
coffee.src = coffeeImage;
coffee.alt = 'coffee';
coffee.classList.add('brew');
const headingone = document.createElement('h1');
headingone.textContent = 'BREWING CAFE';
const text = document.createElement('p');
text.classList.add('text');
text.textContent = `Lorem ipsum odor amet, consectetuer adipiscing elit.
                             Hac adipiscing rhoncus hac auctor aliquam. Accumsan
                              tincidunt ipsum tristique ac platea. <i>123 Village City</i>
                               fringilla tincidunt convallis tristique. Torquent
                                pretium tortor suscipit sagittis justo. Mi lacus non
                                 maecenas sit ac. Pretium imperdiet dictum vestibulum 
                                 praesent tempor nibh curae pellentesque. Lectus massa
                                  ipsum a ipsum ad feugiat ultrices efficitur.`;
headingone.appendChild(text);
const sched = document.createElement('p');
sched.classList.add('sched');
sched.textContent = 'Mondays and Saturdays';

title.appendChild(coffee);
title.appendChild(headingone);
container.appendChild(sched);


return cafe;

}
