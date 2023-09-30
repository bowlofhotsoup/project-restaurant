import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');
    header.appendChild(createNav());

    return header;
}

function createNav(){
    const tabDiv = document.createElement('nav');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    homeTab.textContent = 'Home';
    homeTab.classList.add('btn-nav');
    homeTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active'))return;
        setActiveButton(homeTab);
        loadHome();
    })
    tabDiv.appendChild(homeTab);

    menuTab.textContent = 'Menu';
    menuTab.classList.add('btn-nav');
    menuTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active'))return;
        setActiveButton(menuTab);
        loadMenu();
    })
    tabDiv.appendChild(menuTab);

    contactTab.textContent = 'Contact';
    contactTab.classList.add('btn-nav');
    contactTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active'))return;
        setActiveButton(contactTab);
        loadContact();
    })
    tabDiv.appendChild(contactTab);

    return tabDiv;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.btn-nav');
    buttons.forEach((button) => {
        if(button !== this){
            button.classList.remove('active');
        }
    })
    button.classList.add('active');
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function initWebsite(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    setActiveButton(document.querySelector('.btn-nav'));
    loadHome();
}

initWebsite();