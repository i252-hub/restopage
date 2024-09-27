import "./styles.css";
import {loadcontent} from "./load.js";
import { loadHome } from "./load.js";
import { loadMenu } from "./load.js";
import { loadContact } from "./load.js";
const home = document.querySelector('.homeBtn');
const menu = document.querySelector('.menuBtn');
const contact = document.querySelector('.contactBtn');

document.addEventListener('DOMContentLoaded', () => {
    loadcontent();
});

home.addEventListener('click', ()=>{
    loadHome();
});

menu.addEventListener('click', () => {
    loadMenu();
});

contact.addEventListener('click', () => {
    loadContact();
})