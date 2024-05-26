class CloseOrders {
    constructor(formId, closeButtonId, Link) {
        this.formElement = document.getElementById(formId);
        this.closeButton = document.getElementById(closeButtonId);
        this.SpecialBootstrapLink = document.getElementById(Link);
        this.addCloseButtonListener();
    }

    addCloseButtonListener() {
        this.closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.closeForm();
            this.changeLink();
        });
    }

    closeForm() {
        this.formElement.style.display = 'none';
    }

    changeLink() {
        this.SpecialBootstrapLink.href = '';
    }
}

class OpenOrders {
    constructor(formId, openButtonId, Link) {
        this.formElement = document.getElementById(formId);
        this.openButton = document.getElementById(openButtonId);
        this.SpecialBootstrapLink = document.getElementById(Link);
        this.addOpenButtonListener();
    }

    addOpenButtonListener() {
        this.openButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.openForm();
            this.changeLink();
        })
    }

    openForm() {
        this.formElement.style.display = 'flex';
    }

    changeLink() {
        this.SpecialBootstrapLink.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
    }
}

const closeOrders = new CloseOrders('user-orders-detail', 'exitFromDetails', 'specialBootstrapLink');
const openOrdersWithIcon = new OpenOrders('user-orders-detail', 'openUserOrdersIcon', 'specialBootstrapLink');
const openOrdersWithText = new OpenOrders('user-orders-detail', 'openUserOrdersText', 'specialBootstrapLink');
