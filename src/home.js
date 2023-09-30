import Hamburger from './img/hamburger.jpg';

function createHome(){
    const homeDiv = document.createElement('div');
    const title = document.createElement('h1');
    const image = document.createElement('img');
    const description = document.createElement('h3');

    title.textContent = 'Five BurgerZ';
    homeDiv.appendChild(title);

    image.src = Hamburger;
    homeDiv.appendChild(image);

    description.textContent = 'Did you know that a cold beef patty is called a brrger?';
    homeDiv.appendChild(description);

    return homeDiv;
}

function loadHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;