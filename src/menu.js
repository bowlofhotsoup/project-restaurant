import DoubleCheeseBurger from './img/DoubleCheeseBurger.png';
import DoubleMushroomSwiss from './img/DoubleMushroomSwiss.png';
import Whopper from './img/Whopper.png';
import TenderGrillChicken from './img/TenderGrillChicken.png';

function createMenu(){
    const menuDiv = document.createElement('div');
    
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu';
    menuDiv.appendChild(menuHeader);

    menuDiv.appendChild(createMenuItem(
        DoubleCheeseBurger,
        'Double Cheese Burger',
        'Two flame-grilled beef patties topped with melted cheese, pickles, yellow mustard and ketchup on a toasted sesame seed bun'
    ));

    menuDiv.appendChild(createMenuItem(
        DoubleMushroomSwiss,
        'Double Mushroom Swiss',
        'Melted Swiss cheese on two flame-grilled beef patties, topped with mushroom sauce, served on a sesame seed bun'
    ));

    menuDiv.appendChild(createMenuItem(
        Whopper,
        'Whopper',
        'Flame-grilled beef patty, topped with pickles, tomatoes, lettuce and onions, finished with creamy mayo, and served on a sesame seed bun'
    ));

    menuDiv.appendChild(createMenuItem(
        TenderGrillChicken,
        'Tender Grill Chicken',
        'Juicy chicken thigh patty topped with a tomato slice, shredded lettuce and creamy mayo to bring out all the flavours, then served on a sesame seed bun'
    ));

    return menuDiv;
}

function createMenuItem(image, name, description){
    const menuItem = document.createElement('div');

    const foodImage = document.createElement('img');
    foodImage.src = image;

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;