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
    constructor(openButtonId) {
        this.RegistrationFormElement = document.getElementById('registration-form');
        this.ProfileFormElement = document.getElementById('profile-form');
        this.openButton = document.getElementById(openButtonId);
        this.addOpenButtonListener();
    }

    addOpenButtonListener() {
        this.openButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.openForm();
        });
    }

    openForm() {
        if (localStorage.getItem('isValidForOpenProfileOrRegistrationForm') === "true") {
            this.RegistrationFormElement.style.display = 'flex';
            this.ProfileFormElement.style.display = 'none';
        }
        else {
            this.ProfileFormElement.style.display = 'flex';
            this.RegistrationFormElement.style.display = 'none';
        }
    }
}


const closeRegistrationForm = new CloseRegistrationForm('registration-form', 'close-button');
const closeProfileForm = new CloseRegistrationForm('profile-form', 'close-profile');
const openProfileForm = new OpenRegistrationForm( 'open-button');