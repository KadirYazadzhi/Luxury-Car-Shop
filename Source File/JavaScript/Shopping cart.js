class openShoppingForm {
    constructor(shoppingCartSectionId, shoppingCartIconId) {
        this.formElement = document.getElementById(shoppingCartSectionId);
        this.openIcon = document.getElementById(shoppingCartIconId);
        this.addOpenButtonListener();
    }

    addOpenButtonListener() {
        this.openIcon.addEventListener('click', (event) => {
            event.preventDefault();
            this.openForm();
        });
    }

    openForm() {
        this.formElement.style.display = 'block';
    }
}

class closeShoppingFormWithArrow {
    constructor(shoppingCartSectionId, shoppingCartCloseIconId) {
        this.formElement = document.getElementById(shoppingCartSectionId);
        this.closeIcon = document.getElementById(shoppingCartCloseIconId);
        this.addCloseIconListener();
    }

    addCloseIconListener() {
        this.closeIcon.addEventListener('click', (event) => {
            event.preventDefault();
            this.closeForm();
        });
    }

    closeForm() {
        this.formElement.style.display = 'none';
    }
}

const openShoppingSection = new openShoppingForm('shopping-cart-section', 'shopping-cart-icon');
const closeShoppingSectionWithArrow = new closeShoppingFormWithArrow('shopping-cart-section', 'close-shopping-card-icon');
const closeShoppingSectionWithText = new closeShoppingFormWithArrow('shopping-cart-section', 'close-shopping-card-text');