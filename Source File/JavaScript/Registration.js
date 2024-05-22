//This code is an object-oriented code that controlling opening and closing for registration form
class CloseRegistrationForm {
    constructor(formId, closeButtonId) {
        this.formElement = document.getElementById(formId);
        this.closeButton = document.getElementById(closeButtonId);
        this.addCloseButtonListener();
    }

    addCloseButtonListener() {
        this.closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.closeForm();
        });
    }

    closeForm() {
        this.formElement.style.display = 'none';
    }
}

class OpenRegistrationForm {
    constructor(formId, openButtonId) {
        this.formElement = document.getElementById(formId);
        this.openButton = document.getElementById(openButtonId);
        this.addOpenButtonListener();
    }

    addOpenButtonListener() {
        this.openButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.openForm();
        })
    }

    openForm() {
        this.formElement.style.display = 'flex';
    }
}

const closeRegistrationForm = new CloseRegistrationForm('registration-form', 'close-button');
const openRegistrationForm = new OpenRegistrationForm('registration-form', 'open-button');