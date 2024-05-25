document.addEventListener("DOMContentLoaded", function() {
    class CreditCard {
        constructor() {
            this.cardNameInput = document.querySelector('.card-name-input');
            this.cardNumberInput = document.querySelector('.card-number-input');
            this.expiryMMInput = document.querySelector('.expiry-mm-input');
            this.expiryYYYYInput = document.querySelector('.expiry-yyyy-input');
            this.cvvInput = document.querySelector('.cvv-input');

            this.cardNameDisplay = document.querySelector('.card-name');
            this.cardNumberDisplayParts = document.querySelectorAll('.card-number-part');
            this.cardExpiryDisplay = document.querySelector('.card-expiry');

            this.CheckOutForProduct = document.getElementById('CheckOutForProduct');

            this.initEventListeners();
        }

        initEventListeners() {
            this.cardNameInput.addEventListener('input', () => this.updateCardName());
            this.cardNumberInput.addEventListener('input', () => this.updateCardNumber());
            this.expiryMMInput.addEventListener('input', () => this.updateExpiryMonth());
            this.expiryYYYYInput.addEventListener('input', () => this.updateExpiryYear());
            this.cvvInput.addEventListener('input', () => this.updateCVV());
            this.CheckOutForProduct.addEventListener('click', () => this.validateInputs());
        }

        updateCardName() {
            this.cardNameDisplay.textContent = this.cardNameInput.value || 'Giga Tamarashvili';
        }

        updateCardNumber() {
            let cardNumber = this.cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
            cardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber;
            this.cardNumberInput.value = cardNumber;

            this.cardNumberDisplayParts.forEach((part, index) => {
                part.textContent = cardNumber.substring(index * 5, (index + 1) * 5).trim().padEnd(4, '*');
            });
        }

        updateExpiryDate() {
            const mm = this.expiryMMInput.value.padStart(2, '0').substring(0, 2);
            const yyyy = this.expiryYYYYInput.value.substring(2, 4);
            this.cardExpiryDisplay.textContent = `${mm}/${yyyy}` || '12/18';
        }

        updateExpiryMonth() {
            this.expiryMMInput.value = this.expiryMMInput.value.replace(/\D/g, '').substring(0, 2);
            this.updateExpiryDate();
        }

        updateExpiryYear() {
            this.expiryYYYYInput.value = this.expiryYYYYInput.value.replace(/\D/g, '').substring(0, 4);
            this.updateExpiryDate();
        }

        updateCVV() {
            this.cvvInput.value = this.cvvInput.value.replace(/\D/g, '').substring(0, 3);
        }

        validateInputs() {
            const cardNameValid = this.cardNameInput.value.trim().length > 0;
            const cardNumberValid = /^\d{4} \d{4} \d{4} \d{4}$/.test(this.cardNumberInput.value);
            const expiryMMValid = /^\d{2}$/.test(this.expiryMMInput.value) && parseInt(this.expiryMMInput.value) >= 1 && parseInt(this.expiryMMInput.value) <= 12;
            const expiryYYYYValid = /^\d{4}$/.test(this.expiryYYYYInput.value);
            const cvvValid = /^\d{3}$/.test(this.cvvInput.value);

            if (cardNameValid && cardNumberValid && expiryMMValid && expiryYYYYValid && cvvValid) {
                this.saveDataToLocalStorage();
                this.clearInputs();
                this.deleteAllDataFromCart();
                alert('Purchase successful!');
                this.restartLocation();
            } else {
                alert('Please fill in all fields correctly.');
            }
        }

        clearInputs() {
            this.cardNameInput.value = '';
            this.cardNumberInput.value = '';
            this.expiryMMInput.value = '';
            this.expiryYYYYInput.value = '';
            this.cvvInput.value = '';
        }

        saveDataToLocalStorage() {
            localStorage.setItem('cardName', this.cardNameInput.value);
            localStorage.setItem('cardNumber', this.cardNumberInput.value);
            localStorage.setItem('expiryMM', this.expiryMMInput.value);
            localStorage.setItem('expiryYYYY', this.expiryYYYYInput.value);
            localStorage.setItem('cvv', this.cvvInput.value);
        }

        deleteAllDataFromCart() {
            localStorage.removeItem('cartProducts');
        }

        restartLocation() {
            setTimeout(() => {
                window.location = 'index.html';
            }, 1000);
        }

    }

    new CreditCard();
});
