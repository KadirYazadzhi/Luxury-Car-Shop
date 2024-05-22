//This code is an object-oriented code that controlling opening and closing for favorite section
class CloseFavoriteForm {
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

class OpenFavoriteForm {
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
const closeFavoriteFormWithIcon = new CloseFavoriteForm('favourite-section', 'favorite-close-icon');
const closeFavoriteFormWithText = new CloseFavoriteForm('favourite-section', 'favorite-close-text');
const openFavoriteForm = new OpenFavoriteForm('favourite-section', 'favourite-icon');

