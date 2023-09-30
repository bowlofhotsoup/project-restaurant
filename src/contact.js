function createContact(){
    const contactDiv = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const contactDesc = document.createElement('p');
    const contactForm = document.createElement('form');

    contactTitle.textContent = 'Contact Us';
    contactDiv.appendChild(contactTitle);

    contactDesc.textContent = 'If you have any questions or feedback on our brand or products, fill in the form below and we will get back to you as soon as possible.';
    contactDiv.appendChild(contactDesc);

    contactDiv.appendChild(contactForm);
    contactForm.classList.add('contact-form');
    
    const formName = document.createElement('input');
    formName.placeholder = 'Name';
    formName.id = 'name';
    formName.type = 'text';
    formName.autocomplete = 'name';

    const formEmail = document.createElement('input');
    formEmail.placeholder = 'Email Address';
    formEmail.id = 'email';
    formEmail.type = 'email';
    formEmail.autocomplete = 'email';

    const formTel = document.createElement('input');
    formTel.placeholder = 'Contact No.';
    formTel.id = 'tel';
    formTel.type = 'tel';
    formTel.autocomplete = 'tel';

    const formMsg = document.createElement('textarea');
    formMsg.placeholder = 'Your Message';
    formMsg.id = 'msg';
    formMsg.rows = '5';
    formMsg.cols = '33'; 
    formMsg.autocomplete = 'off';

    const formSubmit = document.createElement('button');
    formSubmit.type = 'submit';
    formSubmit.textContent = 'Submit';

    contactForm.appendChild(formName);
    contactForm.appendChild(formEmail);
    contactForm.appendChild(formTel);
    contactForm.appendChild(formMsg);
    contactForm.appendChild(formSubmit);

    return contactDiv;
};

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;