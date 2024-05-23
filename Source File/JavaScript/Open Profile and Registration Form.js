//This code is an object-oriented code that controlling opening and closing for registration form
class CloseRegistrationForm {
    constructor(formId, closeButtonId) {
        this.formElement = document.getElementById(formId);
        this.closeButton = document.getElementById(closeButtonId);
        this.addCloseButtonListener();
    }

    addCloseButtonListener() {
        if (localStorage.getItem('username') !== '') {
            if (this.formElement.id === 'profile-form') {
                this.closeButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    this.closeForm();
                })
            }
        }
        else {
            this.closeButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.closeForm();
            });
        }
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
        if (localStorage.getItem('username') !== '') {
            if (this.formElement.id === 'profile-form') {
                this.openButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    this.openForm();
                })
            }
        }
        else {
            this.openButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.openForm();
            })
        }
    }

    openForm() {
        this.formElement.style.display = 'flex';
    }
}

const closeRegistrationForm = new CloseRegistrationForm('registration-form', 'close-button');
const closeProfileForm = new CloseRegistrationForm('profile-form', 'close-profile');
const openRegistrationForm = new OpenRegistrationForm('registration-form', 'open-button');
const openProfileForm = new OpenRegistrationForm('profile-form', 'open-button');